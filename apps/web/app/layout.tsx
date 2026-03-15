import type { Metadata } from "next";
import { IBM_Plex_Sans, Sora } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/app-providers";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const headingFont = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://legalmitra.in"),
  title: {
    default: "LegalMitra | Digital Justice Infrastructure",
    template: "%s | LegalMitra",
  },
  description:
    "India's AI-assisted, blockchain-secured digital justice infrastructure for citizens, legal professionals, institutions and governance systems.",
  openGraph: {
    title: "LegalMitra",
    description:
      "AI-assisted, human-supervised and blockchain-secured justice infrastructure.",
    type: "website",
    url: "https://legalmitra.in",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable} font-[var(--font-body)]`}>
        <AppProviders>
          <div className="relative min-h-screen">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
