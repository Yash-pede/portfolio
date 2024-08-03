import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/layout/navbar";
import { SiteConfig } from "@/lib/config";
import HeroTitle from "@/components/layout/HeroTitle";
import { NextUIProviders } from "@/providers/NextUIProvider";

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
          <HeroTitle />
          <div className="px-7 md:max-w-5xl lg:max-w-6xl mx-auto">
            {children}
          </div>
        </NextUIProviders>
      </body>
    </html>
  );
}
