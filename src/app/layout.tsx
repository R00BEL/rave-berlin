import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FEEL THE RAVE",
  description:
    "FEEL THE RAVE is an exclusive open-air rave event featuring the best in Techno, Trance, and House music. Tickets are available for 20€ through a secret link. Be sure to grab yours before they sell out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
