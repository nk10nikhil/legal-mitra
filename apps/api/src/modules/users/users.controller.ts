import { Body, Controller, Get, Param, Patch, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/guards/jwt-auth.guard";
import { CurrentUser } from "src/modules/auth/current-user.decorator";
import { AuthUser } from "src/modules/auth/entities/auth-user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  me(@CurrentUser() user: AuthUser) {
    return this.usersService.getById(user.sub);
  }

  @Patch("me")
  updateMe(@CurrentUser() user: AuthUser, @Body() dto: UpdateUserDto) {
    return this.usersService.updateById(user.sub, dto);
  }

  @Get(":id")
  getById(@Param("id") id: string) {
    return this.usersService.getById(id);
  }
}
