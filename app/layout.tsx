import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "@/libs/store/ReduxProvider";
import AutoLogin from "@/hooks/AutoLogin";
import Footer from "@/components/footer/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          <main className="bg-[var(--color-text-black)] min-h-screen rounded-tl-[20px] md:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-tr-[20px] md:rounded-tr-[30px] border-b-0 pb-[50px] lg:rounded-tr-[40px]">
            {children}
          </main>
          <Footer />
          <ToastContainer />
          <AutoLogin />
        </ReduxProvider>
      </body>
    </html>
  );
}
