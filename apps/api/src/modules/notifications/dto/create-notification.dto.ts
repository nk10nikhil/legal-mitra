import { IsString } from "class-validator";

export class CreateNotificationDto {
  @IsString()
  user_id!: string;

  @IsString()
  type!: string;

  @IsString()
  message!: string;
}
