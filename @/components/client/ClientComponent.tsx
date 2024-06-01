// src\components\client\ClientComponent.tsx
"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode;
  session: any;
};

export default function ClientComponent({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
