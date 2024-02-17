import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://default:dLK2TmeH7ciq@ep-withered-tooth-a2gw2h8z-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require', // Using the SSL connection string
      entities:[User],
      extra: {
        ssl: {
          rejectUnauthorized: false, // Note: This is necessary if your server uses self-signed certificates; for production, ensure your certificates are properly signed
        },
      },
      synchronize:true
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
