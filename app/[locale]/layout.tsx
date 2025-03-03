import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "@/libs/store/ReduxProvider";
import AutoLogin from "@/hooks/AutoLogin";
import Footer from "@/components/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Minutes90",
  description: "Minutes90 - Football Match Reports",
  keywords: "football, soccer, match reports, sports, Minutes90",
  authors: [{ name: "Minutes90" }],
  openGraph: {
    title: "Minutes90",
    description: "Minutes90 - Football Match Reports",
    type: "website",
    locale: "en_US",
    siteName: "Minutes90",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minutes90",
    description: "Minutes90 - Football Match Reports",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  type Locale = "en" | "ar" | "fr" | "de";
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <Navbar />
            <main className="bg-[var(--color-text-black)] min-h-screen rounded-tl-[20px] md:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-tr-[20px] md:rounded-tr-[30px] border-b-0 pb-[50px] lg:rounded-tr-[40px]">
              {children}
            </main>
            <Footer />
            <ToastContainer />
            <AutoLogin />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
