import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Alex Zhao",
  description: "Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId="G-WTW0D38B14" />
    </html>
  );
}
