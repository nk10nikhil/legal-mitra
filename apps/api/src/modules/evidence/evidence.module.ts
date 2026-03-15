import { Module } from "@nestjs/common";
import { EvidenceController } from "./evidence.controller";
import { EvidenceRepository } from "./repositories/evidence.repository";
import { EvidenceService } from "./evidence.service";

@Module({
  controllers: [EvidenceController],
  providers: [EvidenceRepository, EvidenceService],
  exports: [EvidenceService],
})
export class EvidenceModule {}
