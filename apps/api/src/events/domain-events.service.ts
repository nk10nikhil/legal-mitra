import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";

@Injectable()
export class DomainEventsService {
  constructor(private readonly emitter: EventEmitter2) {}

  emit(eventName: string, payload: Record<string, unknown>) {
    this.emitter.emit(eventName, payload);
  }
}
