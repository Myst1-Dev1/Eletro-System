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
    addressLocality: "Rio de Janeiro",
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
    "eletrosystem",

    // TI
    "soluções em TI",
    "Soluções em TI",
    "suporte técnico",
    "Suporte técnico",
    "empresa de TI",
    "Empresa de TI",
    "suporte em TI",
    "Suporte em TI",
    "assistência técnica informática",
    "Assistência técnica informática",
    "assistência técnica especializada",
    "Assistência técnica especializada",
    "diagnóstico técnico",
    "Diagnóstico técnico",
    "técnico de informática",
    "Técnico de informática",

    // Computadores
    "manutenção de computadores",
    "Manutenção de computadores",
    "conserto de PC",
    "Conserto de PC",
    "computador lento",
    "Computador lento",
    "upgrade de computador",
    "Upgrade de computador",
    "upgrade de hardware",
    "Upgrade de hardware",
    "limpeza preventiva PC",
    "Limpeza preventiva PC",
    "troca de SSD",
    "Troca de SSD",
    "instalação de memória RAM",
    "Instalação de memória RAM",
    "otimização de computador",
    "Otimização de computador",
    "formatação de computador",
    "Formatação de computador",

    // Notebook
    "manutenção de notebook",
    "Manutenção de notebook",
    "conserto de notebook",
    "Conserto de notebook",
    "limpeza de notebook",
    "Limpeza de notebook",
    "notebook esquentando",
    "Notebook esquentando",
    "troca de pasta térmica notebook",
    "Troca de pasta térmica notebook",
    "upgrade notebook",
    "Upgrade notebook",
    "assistência notebook gamer",
    "Assistência notebook gamer",

    // Gamer
    "montagem de PC Gamer",
    "Montagem de PC Gamer",
    "PC Gamer personalizado",
    "Pc Gamer personalizado",
    "setup gamer",
    "Setup gamer",
    "otimização gamer",
    "Otimização gamer",

    // Videogame
    "assistência técnica videogame",
    "Assistência técnica videogame",
    "conserto de videogame",
    "Conserto de videogame",
    "manutenção Playstation",
    "Manutenção Playstation",
    "manutenção PS5",
    "Manutenção PS5",
    "manutenção Xbox",
    "Manutenção Xbox",
    "troca analógico controle",
    "Troca analógico controle",
    "conserto controle de ps5",
    "Conserto controle de PS5",
    "Conserto controle de PS4",
    "conserto controle de ps4",
    "Conserto controle de playstation",
    "conserto controle de xbox 360",
    "Conserto controle de XBOX 360",
    "Conserto controle de XBOX one",
    "conserto controle de xbox one",
    "xbox",
    "playstation",
    "conserto ps5",
    "Conserto PS5",
    "conserto xbox",
    "Conserto XBOX",
    "controle drift PS5",
    "Controle drift PS5",
    "limpeza de videogame",
    "Limpeza de videogame",
    "reparo de consoles",
    "Reparo de consoles",

    // Impressoras
    "manutenção de impressoras",
    "Manutenção de impressoras",
    "conserto de impressora",
    "Conserto de impressora",
    "assistência técnica impressora",
    "Assistência técnica impressora",
    "impressora não imprime",
    "Impressora não imprime",
    "limpeza de impressora",
    "Limpeza de impressora",
    "reset de impressora",
    "Reset de impressora",
    "configuração de impressora",
    "Configuração de impressora",

    // Segurança
    "segurança eletrônica",
    "Segurança eletrônica",
    "câmeras de segurança",
    "Câmeras de segurança",
    "controle de acesso",
    "Controle de acesso",
    "instalação de câmeras",
    "Instalação de câmeras",
    "manutenção CFTV",
    "Manutenção CFTV",
    "sistema de monitoramento",
    "Sistema de monitoramento",
    "DVR e NVR",
    "segurança residencial",
    "Segurança residencial",
    "segurança empresarial",
    "Segurança empresarial",
    "câmeras Wi-Fi",
    "Câmeras Wi-Fi",
    "instalação de câmeras de segurança",
    "Instalação de câmeras de segurança",

    // Redes
    "redes e infraestrutura",
    "Redes e infraestrutura",
    "Wi-Fi e internet",
    "Wi-Fi e Internet",
    "instalação de roteador",
    "Instalação de roteador",
    "Wi-Fi lento",
    "wifi lento",
    "melhorar sinal Wi-Fi",
    "Melhorar sinal Wi-Fi",
    "rede corporativa",
    "Rede corporativa",
    "rede residencial",
    "Rede residencial",
    "cabeamento de rede",
    "Cabeamento de rede",
    "configuração de access point",
    "Configuração de access point",
    "internet instável",
    "Internet instável",

    // Barra da Tijuca
    "Barra da Tijuca - RJ",
    "Assistência técnica Barra da Tijuca",
    "assistência técnica Barra da Tijuca",
    "Manutenção de computadores Barra da Tijuca",
    "manutenção de computadores Barra da Tijuca",
    "Notebooks Barra da Tijuca",
    "notebooks Barra da Tijuca",
    "Computadores Barra da Tijuca",
    "computadores Barra da Tijuca",
    "Redes Barra da Tijuca",
    "redes Barra da Tijuca",
    "Segurança eletrônica Barra da Tijuca",
    "segurança eletrônica Barra da Tijuca",
    "Câmeras de segurança Barra da Tijuca",
    "câmeras de segurança Barra da Tijuca",
    "Controle de acesso Barra da Tijuca",
    "controle de acesso Barra da Tijuca",
    "Montagem de PC Gamer Barra da Tijuca",
    "montagem de PC Gamer Barra da Tijuca",
    "Formatação de computador Barra da Tijuca",
    "formatação de computador Barra da Tijuca",
    "Empresa de TI Barra da Tijuca",
    "empresa de TI Barra da Tijuca",

    // Região
    "Assistência técnica Recreio",
    "assistência técnica Recreio",
    "Conserto de notebook Recreio",
    "conserto de notebook Recreio",
    "Montagem de PC Gamer Recreio",
    "montagem de PC Gamer Recreio",
    "Técnico de informática Jacarepaguá",
    "técnico de informática Jacarepaguá",
    "Manutenção de computador Zona Oeste RJ",
    "manutenção de computador Zona Oeste RJ",
    "Assistência técnica Rio de Janeiro",
    "assistência técnica Rio de Janeiro"
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
