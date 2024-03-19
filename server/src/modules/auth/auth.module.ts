import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../../controllers/auth/auth.controller';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [AuthService],
    controllers: [AuthController],
  })
export class AuthModule {}
