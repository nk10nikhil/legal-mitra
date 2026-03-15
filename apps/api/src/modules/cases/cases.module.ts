import { Module } from "@nestjs/common";
import { CasesController } from "./cases.controller";
import { CasesRepository } from "./repositories/cases.repository";
import { CasesService } from "./cases.service";

@Module({
  controllers: [CasesController],
  providers: [CasesRepository, CasesService],
  exports: [CasesService],
})
export class CasesModule {}
