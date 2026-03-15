import { CaseStatus } from "@prisma/client";

export class CaseEntity {
  id!: string;
  title!: string;
  description!: string;
  status!: CaseStatus;
  priority!: string;
  created_by!: string;
  assigned_lawyer?: string | null;
  assigned_judge?: string | null;
  created_at!: Date;
  updated_at!: Date;
}
