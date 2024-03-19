import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../models/user';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import {sign} from 'jsonwebtoken'
@Injectable()

export class AuthService {
    constructor(@InjectRepository(User)
    private userRepository: Repository<User>){}
    async signIn(email: string, passwordApi: string): Promise<Object | string> {
        const user = await this.userRepository.findOne({where:{email:email}});
        if (!user) {
          return null;
        }
    
        const isPasswordValid = await bcrypt.compare(passwordApi, user.password);
        if (!isPasswordValid) {
          return 'Invalid password'; // Invalid password
        }
        const token = sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        return {token: token};
      }
}
