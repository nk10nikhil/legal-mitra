import { IsString } from "class-validator";

export class SummarizeCaseDto {
  @IsString()
  case_id!: string;

  @IsString()
  context!: string;
}
