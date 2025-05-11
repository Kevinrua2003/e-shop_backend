import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('E-Commerce App')
    .setDescription('The E-Commerce Description')
    .setVersion('1.0')
    .addTag('Some')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors({
    origin: ["https://e-shop-frontend-liart.vercel.app" , "http://localhost:3000"], // Permite solo el frontend
    credentials: true, // Permite el envío de cookies y headers de autenticación
  });

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
