<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## Guía Completa para Desarrollar un Backend

Esta guía te mostrará cómo desarrollar un backend desde cero, paso a paso.

### Paso 1: Preparación y Requisitos
- Instala Node.js (preferentemente la versión LTS) y pnpm o npm.
- Instala el Nest CLI globalmente:
  ```bash
  npm install -g @nestjs/cli
  ```
- Prepara una base de datos PostgreSQL u otra de tu preferencia.
- Configura un entorno de desarrollo (VSCode, Git, etc).

### Paso 2: Inicialización del Proyecto
- Crea un nuevo proyecto usando Nest CLI:
  ```bash
  nest new proyecto_backend
  ```
- Ingresa al directorio del proyecto:
  ```bash
  cd proyecto_backend
  ```
- Instala Prisma y sus dependencias:
  ```bash
  pnpm add prisma @prisma/client
  pnpm prisma init
  ```
- Configura el archivo ".env" agregando la URL de conexión a la base de datos.

### Paso 3: Configuración de la Base de Datos y Prisma
- Define tu modelo de datos en "prisma/schema.prisma". Ejemplo:
  ```prisma
  model User {
    id    String @id @default(uuid())
    name  String
    email String @unique
    // ...otros campos si es necesario...
  }
  ```
- Ejecuta la migración de Prisma:
  ```bash
  pnpm prisma migrate dev --name init
  ```

### Paso 4: Creación de Módulos y Estructura del Proyecto
- Genera los módulos necesarios:
  ```bash
  nest generate module user
  nest generate module product
  nest generate module order
  nest generate module order-item
  nest generate module auth
  ```
- Dentro de cada módulo, crea controladores y servicios:
  ```bash
  nest generate controller user
  nest generate service user
  ```
- Organiza la estructura de carpetas para mantener un código modular y mantenible.

### Paso 5: Implementación de Servicios y Controladores
- En los servicios, implementa la lógica de negocio utilizando Prisma; por ejemplo, en "src/user/user.service.ts":
  ```ts
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({ data: createUserDto });
  }
  ```
- Define endpoints REST en los controladores y asegúrate de inyectar correctamente los servicios.

### Paso 6: Autenticación y Seguridad

Esta sección está basada en la implementación de autenticación y seguridad desarrollada en este proyecto y cubre los siguientes aspectos:

1. Instalación y librerías:  
   Se utilizan las siguientes librerías para gestionar JWT, estrategias de Passport, manejo de contraseñas y cookies:
   ```bash
   pnpm add @nestjs/jwt passport passport-jwt bcrypt cookie-parser
   ```

2. Configuración del módulo de autenticación:  
   Se crea un módulo en "src/auth/auth.module.ts" que importa:
   - JwtModule configurado con un secreto y opciones de expiración.
   - PassportModule para gestionar estrategias de autenticación.
   - El AuthService, que se encarga de validar usuarios, generar tokens (en "src/auth/auth.service.ts") y registrar nuevos usuarios con contraseña encriptada usando bcrypt.

3. Estrategia JWT y Guard:  
   - Se define un JWT Strategy (por ejemplo, en "src/auth/jwt.strategy.ts") para extraer el token desde los headers o cookies.
   - Se implementa un AuthGuard (ver "src/auth/auth.guard.ts") que utiliza Passport para verificar el token.  
     Este guard extrae el token:
       - Primero desde las cookies (configuradas en "src/main.ts" mediante cookie-parser).
       - Luego desde el header "Authorization" si no se encuentra en las cookies.
     Si el token es válido, se inyecta la información del usuario en la request.

4. Manejo de inicio de sesión, registro y logout:  
   - El endpoint de login en "src/auth/auth.controller.ts" utiliza el AuthService para:
     - Validar las credenciales comparando la contraseña proporcionada con el hash almacenado (bcrypt).
     - Generar un token JWT con datos del usuario (id, nombre, rol) y enviarlo mediante una cookie segura (httpOnly, secure en producción).
   - El endpoint de registro crea un nuevo usuario, aplicando bcrypt para hashear la contraseña.
   - El endpoint de logout limpia la cookie de autenticación.

5. Protección de rutas:  
   - Se utilizan Guards en rutas sensibles. Por ejemplo, en "src/auth/auth.controller.ts" se protege el endpoint que devuelve la información del usuario usando `@UseGuards(AuthGuard)`.
   - En otros módulos, se puede aplicar el mismo guard (por ejemplo, descomentando la línea `@UseGuards(AuthGuard)` en "src/user/user.controller.ts") para restringir el acceso.

6. Consideraciones adicionales de seguridad:  
   - El uso de pipes de validación globales (en "src/main.ts") y DTOs asegura que los datos recibidos sean sanitizados.
   - La configuración de CORS y variables de entorno (por ejemplo, JWT_SECRET en ".env") ayuda a mantener la seguridad en producción.

Esta implementación garantiza que todo el flujo de autenticación se integre de manera coherente y segura en el proyecto, sirviendo como base para reutilizar en futuros desarrollos.

### Paso 7: Validación, Pruebas y Documentación
- Aplica un pipe de validación global (ValidationPipe) en "src/main.ts":
  ```ts
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  ```
- Escribe pruebas unitarias e integrales usando Jest. Revisa ejemplos en archivos como "src/product/product.service.spec.ts".
- Integra Swagger para documentar la API:
  ```ts
  const config = new DocumentBuilder().setTitle('E-Commerce App').build();
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));
  ```

### Paso 8: Despliegue y Escalabilidad
- Configura CORS, variables de entorno y ajustes de producción (ver "src/main.ts").
- Consulta la documentación oficial de NestJS para optimizaciones y despliegue en producción.
- Considera plataformas como Mau para desplegar en AWS.

### Paso 9: Reutilización y Mantenimiento
- Mantén una estructura modular, desacoplada y documentada.
- Extrae configuraciones y lógica común en archivos o módulos reutilizables.
- Utiliza el proyecto como plantilla para futuros desarrollos ajustando solo las partes específicas del dominio.
