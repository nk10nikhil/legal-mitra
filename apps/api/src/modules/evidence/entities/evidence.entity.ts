export class EvidenceEntity {
  id!: string;
  case_id!: string;
  uploaded_by!: string;
  file_url!: string;
  hash!: string;
  description?: string | null;
  created_at!: Date;
}
