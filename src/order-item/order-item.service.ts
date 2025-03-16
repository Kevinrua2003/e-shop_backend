import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrderItemService {

  constructor(private prisma: PrismaService){}

  async create(createOrderItemDto: CreateOrderItemDto) {
    return await this.prisma.orderItem.create({data: createOrderItemDto});
  }

  async findAll() {
    return await this.prisma.orderItem.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.orderItem.findUnique({where: {id}});
  }

  async update(id: string, updateOrderItemDto: UpdateOrderItemDto) {
    return await this.prisma.orderItem.update({where: {id}, data: updateOrderItemDto});
  }

  async remove(id: string) {
    return await this.prisma.orderItem.delete({where: {id}});
  }
}
