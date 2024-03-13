// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { backLogger } from "@/helpers/backLogger";

export function middleware(request: NextRequest) {
  backLogger.info(`Request to ${request.nextUrl.pathname}`, {
    method: request.method,
    headers: request.headers,
    url: request.nextUrl.href,
  });

  return NextResponse.next();
}
