import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { CurrentUser } from "src/modules/auth/current-user.decorator";
import { AuthUser } from "src/modules/auth/entities/auth-user.entity";
import { CasesService } from "./cases.service";
import { CreateCaseDto } from "./dto/create-case.dto";
import { UpdateCaseDto } from "./dto/update-case.dto";

@Controller("cases")
@UseGuards(JwtAuthGuard)
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Post()
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateCaseDto) {
    return this.casesService.create(user.sub, dto);
  }

  @Get()
  list() {
    return this.casesService.findAll();
  }

  @Get(":id")
  getById(@Param("id") id: string) {
    return this.casesService.findById(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateCaseDto) {
    return this.casesService.update(id, dto);
  }
}
