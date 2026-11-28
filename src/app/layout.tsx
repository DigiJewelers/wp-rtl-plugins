import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

// Local Vazirani Font
const font = localFont({
  src: '../fonts/Vazirmatn.woff2',
  weight: "100 900",
  display: "swap",
  variable: "--font-vazirmatn",
})

// export const metadata: Metadata = {
//   metadataBase: new URL("https://figma2react.ir"),
//
//   title: {
//     default: "Figma 2 React",
//     template: "%s | Figma 2 React",
//   },
//
//   description:
//     "پیاده‌سازی تخصصی طرح‌های Figma با React و Next.js.",
// };
//

import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl"      suppressHydrationWarning>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
    </head>
      <body className={`${font.className}`}>{children}</body>
      <Analytics />
    </html>
  );
}
