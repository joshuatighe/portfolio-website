import type { Metadata }  from "next";
import { SpeedInsights }  from "@vercel/speed-insights/next"
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  weight:  ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "hi, i'm joshua",
  description: "a portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇮🇪</text></svg>"></link>
      </head>
      <body
        className={`${jetbrainsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
