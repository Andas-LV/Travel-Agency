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

    @Column("int", { array: true, nullable: true })
    destinationIds: number[] | null;
    
    @Column("int", { array: true, nullable: true })
    boughtDestinationIds: number[] | null;

    @Column({
        type: "varchar",
        default: "USER" // Set the default role value here
      })
    @IsString()
    role: string;
}
