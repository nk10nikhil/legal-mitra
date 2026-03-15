import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Client } from "minio";

@Injectable()
export class MinioService implements OnModuleInit {
  private readonly client: Client;
  private readonly bucket: string;

  constructor(private readonly configService: ConfigService) {
    this.client = new Client({
      endPoint: configService.get<string>("MINIO_ENDPOINT", "localhost"),
      port: Number(configService.get<string>("MINIO_PORT", "9000")),
      useSSL: (configService.get<string>("MINIO_USE_SSL", "false") ?? "false") === "true",
      accessKey: configService.get<string>("MINIO_ACCESS_KEY", "minioadmin"),
      secretKey: configService.get<string>("MINIO_SECRET_KEY", "minioadmin"),
    });
    this.bucket = configService.get<string>("MINIO_BUCKET", "legalmitra-docs");
  }

  async onModuleInit() {
    const exists = await this.client.bucketExists(this.bucket);
    if (!exists) {
      await this.client.makeBucket(this.bucket, "us-east-1");
    }
  }

  async uploadFile(objectName: string, buffer: Buffer, mimeType: string) {
    await this.client.putObject(this.bucket, objectName, buffer, undefined, {
      "Content-Type": mimeType,
    });
    return this.getSignedUrl(objectName);
  }

  async getSignedUrl(objectName: string) {
    return this.client.presignedGetObject(this.bucket, objectName, 60 * 60);
  }
}
