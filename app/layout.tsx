import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Reddit_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

const redditSans = Reddit_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-reddit-sans",
});

export const metadata: Metadata = {
  title: "timon — a gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} ${redditSans.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
