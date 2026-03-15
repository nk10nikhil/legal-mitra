import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { CurrentUser } from "src/modules/auth/current-user.decorator";
import { AuthUser } from "src/modules/auth/entities/auth-user.entity";
import { AiService } from "./ai.service";
import { ChatDto } from "./dto/chat.dto";
import { SummarizeCaseDto } from "./dto/summarize-case.dto";

@Controller("ai")
@UseGuards(JwtAuthGuard)
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post("chat")
  chat(@CurrentUser() user: AuthUser, @Body() dto: ChatDto) {
    return this.aiService.chat(user.sub, dto);
  }

  @Post("summarize-case")
  summarizeCase(@CurrentUser() user: AuthUser, @Body() dto: SummarizeCaseDto) {
    return this.aiService.summarizeCase(user.sub, dto);
  }
}
