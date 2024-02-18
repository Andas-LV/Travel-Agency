import { IsInt, IsString } from "@nestjs/class-validator";

export class Blog {
    @IsInt()
    blog_id: number;

    @IsString()
    description:string;
}
