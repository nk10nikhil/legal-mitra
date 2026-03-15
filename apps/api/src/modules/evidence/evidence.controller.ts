import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { CurrentUser } from "src/modules/auth/current-user.decorator";
import { AuthUser } from "src/modules/auth/entities/auth-user.entity";
import { UploadEvidenceDto } from "./dto/upload-evidence.dto";
import { EvidenceService } from "./evidence.service";

@Controller("evidence")
@UseGuards(JwtAuthGuard)
export class EvidenceController {
  constructor(private readonly evidenceService: EvidenceService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  upload(
    @CurrentUser() user: AuthUser,
    @Body() dto: UploadEvidenceDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.evidenceService.upload(user.sub, dto, file);
  }

  @Get(":id")
  getById(@Param("id") id: string) {
    return this.evidenceService.getById(id);
  }
}
