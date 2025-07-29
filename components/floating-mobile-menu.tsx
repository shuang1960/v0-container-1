"use client"

import { useState } from "react"
import { Menu, X, Images } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, FileText, Users, BarChart } from "lucide-react"

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

export default function FloatingMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()
  const pathname = usePathname()

  if (!isMobile) return null

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleMenuItemClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300" onClick={toggleMenu} />
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-background border-r shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-20 px-4">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={handleMenuItemClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Floating Action Button */}
      <Button
        onClick={toggleMenu}
        size="icon"
        className="fixed bottom-6 left-6 h-14 w-14 rounded-full shadow-lg z-50 transition-all duration-200 hover:scale-110"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">{isOpen ? "Close Menu" : "Open Menu"}</span>
      </Button>
    </>
  )
}
