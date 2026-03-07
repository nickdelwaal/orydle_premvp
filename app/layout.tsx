import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Instrument_Sans, Newsreader } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orydle AI - AI for software systems",
  description:
    "Orydle AI builds developer tools that help teams understand, change, and evolve large software systems.",
  icons: {
    icon: [{ url: "/transparent_bg_brandmark.svg?v=1", type: "image/svg+xml" }],
    shortcut: ["/transparent_bg_brandmark.svg?v=1"],
    apple: ["/transparent_bg_brandmark.svg?v=1"],
  },
  keywords: [
    "AI",
    "software systems",
    "developer tools",
    "code understanding",
    "Krum",
  ],
  authors: [{ name: "Orydle AI" }],
  openGraph: {
    title: "Orydle AI - AI for software systems",
    description:
      "Developer tools that help teams understand, change, and evolve large software systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>

        <link rel="icon" type="image/svg+xml" sizes="any" href="/transparent_bg_brandmark.svg?v=1" />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/transparent_bg_brandmark.svg?v=1" />
      </head>
      <body className={`antialiased ${instrumentSans.variable} ${newsreader.variable}`}>
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
