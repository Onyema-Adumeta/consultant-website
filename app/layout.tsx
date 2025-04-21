import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Credence Consulting | Data Engineering & Business Strategy",
  description:
    "We help businesses unlock insights, streamline operations, and stay financially accurate with expert consulting services in data, bookkeeping, and project strategy.",
  keywords: [
    "Credence Consulting",
    "Data Engineering",
    "Business Consulting",
    "Bookkeeping",
    "Accounting",
    "Chilliwack",
    "Canada",
  ],
  authors: [{ name: "Credence Consulting", url: "https://www.credenceconsulting.io" }],
  openGraph: {
    title: "Credence Consulting",
    description: "Expert consulting in data, business analysis, and bookkeeping.",
    url: "https://www.credenceconsulting.io",
    siteName: "Credence Consulting",
    images: [
      {
        url: "https://www.credenceconsulting.io/images/chilli.jpg",
        width: 1200,
        height: 630,
        alt: "Credence Consulting Hero",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
