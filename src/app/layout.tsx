import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster as Sonner } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreenRoute — South Africa's First Carbon Intelligence Platform",
  description:
    "Track, compare, and reduce your commute's CO₂ — built for Cape Town. Auto-detect 9 transport modes, sync with the live Eskom grid, and turn every trip into a carbon-smart choice.",
  icons: {
    icon: "/logo.svg",
  },
  keywords: [
    "GreenRoute",
    "carbon tracking",
    "South Africa",
    "Cape Town",
    "Scope 3",
    "Eskom grid",
    "minibus taxi",
    "commute CO2",
    "ESG reporting",
  ],
  authors: [{ name: "GreenRoute" }],
  openGraph: {
    title: "GreenRoute — Carbon Intelligence for Cape Town",
    description:
      "Every commute has a cost. Make it count. South Africa's first carbon intelligence platform — track 9 modes, sync the Eskom grid, hit your weekly CO₂ budget.",
    siteName: "GreenRoute",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenRoute — South Africa's First Carbon Intelligence Platform",
    description:
      "Track, compare, and reduce your commute's CO₂ — built for Cape Town.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Sonner
          position="bottom-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              borderRadius: "0.875rem",
              border: "1px solid var(--border)",
              background: "var(--popover)",
              color: "var(--popover-foreground)",
            },
          }}
        />
      </body>
    </html>
  );
}
