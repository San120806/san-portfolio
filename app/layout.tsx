import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saniya XP — Saniya Kapure",
  description: "An interactive Windows XP-inspired portfolio by Saniya Kapure, showcasing software, design, AI and cloud projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tahoma:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
