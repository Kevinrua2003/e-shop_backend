import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsDate, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @ApiProperty({ example: 'user789' })
    @IsString()
    userId: string;
    
    @ApiProperty({ example: 150.00 })
    @IsNumber()
    amount: number;
    
    @ApiProperty({ example: 'Pending' })
    @IsString()
    status: string;
    
    @ApiProperty({ example: 'Not Delivered' })
    @IsString()
    deliverStatus: string
}
