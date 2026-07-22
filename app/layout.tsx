import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Palak Singh — Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Palak Singh — building scalable systems, beautiful interfaces, and real-world solutions. GSoC 2024 contributor, 5× hackathon winner.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} grain font-sans bg-parchment text-charcoal antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
