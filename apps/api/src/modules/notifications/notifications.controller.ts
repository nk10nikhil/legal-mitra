import { Controller, Get, Param, Patch, Post, Body, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { CurrentUser } from "src/modules/auth/current-user.decorator";
import { AuthUser } from "src/modules/auth/entities/auth-user.entity";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { NotificationsService } from "./notifications.service";

@Controller("notifications")
@UseGuards(JwtAuthGuard)
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create(@Body() dto: CreateNotificationDto) {
    return this.notificationsService.create(dto);
  }

  @Get()
  list(@CurrentUser() user: AuthUser) {
    return this.notificationsService.list(user.sub);
  }

  @Patch(":id/read")
  markRead(@Param("id") id: string) {
    return this.notificationsService.markRead(id);
  }
}
