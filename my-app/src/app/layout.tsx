import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  weight: ['400', '700'],
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-outfit',
 });

export const metadata: Metadata = {
  title: "QR code component",
  description: "Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
