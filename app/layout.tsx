import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brew & Bloom | Café & Bakery",
  description:
    "Where great coffee meets freshly baked happiness. Handcrafted espresso drinks, specialty lattes, and artisanal pastries baked fresh daily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-[#FAF7F2] text-[#1f2923]">
        {children}
      </body>
    </html>
  );
}
