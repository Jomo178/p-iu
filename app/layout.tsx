import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../styles/globals.css";

import { Toaster } from "sonner";

import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/ui/tailwind-indicator";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "IU-Bot",
  description:
    "IU-Bot is a K-Pop Discord bot. You can collect and trade K-Pop cards, play games, and more!",
  keywords: [
    "K-Pop",
    "Discord",
    "Bot",
    "IU",
    "K-Pop Cards",
    "Games",
    "Trading",
    "IU-Bot",
  ],
  authors: [{ name: "Jomo" }],
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/images/icon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/icon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/icon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/apple-touch-icon.png",
    },
  ],
  creator: "Jomo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iu-website-v2.vercel.app/",
    title: "IU-Bot",
    siteName: "IU-Bot",
    description:
      "IU-Bot is a K-Pop Discord bot. You can collect and trade K-Pop cards, play games, and more!",
    images: [
      {
        width: 192,
        height: 192,
        alt: "IU-Bot",
        url: "/images/icon-192x192.png",
      },
      {
        width: 512,
        height: 512,
        alt: "IU-Bot",
        url: "/images/icon-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <Toaster
            richColors
            toastOptions={{
              style: {
                background: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
                border: "1px solid hsl(var(--border))",
              },
              actionButtonStyle: {
                background: "hsl(var(--primary))",
                height: "2rem",
              },
            }}
            position="top-right"
          />
          <TailwindIndicator />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
