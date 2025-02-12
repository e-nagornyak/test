import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { cn } from "@/lib/cn"
import { DefaultFooter } from "@/components/common/nav/default-footer"
import { DefaultHeader } from "@/components/common/nav/default-header"

import "../styles/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Test",
  description: "Test",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, inizial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <DefaultHeader />
        <main className="flex min-h-screen flex-1 flex-col">{children}</main>
        <DefaultFooter />
      </body>
    </html>
  )
}
