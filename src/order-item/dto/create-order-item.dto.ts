import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from "class-validator"

export class CreateOrderItemDto {
    @ApiProperty({ example: 'order123', minLength: 3 })
    @IsString()
    @MinLength(3)
    orderId: string;

    @ApiProperty({ example: 'product456', minLength: 3 })
    @IsString()
    @MinLength(3)
    productId: string;

    @ApiProperty({ example: 2 })
    @IsNumber()
    quantity: number;

    @ApiProperty({ example: 49.99 })
    @IsNumber()
    price: number
}
