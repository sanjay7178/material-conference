"use client"

import Link from "next/link"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="GDG DevFest" className="h-8 w-8" />
          <span className="font-bold">GDG DevFest</span>
        </Link>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            HOME
          </Link>
          <Link href="/speakers" className="text-sm font-medium transition-colors hover:text-primary">
            SPEAKERS
          </Link>
          <Link href="/schedule" className="text-sm font-medium transition-colors hover:text-primary">
            SCHEDULE
          </Link>
          <Link href="/team" className="text-sm font-medium transition-colors hover:text-primary">
            TEAM
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            BLOG
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost">SIGN IN</Button>
          <Button className="bg-purple-600 hover:bg-purple-700">BUY TICKET</Button>
        </div>
      </div>
    </header>
  )
}

