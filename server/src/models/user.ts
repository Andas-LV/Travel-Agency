import { IsEmail, IsInt, IsString, MinLength } from "@nestjs/class-validator";

export class User {
    @IsInt()
    id: number;
  
    @IsEmail()
    @MinLength(1)
    email: string;

    @IsString()
    password:string

    destinationIds:[]

    boughtDestinationIds:[]

    @IsString()
    role:string
}
