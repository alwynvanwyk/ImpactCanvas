import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impact Canvas",
  description: "AI-powered solution for social impact organizations to create Theory of Change, impact activities, and monitoring plans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
