import { authOptions } from "@/helpers/nextAuthOptions";
import { getServerSession, type NextAuthOptions } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User } from "next-auth";
import AuthorizedLayout from "@/layouts/AuthorizedLayout";
import { ReactNode } from "react";
interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <AuthorizedLayout>{children}</AuthorizedLayout>;
};
export default async function RestrictedPage() {
  // get the session
  const session = (await getServerSession(authOptions as NextAuthOptions)) as {
    user?: User;
  };

  // redirect to sign in if there is no session.
  if (!session?.user) {
    const url = new URL("/api/auth/sign-in", "http://localhost:3000");
    url.searchParams.append("callbackUrl", "/welcome/");
    redirect(url.toString());
  }

  // display the page
  return (
    <div>
      <AuthLayout>
        <h1>Welcome to the Hello Page, {session?.user?.name}</h1>
        <Button>Click me</Button>
      </AuthLayout>
    </div>
  );
}
