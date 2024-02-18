import { IsInt, IsString, MinLength } from "@nestjs/class-validator";

export class Destination {
    @IsInt()
    city_id: number;
  
    @IsString()
    @MinLength(1)
    city_name: string;

    @IsInt()
    price:string;

    @IsInt()
    rating:string;

    @IsString()
    description:string;

    @IsString()
    img_path:string;
}
