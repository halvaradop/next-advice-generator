import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/ui/globals.css";

const manrope = Manrope({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-manrope"
})

export const metadata: Metadata = {
  title: "Advice generator",
  description: "Website that tell you several advice that you can take",
  authors: {
    name: "x"
  },
  category: "website",
  creator: "x",
  applicationName: "Advice generator",
  keywords: "advices, website, grow personal, healthy life",
  metadataBase: new URL("https://advice-generator.com"),
  robots: "index, follow",
  openGraph: {
    title: "Advice generator",
    type: "website",
    countryName: "Colombia",
    description: "Website that tell you several advice that you can take",
    siteName: "Advice generator",
    emails: "hernanvid123@gmail.com",    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
