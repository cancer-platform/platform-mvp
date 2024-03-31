// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import logger from "./helpers/logger";

export async function middleware(req: NextRequest) {
  const start = Date.now();
  const res = NextResponse.next();
  const end = Date.now();
  const responseTime = end - start;

  if (process.env.NODE_ENV === "development") {
    logger.info({
      method: req.method,
      url: req.url,
      status: res.status,
      responseTime: `${responseTime}ms`,
    });
  }

  return res;
}
