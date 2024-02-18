  import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { CreateUserDto } from '../../dto/create-user.dto';
  import { User } from '../../models/user';
  import { Connection, Repository } from 'typeorm';

  @Injectable()
  export class UserService {
    constructor(private connection: Connection, @InjectRepository(User)
    private userRepository: Repository<User>,) {}

    async checkDatabaseConnection(): Promise<boolean> {
      try {
        await this.connection.query('SELECT 1'); // Simple query to test the connection
        console.log('Database connection is successfully established.');
        return true;
      } catch (error) {
        console.error('Database connection failed:', error);
        return false;
      }
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
      const newUser = this.userRepository.create(createUserDto);
      return this.userRepository.save(newUser);
    }

    async findAllUsers(): Promise<User[]> {   
      return this.userRepository.find();
    }
  }
