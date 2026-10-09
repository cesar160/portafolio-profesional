import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "César Yair Toledo Villarreal | Portafolio",
  description:
    "Portafolio personal de César Yair Toledo Villarreal — Desarrollador de Software y Diseñador UX/UI. Proyectos, habilidades y experiencia.",
  keywords: [
    "portafolio",
    "desarrollador web",
    "ux/ui designer",
    "next.js",
    "react",
    "tailwind css",
    "cesar yair",
  ],
  authors: [{ name: "César Yair Toledo Villarreal" }],
  openGraph: {
    title: "César Yair Toledo Villarreal | Portafolio",
    description:
      "Desarrollador de Software y Diseñador UX/UI. Proyectos, habilidades y experiencia.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
