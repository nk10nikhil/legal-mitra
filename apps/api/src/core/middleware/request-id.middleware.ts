import { Injectable, NestMiddleware } from "@nestjs/common";
import { randomUUID } from "crypto";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    req.headers["x-request-id"] = req.headers["x-request-id"] ?? randomUUID();
    next();
  }
}
