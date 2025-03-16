import { Role } from "@prisma/client"

export class AuthResult{
    accessToken: string
    userId: string
    userName: string
    userRole: Role
}