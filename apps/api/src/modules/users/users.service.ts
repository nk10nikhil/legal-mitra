import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersRepository } from "./repositories/users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getById(id: string) {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return user;
  }

  async updateById(id: string, dto: UpdateUserDto) {
    await this.getById(id);
    return this.usersRepository.updateById(id, dto);
  }
}
