import "@/styles/globals.css";
import { ReactNode } from "react";
import React from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-200 py-4">
        {/* header code  */}
        <Link href={"/"}>Skip</Link>
      </header>
      <main className="flex-grow">
        {/* main code */}
        {children}
      </main>
      <footer className="bg-gray-200 py-4">{/* footer code  */}</footer>
    </div>
  );
}
