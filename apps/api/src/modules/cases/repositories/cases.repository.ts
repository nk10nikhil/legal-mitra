import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateCaseDto } from "../dto/create-case.dto";
import { UpdateCaseDto } from "../dto/update-case.dto";

@Injectable()
export class CasesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(created_by: string, dto: CreateCaseDto) {
    return this.prisma.case.create({
      data: {
        ...dto,
        created_by,
      },
    });
  }

  findAll() {
    return this.prisma.case.findMany({ orderBy: { created_at: "desc" } });
  }

  findById(id: string) {
    return this.prisma.case.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateCaseDto) {
    return this.prisma.case.update({ where: { id }, data: dto });
  }
}
