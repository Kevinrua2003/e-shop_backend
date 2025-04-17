import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {

  constructor(private prisma: PrismaService){}

  async create(createProductDto: CreateProductDto) {
    return await this.prisma.product.create({data: createProductDto});
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({where: {id}});
  }

  async findExpensive() {
    const product = await this.prisma.product.findFirst({
      orderBy: { price: 'desc' }
    });
    if (!product) {
      throw new NotFoundException('No products found');
    }
    
    return product;
  }
  

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.prisma.product.update({where: {id}, data: updateProductDto});
  }

  async remove(id: string) {
    return await this.prisma.product.delete({where: {id}});
  }
}
