import { CaseStatus } from "@prisma/client";
import { IsEnum, IsOptional, IsString } from "class-validator";

export class UpdateCaseDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  priority?: string;

  @IsOptional()
  @IsString()
  assigned_lawyer?: string;

  @IsOptional()
  @IsString()
  assigned_judge?: string;

  @IsOptional()
  @IsEnum(CaseStatus)
  status?: CaseStatus;
}
