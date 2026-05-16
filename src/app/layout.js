import { Syne, DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-logo",
  subsets: ["latin"],
});

export const metadata = {
  title: "kodra · sistemas digitales",
  description: "Portafolio de servicios de desarrollo web — kodra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
