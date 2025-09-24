import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <Providers>
      <html lang="en">
        <body
          className={cn(
            `${geistSans.variable} ${geistMono.variable} antialiased`,
            "min-h-screen flex flex-col",
          )}
        >
          <Navbar isAuthenticated={!!user} />
          <main className="flex-1 container mx-auto p-4 md:px-10">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
