import { Role } from "@prisma/client";

export class UserEntity {
  id!: string;
  name!: string;
  email!: string;
  phone?: string | null;
  role!: Role;
  created_at!: Date;
  updated_at!: Date;
}
