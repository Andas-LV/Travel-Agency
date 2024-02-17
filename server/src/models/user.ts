import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsInt, IsString, MinLength } from 'class-validator';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    @IsInt()
    id: number;

    @Column()
    @IsEmail()
    @MinLength(1)
    email: string;

    @Column()
    @IsString()
    password: string;

    // Assuming destinationIds is an array of integers, adjust based on your schema
    @Column("int", { array: true })
    destinationIds: number[];

    // Assuming boughtDestinationIds is an array of integers, adjust based on your schema
    @Column("int", { array: true })
    boughtDestinationIds: number[];

    @Column({
        type: "varchar",
        default: "USER" // Set the default role value here
      })
    @IsString()
    role: string;
}
