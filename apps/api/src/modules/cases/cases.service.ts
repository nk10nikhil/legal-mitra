import { Injectable, NotFoundException } from "@nestjs/common";
import { DomainEventsService } from "src/events/domain-events.service";
import { CreateCaseDto } from "./dto/create-case.dto";
import { UpdateCaseDto } from "./dto/update-case.dto";
import { CasesRepository } from "./repositories/cases.repository";

@Injectable()
export class CasesService {
  constructor(
    private readonly casesRepository: CasesRepository,
    private readonly domainEvents: DomainEventsService,
  ) {}

  async create(createdBy: string, dto: CreateCaseDto) {
    const legalCase = await this.casesRepository.create(createdBy, dto);
    this.domainEvents.emit("case.created", {
      caseId: legalCase.id,
      createdBy,
      status: legalCase.status,
    });
    return legalCase;
  }

  findAll() {
    return this.casesRepository.findAll();
  }

  async findById(id: string) {
    const legalCase = await this.casesRepository.findById(id);
    if (!legalCase) {
      throw new NotFoundException("Case not found");
    }
    return legalCase;
  }

  async update(id: string, dto: UpdateCaseDto) {
    await this.findById(id);
    return this.casesRepository.update(id, dto);
  }
}
