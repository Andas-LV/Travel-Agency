import { Body, Controller, Post } from '@nestjs/common';
import { UserLogin } from '../../dto/user-login.dto';
import { AuthService } from '../../services/auth/auth.service';

@Controller('api/auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('/login')
    signIn(@Body() loginUserDto:UserLogin){
        const email = loginUserDto.email
        const password = loginUserDto.password
        return this.authService.signIn(email,password)
    }
}
