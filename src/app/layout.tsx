import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  weight: "variable",
  preload: true,
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "ocean care",
  description: "اوشن كير مستلزمات الصيدليات  والعناية الشخصية بسعر الجمله",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={` ${cairo.variable} font-sans antialiased h-full`}>
        {children}
      </body>
    </html>
  );
}
