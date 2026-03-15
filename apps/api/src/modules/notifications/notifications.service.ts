import { Injectable, NotFoundException } from "@nestjs/common";
import { DomainEventsService } from "src/events/domain-events.service";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { NotificationsRepository } from "./repositories/notifications.repository";

@Injectable()
export class NotificationsService {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
    private readonly domainEvents: DomainEventsService,
  ) {}

  async create(dto: CreateNotificationDto) {
    const notification = await this.notificationsRepository.create(dto);
    this.domainEvents.emit("notification.created", {
      notificationId: notification.id,
      userId: notification.user_id,
      type: notification.type,
    });
    return notification;
  }

  list(userId: string) {
    return this.notificationsRepository.listByUser(userId);
  }

  async markRead(id: string) {
    const existing = await this.notificationsRepository.findById(id);
    if (!existing) {
      throw new NotFoundException("Notification not found");
    }
    return this.notificationsRepository.markRead(id);
  }
}
