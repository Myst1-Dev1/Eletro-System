import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
  "@type": ["LocalBusiness", "ComputerRepair"],
  name: "EletroSystem",
  description:
    "Assistência técnica especializada em computadores e notebooks na Barra da Tijuca. Reparo de placas, montagem de PCs, upgrade SSD, memória RAM e manutenção preventiva.",
  areaServed: [
    "Barra da Tijuca",
    "Recreio dos Bandeirantes",
    "Jacarepaguá",
    "Rio de Janeiro"
  ],
  telephone: "+55 21 98981-0973",
};

export const metadata: Metadata = {
  title:"Assistência Técnica de Notebook e PC | Barra da Tijuca | EletroSystem",
  description:
"Especialistas em conserto de notebooks e computadores na Barra da Tijuca. Reparo de placas, upgrade SSD, memória RAM, formatação, montagem de PC Gamer e manutenção preventiva. Solicite um orçamento pelo WhatsApp.",
  keywords: [
    "conserto de notebook",
    "assistência técnica notebook",
    "manutenção notebook",
    "reparo de notebook",
    "notebook não liga",
    "notebook lento",
    "troca de SSD",
    "upgrade SSD",
    "upgrade notebook",
    "troca memória RAM",
    "formatação notebook",
    "formatação computador",
    "conserto computador",
    "manutenção computador",
    "computador lento",
    "reparo de placa mãe",
    "reparo de placas eletrônicas",
    "montagem de PC",
    "montagem de PC Gamer",
    "limpeza de notebook",
    "limpeza preventiva computador",
    "troca pasta térmica",
    "assistência técnica Barra da Tijuca",
    "conserto notebook Barra da Tijuca",
    "conserto computador Barra da Tijuca",
    "manutenção notebook Barra da Tijuca",
    "EletroSystem"
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
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(localBusinessSchema),
              }}
            />
            {children}
      </body>
    </html>
  );
}
