import { createLogger, format } from "winston";
import BrowserConsole from "winston-transport-browserconsole";

const clogger = createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: "your-service-name" },
  transports: [new BrowserConsole({ format: format.simple(), level: "debug" })],
});

export default clogger;
