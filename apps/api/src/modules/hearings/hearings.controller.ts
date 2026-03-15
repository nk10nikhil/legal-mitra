import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { CreateHearingDto } from "./dto/create-hearing.dto";
import { UpdateHearingDto } from "./dto/update-hearing.dto";
import { HearingsService } from "./hearings.service";

@Controller("hearings")
@UseGuards(JwtAuthGuard)
export class HearingsController {
  constructor(private readonly hearingsService: HearingsService) {}

  @Post()
  create(@Body() dto: CreateHearingDto) {
    return this.hearingsService.create(dto);
  }

  @Get("case/:caseId")
  listByCase(@Param("caseId") caseId: string) {
    return this.hearingsService.findByCase(caseId);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateHearingDto) {
    return this.hearingsService.update(id, dto);
  }
}
