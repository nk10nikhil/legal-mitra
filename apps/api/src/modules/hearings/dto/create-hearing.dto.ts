import { IsDateString, IsString } from "class-validator";

export class CreateHearingDto {
  @IsString()
  case_id!: string;

  @IsString()
  judge_id!: string;

  @IsDateString()
  scheduled_time!: string;

  @IsString()
  room_id!: string;

  @IsString()
  status!: string;
}
