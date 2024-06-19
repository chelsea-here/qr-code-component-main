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
  title: 'Frontend Mentor QR challenge',
  description: 'My solution to Frontend Mentors QR challenge',
  keywords: ['HTML, CSS, JavaScript, NextJS, Tailwindcss, React'],
  creator: 'Chelsea Anne Livingston Cruz',
};

export default function RootLayout({
  childr
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
