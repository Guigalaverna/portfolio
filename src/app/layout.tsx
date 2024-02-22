import type { Metadata } from "next";
import { Jost as FontSans, Crimson_Text as FontSerif } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Guilherme Galaverna",
  description: "just a guy with passion for technology, coffee and origami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${fontSans.variable}`}>{children}</body>
    </html>
  );
}
