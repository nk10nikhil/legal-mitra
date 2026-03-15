import { IsOptional, IsString } from "class-validator";

export class ChatDto {
  @IsString()
  prompt!: string;

  @IsOptional()
  @IsString()
  case_id?: string;
}
