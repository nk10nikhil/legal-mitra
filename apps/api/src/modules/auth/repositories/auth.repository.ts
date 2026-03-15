import { Injectable } from "@nestjs/common";
import { Role, User } from "@prisma/client";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  createUser(payload: {
    name: string;
    email: string;
    phone?: string;
    password_hash: string;
    role: Role;
  }): Promise<User> {
    return this.prisma.user.create({ data: payload });
  }
}
