import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { CustomCursor } from "../components/layout/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Perlas — Force in Motion",
  description:
    "Sovereign Capability Facilitator. From the first government-to-government conversation to the final depot-level overhaul. Building nations that can keep what they buy.",
  keywords: [
    "sovereign capability",
    "defense procurement",
    "G2G",
    "MRO",
    "lifecycle custody",
    "aerospace",
    "naval",
    "Philippines",
  ],
  openGraph: {
    title: "Perlas — Force in Motion",
    description: "Building nations that can keep what they buy.",
    type: "website",
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
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body
        style={{
          backgroundColor: "var(--color-obsidian)",
          color: "var(--color-light)",
          fontFamily: "var(--font-body)",
        }}
      >
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
