// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/user/user.controller';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user/user.service';


@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register User entity for feature module
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}