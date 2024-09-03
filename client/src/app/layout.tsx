import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tartas Y Mas",
  description: "Comida casera, hecha con amor y entrega rápida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
