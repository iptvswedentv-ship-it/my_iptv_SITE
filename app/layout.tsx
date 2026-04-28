import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BesterIPTV Shop – Premium IPTV Deutschland",
  description:
    "Erleben Sie 80.000+ Sender & VODs in 4K/UHD. Inklusive Live-Sport & Blockbuster Filme. Jetzt testen!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#050505] text-white font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
