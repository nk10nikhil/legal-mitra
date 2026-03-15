import { Module } from "@nestjs/common";
import { HearingsController } from "./hearings.controller";
import { HearingsRepository } from "./repositories/hearings.repository";
import { HearingsService } from "./hearings.service";

@Module({
  controllers: [HearingsController],
  providers: [HearingsRepository, HearingsService],
  exports: [HearingsService],
})
export class HearingsModule {}
