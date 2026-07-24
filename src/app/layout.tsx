import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { Preloader } from "@/components/animations/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Luxury Hotel & Resort | An Award-Winning Experience",
  description: "Experience premium hospitality with our award-winning luxury hotel and resort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} dark antialiased`}>
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
        <Preloader />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
