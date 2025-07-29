import type React from "react"
import type { Metadata } from "next/font/google"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { SidebarProvider } from "@/components/ui/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Responsive Web App",
  description: "A responsive web application template",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          {/* Header spans full width outside of sidebar system */}
          <Header />
          {/* Main content area below header - fills remaining viewport */}
          <div className="fixed top-16 left-0 right-0 bottom-0">{children}</div>
        </SidebarProvider>
      </body>
    </html>
  )
}
