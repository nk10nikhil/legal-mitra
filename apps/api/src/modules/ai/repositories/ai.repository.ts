import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class AiRepository {
  constructor(private readonly prisma: PrismaService) {}

  logInteraction(payload: {
    user_id: string;
    case_id?: string;
    prompt: string;
    response: string;
  }) {
    return this.prisma.aiLog.create({ data: payload });
  }
}
