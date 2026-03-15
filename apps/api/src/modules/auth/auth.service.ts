import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Role, User } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import { AuthRepository } from "./repositories/auth.repository";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.authRepository.findByEmail(dto.email);
    if (existing) {
      throw new BadRequestException("Email already exists");
    }

    const password_hash = await bcrypt.hash(dto.password, 10);
    const user = await this.authRepository.createUser({
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      password_hash,
      role: dto.role ?? Role.citizen,
    });

    return this.issueTokens(user);
  }

  async login(dto: LoginDto) {
    const user = await this.authRepository.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isValid = await bcrypt.compare(dto.password, user.password_hash);
    if (!isValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return this.issueTokens(user);
  }

  async refresh(dto: RefreshTokenDto) {
    try {
      const payload = await this.jwtService.verifyAsync(dto.refreshToken, {
        secret: this.configService.get<string>("JWT_REFRESH_SECRET", "refresh-secret"),
      });
      const user = await this.authRepository.findByEmail(payload.email);
      if (!user) {
        throw new UnauthorizedException("Invalid refresh token");
      }
      return this.issueTokens(user);
    } catch {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }

  private async issueTokens(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>("JWT_ACCESS_SECRET", "access-secret"),
      expiresIn: this.configService.get<string>("JWT_ACCESS_EXPIRES_IN", "15m") as any,
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>("JWT_REFRESH_SECRET", "refresh-secret"),
      expiresIn: this.configService.get<string>("JWT_REFRESH_EXPIRES_IN", "7d") as any,
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }
}
