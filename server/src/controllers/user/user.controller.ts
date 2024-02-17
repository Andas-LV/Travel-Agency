import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from '../../models/user';
import { UserService } from 'src/services/user/user.service';
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('connect')
  async connectToDB() {
    const response = this.userService.checkDatabaseConnection()
    return response
  }

  @Post('/create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get("/all")
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }
}
