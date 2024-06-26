import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {LanguageProvider} from './components/LanguageContext'
// import Header from './components/Header'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "anya trubitsyna",
  description: "personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LanguageProvider>
      <body className={`${inter.className}`}>
        {children}</body>
      </LanguageProvider>
    </html>
  );
}
