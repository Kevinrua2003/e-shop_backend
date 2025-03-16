import { ApiProperty } from '@nestjs/swagger';
import { Role } from "@prisma/client";
import { IsEmail, IsEnum, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'John Doe', minLength: 3 })
    @IsString()
    @MinLength(3)
    name: string;
    
    @ApiProperty({ example: 'john@example.com' })
    @IsEmail()
    email: string;
    
    @ApiProperty({ example: 'securePass123', minLength: 8, maxLength: 16 })
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    hashedPassword: string;
    
    @ApiProperty({ example: 'USER' })
    @IsEnum(Role)
    role: Role
}
