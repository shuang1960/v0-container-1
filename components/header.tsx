"use client"
import Link from "next/link"
import { Home, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useIsMobile()

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-16 border-b bg-background z-50">
      <div className="flex items-center justify-between h-full px-4 gap-2">
        {/* Left: Logo/Home button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
        </div>

        {/* Center: Search - Responsive width */}
        <div className="flex items-center flex-1 max-w-md mx-2 sm:mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder={isMobile ? "Search..." : "Search..."} className="w-full pl-8 text-sm" />
          </div>
        </div>

        {/* Right: Account dropdown */}
        <div className="flex-shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
