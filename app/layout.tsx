import type { Metadata } from "next";
import { Inter, Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name | Personal Site",
  description: "A concise personal homepage for selected work and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}
