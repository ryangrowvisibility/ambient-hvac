import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Manrope({ variable: "--font-head", subsets: ["latin"], weight: ["700", "800"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ambient-hvac.growlocalvisibility.com"),
  title: "Ambient HVAC Inc. | 24/7 Furnace, AC & Gas Repair in Hamilton & Stoney Creek",
  description:
    "24/7 furnace repair, AC repair and installation, furnace maintenance and emergency gas service in Hamilton and Stoney Creek. 5.0 stars from 19 Google reviews. Call (905) 518-1811.",
  openGraph: {
    title: "Ambient HVAC Inc. | 24/7 Heating & Cooling, Hamilton",
    description: "We treat your emergency like one. 5.0 stars on Google. Call (905) 518-1811, any time.",
    type: "website",
    locale: "en_CA",
    images: ["/images/p2.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
