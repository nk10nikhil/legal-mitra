export class AiLogEntity {
  id!: string;
  user_id!: string;
  case_id?: string | null;
  prompt!: string;
  response!: string;
  created_at!: Date;
}
