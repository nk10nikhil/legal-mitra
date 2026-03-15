import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateNotificationDto } from "../dto/create-notification.dto";

@Injectable()
export class NotificationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateNotificationDto) {
    return this.prisma.notification.create({ data: dto });
  }

  listByUser(userId: string) {
    return this.prisma.notification.findMany({
      where: { user_id: userId },
      orderBy: { created_at: "desc" },
    });
  }

  markRead(id: string) {
    return this.prisma.notification.update({
      where: { id },
      data: { is_read: true },
    });
  }

  findById(id: string) {
    return this.prisma.notification.findUnique({ where: { id } });
  }
}
