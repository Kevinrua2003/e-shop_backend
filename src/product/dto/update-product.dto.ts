import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsBoolean, IsNumber, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty({ example: 'Laptop', minLength: 3 })
    @IsString()
    @MinLength(3)
    name: string;
    
    @ApiProperty({ example: 'High-end gaming laptop' })
    @IsString()
    description: string;
    
    @ApiProperty({ example: 999.99 })
    @IsNumber()
    price: number;
    
    @ApiProperty({ example: 'Dell' })
    @IsString()
    brand: string;
    
    @ApiProperty({ example: 'Electronics' })
    @IsString()
    category: string;
    
    @ApiProperty({ example: true })
    @IsBoolean()
    inStock: boolean;
    
    @ApiProperty({ example: 'http://example.com/laptop.jpg' })
    @IsUrl()
    image: string
}
