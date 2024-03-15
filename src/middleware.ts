// src/middleware.ts
import pino from "pino";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const backLogger = pino({
  level: "trace",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

export function middleware(request: NextRequest) {
  try {
    backLogger.trace(`Request to ${request.nextUrl.pathname}`, {
      method: request.method,
      headers: request.headers,
      url: request.nextUrl.href,
    });
  } catch (error) {
    backLogger.error("Error in middleware:", error);

    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  return NextResponse.next();
}
