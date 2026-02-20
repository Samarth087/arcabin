import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { roboto, fraunces } from "./fonts";
import SmoothScrollProvider from "@/provider/smoothScrollProvider";
import { Header } from "@/components/layout/headerLayout";
import FooterLayout from "@/components/layout/footerLayout";
import QueryProvider from "@/provider/query-provider";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "ArkCabin — Design & Web Studio",
    template: "%s · ArkCabin",
  },
  description:
    "ArkCabin crafts high-quality, design-led web experiences using Next.js, Tailwind, and shadcn/ui.",
  keywords: [
    "ArkCabin",
    "Next.js",
    "TailwindCSS",
    "shadcn/ui",
    "Web Design",
    "Frontend",
  ],
  openGraph: {
    type: "website",
    title: "ArkCabin — Design & Web Studio",
    description:
      "Design-led Next.js UI components, pages, and animations for modern web apps.",
    url: "/",
    siteName: "ArkCabin",
    images: ["/images/hero-dashboar-sidebar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArkCabin — Design & Web Studio",
    description:
      "Design-led Next.js UI components, pages, and animations for modern web apps.",
    images: ["/images/hero-dashboar-sidebar.png"],
    creator: "@arkcabin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roboto.variable} ${fraunces.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C5ZS07LW4N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C5ZS07LW4N');
          `}
        </Script>
        <ThemeProvider
          attribute="class"

          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <QueryProvider>
            <NextTopLoader
              color="#0033ff"
              initialPosition={0.08}
              crawlSpeed={200}
              height={1}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #0033ff,0 0 5px #0033ff"
            />
            <SmoothScrollProvider>
              <Header />
              {children}
              <FooterLayout />
            </SmoothScrollProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
