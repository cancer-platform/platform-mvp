import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import React from "react";

// const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
