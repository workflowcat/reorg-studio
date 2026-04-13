import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reorg Studio — Defense R&D Team Design",
  description:
    "Internal planning tool for designing and stress-testing the org structure of a small defense-hardware R&D team scaling from 20 to 100+ people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1 w-full">{children}</main>
        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500 flex justify-between items-center">
            <span>
              Reorg Studio · internal planning tool · data stays on your device
            </span>
            <span className="font-mono">v0.1</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
