import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

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
    siteName: "Minutes90"
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
  initialScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
