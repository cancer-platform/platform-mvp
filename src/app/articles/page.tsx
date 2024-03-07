/**
 * First, you get the session using getServerSession function.
 * If there's no session, you redirect to the sign-in page,
 * otherwise, display the page.
 * There are many ways to get the session,
 * but this method is best for SSR or Server components
 * since it uses the information from the cookies
 * while avoiding an extra call to the API route /api/auth/session.
 *
 * Now, once you go to localhost:3000/articles,
 * it redirects to http://localhost:3000/api/auth/signin?callbackUrl=%2Frestricted
 *
 * */

import { nextauthOptions } from "@/helpers/nextAuthOptions";
import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from "next/navigation";

export default async function RestrictedPage() {
  // get the session
  const session = await getServerSession(nextauthOptions);

  // redirect to sign in if there is no session.
  if (!session?.user) {
    const url = new URL("/api/auth/sign-in", "http://localhost:3000");
    url.searchParams.append("callbackUrl", "/articles");
    redirect(url.toString());
  }

  // display the page
  return (
    <div>
      <h1>Welcome to the Articles Page, {session?.user?.name}</h1>
    </div>
  );
}
