import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kampus - Modern Learning Platform",
  description: "Transform your learning experience with Kampus - the modern platform for students and educators.",
  keywords: ["education", "learning", "students", "online learning", "campus", "university", "college", "textbooks", "furniture", "rides", "housing", "events"],
  authors: [{ name: "Kampus Team" }],
  creator: "Kampus",
  publisher: "Kampus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kampus - Modern Learning Platform",
    description: "Transform your learning experience with Kampus - the modern platform for students and educators.",
    type: "website",
    locale: "en_US",
    siteName: "Kampus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kampus - Modern Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampus - Modern Learning Platform",
    description: "Transform your learning experience with Kampus - the modern platform for students and educators.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
