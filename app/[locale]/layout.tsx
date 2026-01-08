import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToAnchor from "./components/scrollToAnchor";
import { Suspense } from "react";
import { ThemeProvider } from "./components/themeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mateusz Portfolio",
  description: "Portfolio studenta Informatyki",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!["en", "pl"].includes(locale)) notFound();

  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased 
          transition-colors duration-300
          bg-white dark:bg-[#111827] 
          text-gray-900 dark:text-[#E5E7EB]
        `}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Suspense fallback={null}>
              <ScrollToAnchor />
            </Suspense>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
