import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ContentBase } from "./components/Content";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warner Hurtado LTV challenge",
  description:
    "Frontent for a link shortener where you can save a link and the API will return a code for the link.",
  icons: {
    icon: [
      {
        url: "/public/icons/favicon.png",
        href: "/public/icons/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContentBase>{children}</ContentBase>
      </body>
    </html>
  );
}
