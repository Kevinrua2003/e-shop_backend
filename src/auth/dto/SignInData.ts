import { Role } from "@prisma/client"

export class SignInData{
    userId: string
    userName: string
    userRole: Role
}