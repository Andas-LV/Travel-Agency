import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import AuthProvider from "@/components/AuthProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Agency",
  description: "Full-stack web app about Information Travel Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <AuthProvider>
          <html lang="en">
          <body className={montserrat.className}>{children}</body>
          </html>
      </AuthProvider>
  );
}
