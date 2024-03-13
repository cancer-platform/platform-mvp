import pino from "pino";

const isProduction = process.env.NODE_ENV === "production";

export const backLogger = pino({
  level: "info",
  base: {
    service: "your-service-name",
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: isProduction
    ? undefined
    : {
        target: "pino-pretty",
        options: { colorize: true },
      },
});
