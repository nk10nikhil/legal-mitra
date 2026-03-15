import { IsOptional, IsString } from "class-validator";

export class UploadEvidenceDto {
  @IsString()
  case_id!: string;

  @IsOptional()
  @IsString()
  description?: string;
}
