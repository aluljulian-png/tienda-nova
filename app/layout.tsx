"use client";
import Header from "./components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CarritoContext } from "./context/CarritoContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <CarritoContext value={null}>

        <Header/>
        {children}
      </CarritoContext>
        </body>
    </html>
  );
}
