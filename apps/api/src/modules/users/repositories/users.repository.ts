import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { UpdateUserDto } from "../dto/update-user.dto";

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  updateById(id: string, dto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: dto,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        created_at: true,
        updated_at: true,
      },
    });
  }
}
