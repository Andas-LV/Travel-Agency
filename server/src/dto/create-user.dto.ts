import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(1)
  password: string;

  // Include other properties as needed, such as role, etc.
  // For arrays like destinationIds, you would need to validate them appropriately
  // This example focuses on email and password for simplicity
}
