import { Injectable, NotFoundException } from "@nestjs/common";
import { DomainEventsService } from "src/events/domain-events.service";
import { CreateHearingDto } from "./dto/create-hearing.dto";
import { UpdateHearingDto } from "./dto/update-hearing.dto";
import { HearingsRepository } from "./repositories/hearings.repository";

@Injectable()
export class HearingsService {
  constructor(
    private readonly hearingsRepository: HearingsRepository,
    private readonly domainEvents: DomainEventsService,
  ) {}

  async create(dto: CreateHearingDto) {
    const hearing = await this.hearingsRepository.create(dto);
    this.domainEvents.emit("hearing.scheduled", {
      hearingId: hearing.id,
      caseId: hearing.case_id,
      judgeId: hearing.judge_id,
      scheduledTime: hearing.scheduled_time,
    });
    return hearing;
  }

  findByCase(caseId: string) {
    return this.hearingsRepository.findByCase(caseId);
  }

  async update(id: string, dto: UpdateHearingDto) {
    const existing = await this.hearingsRepository.findById(id);
    if (!existing) {
      throw new NotFoundException("Hearing not found");
    }

    return this.hearingsRepository.update(id, dto);
  }
}
