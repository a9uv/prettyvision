import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Dekko } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

const dekko = Dekko({
  subsets: ["latin"],
  variable: "--font-dekko",
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Pretty Visions Decoration - Crafting Beautiful Spaces",
  description:
    "Event decoration company serving Southern Wisconsin since 2020. Creating beautiful spaces for your special memories.",
  icons: {
    icon: '/pv_icon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${dekko.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
