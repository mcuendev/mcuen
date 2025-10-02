import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/convex.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html>
        <body
          className={cn(
            `${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`,
            "min-h-screen flex flex-col",
          )}
        >
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
