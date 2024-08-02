import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { NextUIProviders } from "@/providers/NextUIProvider";
import MainNavbar from "@/components/layout/navbar";
import { SiteConfig } from "@/lib/config";
import HeroTitle from "@/components/layout/HeroTitle";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],

  display: "swap",
});

export const metadata: Metadata = {
  title: SiteConfig.site.name,
  description: SiteConfig.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={ubuntu.className + " min-h-screen"}>
        <NextUIProviders>
          <MainNavbar />
          <div className="px-4 sm:px-5 md:px7 lg:px-10 pt-5">
          <HeroTitle />
          {children}
          </div>
        </NextUIProviders>
      </body>
    </html>
  );
}
