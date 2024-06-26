import { ReactNode } from "react";
import "./globals.css";
import ClientComponent from "@/components/client/ClientComponent";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen font-poppins">
        <main className="w-[360px] h-[800px] bg-white shadow">
          <div className="flex flex-col items-center justify-center">
            <ClientComponent>{children}</ClientComponent>
          </div>
        </main>
      </body>
    </html>
  );
}
