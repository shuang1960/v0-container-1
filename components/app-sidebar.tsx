"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { Home, FileText, Images, Users, BarChart, PinOff, Pin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { useSidebar } from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Campaigns",
    icon: FileText,
    href: "/item-2",
  },
  {
    title: "Audience",
    icon: Users,
    href: "/item-3",
  },
  {
    title: "Analytics",
    icon: BarChart,
    href: "/item-4",
  },
  {
    title: "Content",
    icon: Images,
    href: "/item-5",
  },
]

export default function AppSidebar() {
  const pathname = usePathname()
  const { state, setOpen } = useSidebar()
  const isMobile = useIsMobile()
  const isCollapsed = state === "collapsed"

  // Track hover state and pinned state
  const [isHovered, setIsHovered] = useState(false)
  const [isPinned, setIsPinned] = useState(!isCollapsed)

  const handleMouseEnter = () => {
    if (isCollapsed && !isMobile) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (isCollapsed && !isMobile) {
      setIsHovered(false)
    }
  }

  const handlePin = () => {
    setIsPinned(true)
    setOpen(true)
  }

  const handleCollapse = () => {
    setIsPinned(false)
    setOpen(false)
  }

  // Update pinned state when sidebar state changes externally
  React.useEffect(() => {
    if (!isCollapsed) {
      setIsPinned(true)
    }
  }, [isCollapsed])

  // Show expanded version if pinned OR (collapsed and hovered)
  const showExpanded = isPinned || (isCollapsed && isHovered)

  return (
    <div
      className="fixed left-0 top-16 h-[calc(100vh-4rem)] bg-sidebar border-r border-sidebar-border z-40 transition-all duration-200 ease-in-out"
      style={{
        width: showExpanded ? "180px" : "50px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col h-full">
        {/* Menu Items */}
        <div className="flex-1 p-2">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm transition-colors ${
                  pathname === item.href
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                } ${!showExpanded ? "justify-center" : ""}`}
                title={!showExpanded ? item.title : undefined}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                {showExpanded && <span className="truncate transition-opacity duration-200">{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Controls */}
        {!isMobile && (
          <div className="p-2 border-t border-sidebar-border">
            <div className={`flex ${!showExpanded ? "justify-center" : "justify-end"}`}>
              {isCollapsed && isHovered && !isPinned ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePin}
                  className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
                  title="Keep Open"
                >
                  <Pin className="h-4 w-4" />
                </Button>
              ) : isPinned ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCollapse}
                  className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
                  title="Unpin sidebar"
                >
                  <PinOff className="h-4 w-4" />
                </Button>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
