export default () => ({
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET ?? "access-secret",
    refreshSecret: process.env.JWT_REFRESH_SECRET ?? "refresh-secret",
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? "15m",
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? "7d",
  },
  minio: {
    endpoint: process.env.MINIO_ENDPOINT ?? "localhost",
    port: Number(process.env.MINIO_PORT ?? 9000),
    useSSL: (process.env.MINIO_USE_SSL ?? "false") === "true",
    accessKey: process.env.MINIO_ACCESS_KEY ?? "minioadmin",
    secretKey: process.env.MINIO_SECRET_KEY ?? "minioadmin",
    bucket: process.env.MINIO_BUCKET ?? "legalmitra-docs",
  },
  redis: {
    url: process.env.REDIS_URL ?? "redis://localhost:6379",
  },
});
