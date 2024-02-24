// import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import React from "react";

// const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
