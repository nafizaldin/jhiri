import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import ProgressBar from "@/components/ui/ProgressBar";
import Toast from "@/components/ui/Toast";
import "@/styles/globals.scss";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jhiri Resort — Where Stillness Flows",
  description:
    "A nature retreat in the heart of Sreemangal, Bangladesh. Nestled in emerald tea gardens, Jhiri Resort offers luxury accommodation, fine dining, and world-class amenities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <CustomCursor />
        <ProgressBar />
        {children}
        <Toast />
      </body>
    </html>
  );
}
