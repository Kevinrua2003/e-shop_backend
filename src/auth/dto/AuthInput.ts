import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class AuthInput {
    @ApiPropertyOptional({ description: 'Nombre del usuario' })
    @IsString()
    name?: string;

    @ApiProperty({ description: 'Correo electrónico del usuario' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Contraseña del usuario' })
    @IsString()
    password: string;
}