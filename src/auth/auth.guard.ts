import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard as NestAuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard extends NestAuthGuard('jwt') {

  constructor(private jwtService: JwtService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = this.getRequest(context);
    const token = this.extractToken(request);

    if (!token) throw new UnauthorizedException("Missing token");

    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: process.env.JWT_SECRET });

      request.user = {
        userId: payload.sub,
        userName: payload.userName,
        userRole: payload.userRole,
      };

      request['user'] = payload;
      return true;

    } catch (error) {
      throw new UnauthorizedException("Error verifying token");
    }
  }

  getRequest(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    // Extrae el token de las cookies y lo asigna al header Authorization
    if (req.cookies && req.cookies.token) {
      req.headers.authorization = `Bearer ${req.cookies.token}`;
    }
    return req;
  }

  private extractToken(request: Request) {
    if (request.cookies && request.cookies.token) {
      return request.cookies.token;
    }

    if (!request.headers.authorization) {
      return undefined;
    }
    const [type, token] = request.headers.authorization.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}
