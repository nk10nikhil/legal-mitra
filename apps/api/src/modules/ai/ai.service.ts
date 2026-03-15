import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";
import { ChatDto } from "./dto/chat.dto";
import { SummarizeCaseDto } from "./dto/summarize-case.dto";
import { AiRepository } from "./repositories/ai.repository";

@Injectable()
export class AiService {
  constructor(
    private readonly aiRepository: AiRepository,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async chat(userId: string, dto: ChatDto) {
    const response = await this.callLlm(dto.prompt);
    await this.aiRepository.logInteraction({
      user_id: userId,
      case_id: dto.case_id,
      prompt: dto.prompt,
      response,
    });
    return { response };
  }

  async summarizeCase(userId: string, dto: SummarizeCaseDto) {
    const prompt = `Summarize legal case ${dto.case_id}: ${dto.context}`;
    const response = await this.callLlm(prompt);
    await this.aiRepository.logInteraction({
      user_id: userId,
      case_id: dto.case_id,
      prompt,
      response,
    });
    return { summary: response };
  }

  private async callLlm(prompt: string): Promise<string> {
    const llmUrl = this.configService.get<string>("LLM_API_URL");
    const llmKey = this.configService.get<string>("LLM_API_KEY");

    if (!llmUrl) {
      return `Mock AI response: ${prompt.slice(0, 200)}`;
    }

    const { data } = await firstValueFrom(
      this.httpService.post(
        llmUrl,
        { prompt },
        {
          headers: llmKey
            ? {
                Authorization: `Bearer ${llmKey}`,
              }
            : {},
        },
      ),
    );

    return data.response ?? data.output ?? JSON.stringify(data);
  }
}
