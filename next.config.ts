import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minutes90.store",
        port: "",
        pathname: "/uploads/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "minutes90.store",
        port: "",
        pathname: "/assets/**",
        search: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
