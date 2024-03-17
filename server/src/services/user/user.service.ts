  import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { CreateUserDto } from 'src/dto/create-user.dto';
  import { User } from '../../models/user';
  import { Repository } from 'typeorm';
  import * as bcrypt from 'bcrypt';

  @Injectable()
  export class UserService {
    constructor(@InjectRepository(User)
    private userRepository: Repository<User>) {}

    async createUser(createUserDto: CreateUserDto): Promise<string> {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10); 
      const newUser = this.userRepository.create({email:createUserDto.email, password:hashedPassword});
      const user = this.userRepository.save(newUser);

      if(!user) return 'Something went wrong...'
      return 'User successfully created'
    }

    async findAllUsers(): Promise<User[]> {   
      return this.userRepository.find({
        select: [
          'id',
          'email',
          'destinationIds',
          'role',
          'boughtDestinationIds'
        ],
      });
    }

    userSelect= {
      select: [
        'id',
        'email',
        'destinationIds',
        'role',
        'boughtDestinationIds'
      ]
    }
    
    async findOneUser(id){
      const user = await this.userRepository.findOneById(id);
      if (user) {
        delete user.password; // remove the password property
      }
      return user;
    }
    
  }
