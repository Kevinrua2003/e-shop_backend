import { BadRequestException, Body, Controller, Get, HttpCode, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { AuthInput } from './dto/AuthInput';
import { Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login de usuario' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', nullable: true, example: 'Juan' },
        email: { type: 'string', example: 'juan@ejemplo.com' },
        password: { type: 'string', example: 'password123' },
      },
      required: ['email', 'password']
    }
  })  
  @Post('login')
  @HttpCode(200)
  async login(@Body() input: AuthInput, @Res({ passthrough: true }) res: Response) {
    if (!input) {
      throw new BadRequestException("Undefined Object");
    }
    const authResult = await this.authService.authenticate(input);

    res.cookie('token', authResult.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000, 
      path: '/', 
    });

    return { 
      userId: authResult.userId, 
      userName: authResult.userName,
      userRole: authResult.userRole 
    };
  }

  @ApiOperation({ summary: 'Registro de usuario' })
  @ApiBody({ type: CreateUserDto })
  @Post('/register')
  register(@Body() input: CreateUserDto) {
    if (!input) {
      throw new BadRequestException("Undefined Object");
    }
    return this.authService.register(input);
  }

  @ApiOperation({ summary: 'Logout de usuario' })
  @Post('logout')
  @HttpCode(200)
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/', 
      expires: new Date(0),
    });
    return { message: 'Logout successful' };
  }

  @UseGuards(AuthGuard)
  @Get('user')
  getUserInfo(@Request() request) {
    return request.user
  }
}
