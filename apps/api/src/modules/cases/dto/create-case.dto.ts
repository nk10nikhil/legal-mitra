import { CaseStatus } from "@prisma/client";
import { IsEnum, IsOptional, IsString } from "class-validator";

export class CreateCaseDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  priority!: string;

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
