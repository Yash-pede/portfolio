import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { NextUIProviders } from "@/providers/NextUIProvider";
import MainNavbar from "@/components/navbar/navbar";
import { SiteConfig } from "@/lib/config";

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
          {children}
        </NextUIProviders>
      </body>
    </html>
  );
}
