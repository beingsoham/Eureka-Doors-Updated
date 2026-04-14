import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eureka Doors — Crafted for Every Opening | Bulk Door Manufacturers India",
  description:
    "India's leading door manufacturer since 2000. PVC, Wooden, Theme, FRP & Laminated doors for builders and developers. 864,000+ doors installed.",
  keywords: [
    "bulk door manufacturers in India",
    "door suppliers for builders",
    "PVC door manufacturers India",
    "wooden doors Pune",
    "commercial door manufacturers",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
