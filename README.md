# E-Commerce Backend API

Backend desarrollado con NestJS para una aplicación de comercio electrónico (e-shop). Proporciona una API RESTful completa para la gestión de usuarios, productos, pedidos y autenticación.

## Descripción

Esta API permite:

- **Gestión de usuarios**: Registro, login, actualización y eliminación de usuarios con roles (USER, ADMIN).
- **Gestión de productos**: CRUD completo de productos con información detallada (nombre, descripción, precio, marca, categoría, stock, imagen).
- **Gestión de pedidos**: Creación y seguimiento de pedidos con estados de entrega.
- **Items de pedido**: Gestión de los productos incluidos en cada pedido.
- **Autenticación segura**: Sistema JWT con cookies HTTP-only y encriptación de contraseñas con bcrypt.

## Stack Tecnológico

### Framework y Lenguaje

- **NestJS** (v11): Framework progresivo de Node.js para construir aplicaciones server-side escalables.
- **TypeScript**: Lenguaje principal con tipado estático.

### Base de Datos

- **PostgreSQL**: Base de datos relacional.
- **Prisma** (v6): ORM para gestión de la base de datos con migraciones.

### Autenticación y Seguridad

- **JWT** (@nestjs/jwt): Tokens JWT para autenticación stateless.
- **Passport** (@nestjs/passport): Estrategias de autenticación.
- **bcryptjs**: Hasheo de contraseñas.
- **cookie-parser**: Gestión de cookies HTTP-only.

### Documentación

- **Swagger** (@nestjs/swagger): Documentación interactiva de la API en `/api`.

### Herramientas de Desarrollo

- **ESLint** + **Prettier**: Linting y formateo de código.
- **Jest**: Framework de testing.

## Estructura del Proyecto

```
back/
├── prisma/
│   ├── schema.prisma       # Definición del modelo de datos
│   ├── seed.ts             # Seed de datos inicial
│   └── seed-products.ts    # Seed de productos de ejemplo
├── src/
│   ├── auth/               # Módulo de autenticación
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── auth.guard.ts   # Guard JWT personalizado
│   │   └── dto/            # DTOs de autenticación
│   ├── user/               # Módulo de usuarios
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   └── dto/            # DTOs de usuario
│   ├── product/           # Módulo de productos
│   │   ├── product.controller.ts
│   │   ├── product.service.ts
│   │   └── dto/            # DTOs de producto
│   ├── order/              # Módulo de pedidos
│   │   ├── order.controller.ts
│   │   ├── order.service.ts
│   │   └── dto/            # DTOs de pedido
│   ├── order-item/         # Módulo de items de pedido
│   │   ├── order-item.controller.ts
│   │   ├── order-item.service.ts
│   │   └── dto/            # DTOs de items
│   ├── prisma.service.ts   # Servicio singleton de Prisma
│   ├── app.module.ts       # Módulo raíz
│   └── main.ts             # Punto de entrada
├── test/
│   └── app.e2e-spec.ts     # Tests e2e
├── package.json
├── tsconfig.json
└── nest-cli.json
```

## Modelo de Datos

### User

| Campo          | Tipo               | Descripción           |
| -------------- | ------------------ | --------------------- |
| id             | UUID               | Identificador único   |
| name           | String             | Nombre del usuario    |
| email          | String             | Email único           |
| hashedPassword | String             | Contraseña encriptada |
| role           | Enum (USER, ADMIN) | Rol del usuario       |
| orders         | Order[]            | Relación con pedidos  |

### Product

| Campo       | Tipo    | Descripción          |
| ----------- | ------- | -------------------- |
| id          | UUID    | Identificador único  |
| name        | String  | Nombre del producto  |
| description | String? | Descripción opcional |
| price       | Float   | Precio del producto  |
| brand       | String  | Marca                |
| category    | String  | Categoría            |
| inStock     | Boolean | Disponibilidad       |
| image       | String  | URL de la imagen     |

### Order

| Campo         | Tipo        | Descripción         |
| ------------- | ----------- | ------------------- |
| id            | UUID        | Identificador único |
| userId        | String      | FK al usuario       |
| amount        | Float       | Total del pedido    |
| status        | String      | Estado del pedido   |
| deliverStatus | String      | Estado de entrega   |
| createDate    | DateTime    | Fecha de creación   |
| orderItems    | OrderItem[] | Relación con items  |

### OrderItem

| Campo     | Tipo   | Descripción         |
| --------- | ------ | ------------------- |
| id        | UUID   | Identificador único |
| orderId   | String | FK al pedido        |
| productId | String | FK al producto      |
| quantity  | Int    | Cantidad            |
| price     | Float  | Precio unitario     |

## Endpoints de la API

### Autenticación (`/auth`)

| Método | Endpoint         | Descripción              | Auth |
| ------ | ---------------- | ------------------------ | ---- |
| POST   | `/auth/login`    | Inicio de sesión         | No   |
| POST   | `/auth/register` | Registro de usuario      | No   |
| POST   | `/auth/logout`   | Cierre de sesión         | No   |
| GET    | `/auth/user`     | Obtener info del usuario | Sí   |

### Usuarios (`/user`)

| Método | Endpoint             | Descripción               | Auth |
| ------ | -------------------- | ------------------------- | ---- |
| POST   | `/user`              | Crear usuario             | No   |
| GET    | `/user`              | Listar usuarios           | Sí   |
| GET    | `/user/:id`          | Obtener usuario por ID    | Sí   |
| GET    | `/user/email/:email` | Obtener usuario por email | No   |
| PATCH  | `/user/:id`          | Actualizar usuario        | No   |
| DELETE | `/user/:id`          | Eliminar usuario          | Sí   |

### Productos (`/product`)

| Método | Endpoint                  | Descripción             | Auth |
| ------ | ------------------------- | ----------------------- | ---- |
| POST   | `/product`                | Crear producto          | No   |
| GET    | `/product`                | Listar productos        | No   |
| GET    | `/product/:id`            | Obtener producto por ID | No   |
| GET    | `/product/most/expensive` | Producto más caro       | No   |
| PATCH  | `/product/:id`            | Actualizar producto     | No   |
| DELETE | `/product/:id`            | Eliminar producto       | No   |

### Pedidos (`/order`)

| Método | Endpoint                | Descripción           | Auth |
| ------ | ----------------------- | --------------------- | ---- |
| POST   | `/order`                | Crear pedido          | No   |
| GET    | `/order`                | Listar pedidos        | No   |
| GET    | `/order/:id`            | Obtener pedido por ID | No   |
| GET    | `/order/byUser/:userId` | Pedidos por usuario   | No   |
| PATCH  | `/order/:id`            | Actualizar pedido     | No   |
| DELETE | `/order/:id`            | Eliminar pedido       | No   |

### Items de Pedido (`/order-item`)

| Método | Endpoint          | Descripción         | Auth |
| ------ | ----------------- | ------------------- | ---- |
| POST   | `/order-item`     | Crear item          | No   |
| GET    | `/order-item`     | Listar items        | No   |
| GET    | `/order-item/:id` | Obtener item por ID | No   |
| PATCH  | `/order-item/:id` | Actualizar item     | No   |
| DELETE | `/order-item/:id` | Eliminar item       | No   |

## Configuración

### Variables de Entorno

Copia `.env.example` a `.env` y configura:

```env
# Conexión a PostgreSQL
DB_TYPE=postgresql
DB_USER=tu_usuario
DB_PASS=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nombre_db
DATABASE_URL="${DB_TYPE}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public"

# Administrador
ADMIN_USER=admin@gmail.com
ADMIN_PASS=password

# JWT
JWT_SECRET=tu_secreto_jwt
JWT_REFRESH=tu_secreto_refresh
```

### Generación de Secretos JWT

```bash
openssl rand -base64 64
```

## Instalación y Ejecución

### Requisitos Previos

- Node.js (v18+)
- pnpm (recomendado) o npm
- PostgreSQL

### Instalación

```bash
# Instalar dependencias
pnpm install
```

### Configuración de Base de Datos

```bash
# Crear migraciones
pnpm prisma migrate dev --name init

# (Opcional) Poblar con datos de ejemplo
pnpm seed
pnpm seed:products
```

### Ejecutar el Proyecto

```bash
# Desarrollo (con hot-reload)
pnpm run start:dev

# Producción
pnpm run start:prod
```

El servidor estará disponible en `http://localhost:5000`

### Documentación Swagger

Accede a `http://localhost:5000/api` para ver la documentación interactiva de la API.

## Testing

```bash
# Tests unitarios
pnpm run test

# Tests con watch
pnpm run test:watch

# Coverage
pnpm run test:cov

# Tests e2e
pnpm run test:e2e
```

## Linting

```bash
# Ejecutar linter
pnpm run lint
```

## Características de Seguridad Implementadas

1. **Contraseñas hasheadas**: Uso de bcrypt con salt rounds = 10.
2. **Tokens JWT**: Expiración de 30 minutos (configurable).
3. **Cookies HTTP-only**: Los tokens se almacenan en cookies seguras no accesibles desde JavaScript.
4. **CORS configurado**: Solo permite orígenes específicos (frontend en producción y localhost).
5. **Validación de DTOs**: Uso de class-validator y class-transformer con whitelist.
6. **Protección de rutas**: Guards JWT para endpoints protegidos.

## Decisiones de Diseño

1. **Patrón Repository**: Uso directo de PrismaService en los servicios para simplicidad.
2. **Módulos separados**: Arquitectura modular de NestJS para mejor organización.
3. **DTOs con validación**: Cada endpoint usa DTOs con decoradores de class-validator.
4. **Soft delete no implementado**: Eliminación física en cascada.
5. **Cookies para autenticación**: Preferidas sobre localStorage por seguridad (XSS).

## Extensiones Futuras

- Implementar refresh tokens
- Agregar paginación a los endpoints de listados
- Implementar roles (ADMIN/USER) en los guards
- Agregar upload de imágenes
- Implementar notificaciones por email
- Agregar logs con Winston
- Implementar rate limiting
