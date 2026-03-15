import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AiController } from "./ai.controller";
import { AiService } from "./ai.service";
import { AiRepository } from "./repositories/ai.repository";

@Module({
  imports: [HttpModule],
  controllers: [AiController],
  providers: [AiService, AiRepository],
})
export class AiModule {}
