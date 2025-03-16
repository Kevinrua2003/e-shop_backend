import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './configs/JWT_SECRET';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService, UserService, PrismaService],
  controllers: [AuthController],
  imports: [UserModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '30m' },
    }),
    PassportModule,
  ]
})
export class AuthModule {}
