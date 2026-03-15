import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Role } from "@prisma/client";
import { AuthUser } from "./entities/auth-user.entity";

type JwtPayload = {
  sub: string;
  email: string;
  role: Role;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>("JWT_ACCESS_SECRET", "access-secret"),
    });
  }

  validate(payload: JwtPayload): AuthUser {
    if (!payload.sub) {
      throw new UnauthorizedException();
    }

    return {
      sub: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}
