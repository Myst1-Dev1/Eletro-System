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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ComputerStore", "ElectronicsStore"],
  name: "EletroSystem",
  description:
    "Assistência técnica, manutenção de computadores, notebooks, redes e soluções em TI na Barra da Tijuca - RJ.",
  areaServed: "Barra da Tijuca - RJ",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua da Tecnologia, 1000",
    addressLocality: "Barra da Tijuca",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  telephone: "+55 21 9 8981-0973",
  email: "gabrielmiranda2203@gmail.com",
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-12:00"],
};

export const metadata: Metadata = {
  title: "EletroSystem | Assistência técnica em Barra da Tijuca - RJ",
  description:
    "Assistência técnica em Barra da Tijuca - RJ para computadores, notebooks, redes e infraestrutura de TI. Manutenção, suporte, montagem e soluções completas para residências e empresas.",
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
    "empresa de TI",
    "Barra da Tijuca - RJ",
    "Assistência técnica Barra da Tijuca",
    "Manutenção de computadores Barra da Tijuca",
    "Notebooks Barra da Tijuca",
    "Computadores Barra da Tijuca",
    "Redes Barra da Tijuca",
    "Segurança eletrônica Barra da Tijuca",
    "Câmeras de segurança Barra da Tijuca",
    "Controle de acesso Barra da Tijuca",
    "Montagem de PC Gamer Barra da Tijuca",
    "Formatação de computador Barra da Tijuca",
    "Empresa de TI Barra da Tijuca",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ProductProvider>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(localBusinessSchema),
              }}
            />
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
