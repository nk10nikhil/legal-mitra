import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { AiModule } from "./modules/ai/ai.module";
import { AuthModule } from "./modules/auth/auth.module";
import { CasesModule } from "./modules/cases/cases.module";
import { EvidenceModule } from "./modules/evidence/evidence.module";
import { HearingsModule } from "./modules/hearings/hearings.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { UsersModule } from "./modules/users/users.module";
import { DatabaseModule } from "./database/database.module";
import { EventsModule } from "./events/events.module";
import { RealtimeModule } from "./realtime/realtime.module";
import { StorageModule } from "./storage/storage.module";
import { CacheModule } from "./cache/cache.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EventEmitterModule.forRoot(),
    DatabaseModule,
    EventsModule,
    RealtimeModule,
    StorageModule,
    CacheModule,
    AuthModule,
    UsersModule,
    CasesModule,
    EvidenceModule,
    HearingsModule,
    NotificationsModule,
    AiModule,
  ],
})
export class AppModule {}
