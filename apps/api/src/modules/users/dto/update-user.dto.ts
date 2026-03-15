import { Role } from "@prisma/client";
import { IsEnum, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
