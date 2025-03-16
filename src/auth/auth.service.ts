import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthInput } from './dto/AuthInput';
import { SignInData } from './dto/SignInData';
import { AuthResult } from './dto/AuthResult';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async authenticate(input: {name?: string, email: string, password: string}): Promise<AuthResult> {
    const user = await this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException();
    }

    return this.signIn(user);
  }

  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = await this.userService.findOneByEmail(input.email);
        
    const match = user && bcrypt.compareSync(input.password, user.hashedPassword) 
    if (match) {
      return {
        userId: user.id,
        userName: user.name,
        userRole: user.role,
      };
    }
    return null;
  }

  async signIn(user: SignInData): Promise<AuthResult>{

    if(!user) throw new BadRequestException("Problems with the input data")

    const payload = {
      sub: user.userId,
      userName: user.userName,
      userRole: user.userRole,
    };

    const accessToken = await this.jwtService.signAsync(payload, {expiresIn: '1h', secret: process.env.JWT_SECRET});
    return {accessToken: accessToken, userId: user.userId, userName: user.userName, userRole: user.userRole}
  }

  async register(input: CreateUserDto): Promise<User> {

    if(!input) throw new BadRequestException("Problems with the input data")
    
    const password = await bcrypt.hash(input.hashedPassword, 10);

    const user: CreateUserDto = {
      name: input.name,
      email: input.email,
      hashedPassword: password,
      role: input.role
    }

    return await this.userService.create(user)
}
}
