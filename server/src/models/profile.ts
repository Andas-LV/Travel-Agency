import { IsEmail, IsInt, IsString, MinLength } from "@nestjs/class-validator";

export class Profile {
    @IsInt()
    user_id: number;
  
    @IsEmail()
    @MinLength(1)
    email: string;

    boughtDestinationIds:[]

    @IsString()
    profile_img:string
}
