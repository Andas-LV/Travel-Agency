import { Body, Controller, Get, Param, Post,Headers, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';
import {verify} from 'jsonwebtoken'

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}
 

  @Post('/create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<Object> {
    return this.userService.createUser(createUserDto);
  }

  @Get("/all")
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get("/one")
  async getOneUser(@Headers('Authorization') authHeader:string): Promise<User | string>{
    const token = authHeader.split(' ')[1];
    try {
      const decoded = verify(token, process.env.SECRET_KEY);
      const userId = decoded.userId;
      return this.userService.findOneUser(userId);
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
