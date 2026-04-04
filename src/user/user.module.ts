import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/main';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtService],
})
export class UserModule {}
