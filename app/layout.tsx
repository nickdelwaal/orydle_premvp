import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('orydle-theme');document.documentElement.setAttribute('data-theme',(t==='light'||t==='dark')?t:'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();",
          }}
        />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/transparent_bg_brandmark.svg?v=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Newsreader:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
