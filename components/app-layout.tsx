"use client"

import type React from "react"
import AppSidebar from "@/components/app-sidebar"
import FloatingMobileMenu from "@/components/floating-mobile-menu"
import { SidebarInset, useSidebar } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { state } = useSidebar()
  const isMobile = useIsMobile()
  const isCollapsed = state === "collapsed"

  return (
    <div className="flex h-full w-full">
      {!isMobile && <AppSidebar />}
      <SidebarInset
        className="flex-1 transition-all duration-200 ease-in-out"
        style={{
          marginLeft: isMobile ? "0px" : isCollapsed ? "50px" : "180px",
        }}
      >
        <main className="w-full h-full">{children}</main>
      </SidebarInset>
      <FloatingMobileMenu />
    </div>
  )
}
