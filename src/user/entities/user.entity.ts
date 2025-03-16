import { Role } from "@prisma/client";

export class User {
    name: string;
    email: string;
    hashedPassword: string;
    role: Role
}
