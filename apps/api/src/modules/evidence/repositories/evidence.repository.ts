import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class EvidenceRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(payload: {
    case_id: string;
    uploaded_by: string;
    file_url: string;
    hash: string;
    description?: string;
  }) {
    return this.prisma.evidence.create({ data: payload });
  }

  findById(id: string) {
    return this.prisma.evidence.findUnique({ where: { id } });
  }
}
