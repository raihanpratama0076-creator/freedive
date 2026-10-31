import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EVERY DIVE  — Selami Batasmu",
  description:
    "Belajar freediving, temukan peralatanmu, dan bergabung dengan komunitas yang hidup untuk laut. Kursus freediving premium, penjualan & sewa peralatan, ekspedisi dan konservasi laut oleh EVERY DIVE .",
  keywords: [
    "freediving",
    "kursus freediving",
    "peralatan freediving",
    "sewa peralatan selam",
    "komunitas freediving",
    "EVERY DIVE ",
    "AIDA",
    "fundive",
  ],
  authors: [{ name: "EVERY DIVE " }],
  openGraph: {
    title: "EVERY DIVE  — Laut Memanggilmu",
    description:
      "Belajar freediving, temukan peralatanmu, dan bergabung dengan komunitas yang hidup untuk laut.",
    siteName: "EVERY DIVE ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVERY DIVE  — Laut Memanggilmu",
    description:
      "Belajar freediving, temukan peralatanmu, dan bergabung dengan komunitas yang hidup untuk laut.",
  },
};

export const viewport: Viewport = {
  themeColor: "#020a12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} font-body antialiased bg-abyss-950 text-foam-50 min-h-screen flex flex-col`}
      >
        {children}
        <Toaster position="bottom-right" richColors={false} />
      </body>
    </html>
  );
}
