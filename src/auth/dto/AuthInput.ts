import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class AuthInput {
    @ApiProperty({ description: 'Correo electrónico del usuario' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Contraseña del usuario' })
    @IsString()
    password: string;
}