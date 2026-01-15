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
  title: {
    default: "Mateusz Bogacz Drewniak – strona osobista",
    template: "%s – Mateusz Bogacz Drewniak",
  },
  description: "Mateusz Bogacz Drewniak – portfolio, projekty IT, kontakt",
  alternates: {
    canonical: "https://www.mateusz-bogacz-drewniak.pl/pl",
    languages: {
      pl: "https://www.mateusz-bogacz-drewniak.pl/pl",
      en: "https://www.mateusz-bogacz-drewniak.pl/en",
    },
  },
  robots: {
    index: false,
    follow: true,
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mateusz Bogacz Drewniak",
            url: "https://www.mateusz-bogacz-drewniak.pl",
            sameAs: [
              "https://github.com/TWOJ_GITHUB",
              "https://www.linkedin.com/in/TWOJ_LINKEDIN",
            ],
          }),
        }}
      />
    </html>
  );
}
