import type { Metadata } from "next";
import {
  Poppins as FontSans,
  Crimson_Text as FontSerif,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});
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
      <body className={`font-sans ${fontSans.variable} ${fontSerif.variable}`}>
        <main className="px-5 py-12 text-gray-800 md:px-12 xl:px-60 xl:py-16 ">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
