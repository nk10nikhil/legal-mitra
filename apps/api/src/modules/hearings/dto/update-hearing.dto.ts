import { IsDateString, IsOptional, IsString } from "class-validator";

export class UpdateHearingDto {
  @IsOptional()
  @IsDateString()
  scheduled_time?: string;

  @IsOptional()
  @IsString()
  room_id?: string;

  @IsOptional()
  @IsString()
  status?: string;
}
