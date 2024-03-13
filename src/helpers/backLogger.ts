// src\helpers\backLogger.ts

import { createLogger, format, transports } from "winston";

export const backLogger = createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: "your-service-name" },
  transports: [new transports.Console({ level: "debug" })],
});
