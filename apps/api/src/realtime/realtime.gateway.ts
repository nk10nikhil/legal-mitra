import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@Injectable()
@WebSocketGateway({ cors: true })
export class RealtimeGateway {
  @WebSocketServer()
  server!: Server;

  @OnEvent("case.created")
  onCaseCreated(payload: Record<string, unknown>) {
    this.server.emit("new_case", payload);
  }

  @OnEvent("hearing.scheduled")
  onHearingScheduled(payload: Record<string, unknown>) {
    this.server.emit("hearing_scheduled", payload);
  }

  @OnEvent("notification.created")
  onNotificationCreated(payload: Record<string, unknown>) {
    this.server.emit("new_notification", payload);
  }
}
