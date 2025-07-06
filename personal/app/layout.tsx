import type { Metadata } from "next";
import { Feet } from "@/components/footer";

import "./globals.css";



export const metadata: Metadata = {
  title: "Personal website",
  description: "Made with Love(and NEXTJS)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
    <main className="flex-1">
      {children}
    </main>
    <footer>
      <Feet/>
    </footer>
  </body>
    </html>
  );
}
