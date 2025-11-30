import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ['600', '700'],
  display: 'swap',
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
    "InsightBridge",
    "AI Financial Analysis",
    "Microsoft Fabric",
    "CBAP",
  ],
  authors: [{ name: "Credence Consulting", url: "https://www.credenceconsulting.io" }],
  openGraph: {
    title: "Credence Consulting | Data Engineering & Business Strategy",
    description: "Expert consulting in data engineering, business analysis, and bookkeeping.",
    url: "https://www.credenceconsulting.io",
    siteName: "Credence Consulting",
    images: [
      {
        url: "https://www.credenceconsulting.io/images/chilli.jpg",
        width: 1200,
        height: 630,
        alt: "Credence Consulting",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credence Consulting | Data Engineering & Business Strategy",
    description: "Expert consulting in data engineering, business analysis, and bookkeeping.",
    images: ["https://www.credenceconsulting.io/images/chilli.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
        {children}
        
        {/* Tidio Live Chat Widget */}
        <Script 
          src="//code.tidio.co/8dop6qhaeswsbr7qipzbpmimcvulozjd.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}