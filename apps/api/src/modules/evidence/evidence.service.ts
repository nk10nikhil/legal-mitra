import { Injectable, NotFoundException } from "@nestjs/common";
import { createHash } from "crypto";
import { DomainEventsService } from "src/events/domain-events.service";
import { MinioService } from "src/storage/storage.service";
import { UploadEvidenceDto } from "./dto/upload-evidence.dto";
import { EvidenceRepository } from "./repositories/evidence.repository";

@Injectable()
export class EvidenceService {
  constructor(
    private readonly evidenceRepository: EvidenceRepository,
    private readonly minioService: MinioService,
    private readonly domainEvents: DomainEventsService,
  ) {}

  async upload(
    userId: string,
    dto: UploadEvidenceDto,
    file: Express.Multer.File,
  ) {
    const hash = createHash("sha256").update(file.buffer).digest("hex");
    const objectName = `evidence/${dto.case_id}/${Date.now()}-${file.originalname}`;
    const fileUrl = await this.minioService.uploadFile(
      objectName,
      file.buffer,
      file.mimetype,
    );

    const evidence = await this.evidenceRepository.create({
      case_id: dto.case_id,
      uploaded_by: userId,
      file_url: fileUrl,
      hash,
      description: dto.description,
    });

    this.domainEvents.emit("evidence.uploaded", {
      evidenceId: evidence.id,
      caseId: evidence.case_id,
      uploadedBy: evidence.uploaded_by,
    });

    return evidence;
  }

  async getById(id: string) {
    const evidence = await this.evidenceRepository.findById(id);
    if (!evidence) {
      throw new NotFoundException("Evidence not found");
    }
    return evidence;
  }
}
