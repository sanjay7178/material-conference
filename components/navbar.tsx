"use client"

import Link from "next/link"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SPEAKERS", href: "/speakers" },
  { name: "SCHEDULE", href: "/schedule" },
  { name: "TEAM", href: "/team" },
  { name: "BLOG", href: "/blog" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/gdg-logo.svg" alt="GDG DevFest" className="h-8 w-8" />
          <span className={cn("font-bold transition-colors", isScrolled ? "text-foreground" : "text-white/90")}>
            GDG DevFest
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled ? "text-foreground hover:text-purple-400" : "text-white hover:text-white/70",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant={isScrolled ? "ghost" : "ghost-white"} size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-purple-600" />
          </Button>
          <Button variant={isScrolled ? "ghost" : "ghost-white"}>SIGN IN</Button>
          <Button className="bg-purple-600 hover:bg-purple-700">BUY TICKET</Button>
        </div>
      </div>
    </header>
  )
}

