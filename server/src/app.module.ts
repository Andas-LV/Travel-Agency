import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user';
import { UserModule } from './modules/user/user.module';
import * as dotenv from 'dotenv'
import { AuthModule } from './modules/auth/auth.module';
dotenv.config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URL, 
      entities:[User],
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      synchronize:true
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
