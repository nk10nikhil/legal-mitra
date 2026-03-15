import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateHearingDto } from "../dto/create-hearing.dto";
import { UpdateHearingDto } from "../dto/update-hearing.dto";

@Injectable()
export class HearingsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateHearingDto) {
    return this.prisma.hearing.create({
      data: {
        ...dto,
        scheduled_time: new Date(dto.scheduled_time),
      },
    });
  }

  findByCase(caseId: string) {
    return this.prisma.hearing.findMany({
      where: { case_id: caseId },
      orderBy: { scheduled_time: "asc" },
    });
  }

  findById(id: string) {
    return this.prisma.hearing.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateHearingDto) {
    return this.prisma.hearing.update({
      where: { id },
      data: {
        ...dto,
        scheduled_time: dto.scheduled_time ? new Date(dto.scheduled_time) : undefined,
      },
    });
  }
}
