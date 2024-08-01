import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import {Analytics} from "@vercel/analytics/react"
import { ClerkProvider } from "@clerk/nextjs";

import Script from "next/script";
import Providers from "./Providers";


// const montserrat = Montserrat({
//   subsets: ["latin", "cyrillic"],
//   display: "swap",
// });

const exo = Exo_2({
  subsets: ["latin", "cyrillic"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Jeremy Counsellor",
  description: "Get Detailed Feedback on Your Essay",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        
        <body className={exo.className}>
          <Providers>
            {children}
          </Providers>
          <Analytics/>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
