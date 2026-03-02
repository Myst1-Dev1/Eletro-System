import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/providers/AuthProvider";
import ProductProvider from "@/providers/ProductProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EletroSystem",
  description: "A Eletrosystem Soluções em TI é uma empresa especializada em manutenção de computadores, notebooks e redes de informática. Trabalhamos com venda de equipamentos novos, seminovos e recondicionados, além de oferecer assistência técnica completa para residências e empresas.",
  keywords: [
    "EletroSystem",
    "soluções em TI",
    "suporte técnico",
    "manutenção de computadores",
    "assistência técnica informática",
    "redes e infraestrutura",
    "segurança eletrônica",
    "câmeras de segurança",
    "controle de acesso",
    "montagem de PC Gamer",
    "formatação de computador",
    "empresa de TI"
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ProductProvider>
            <Header />
            {children}
            <Footer />
            <ToastContainer position="top-right" />
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
