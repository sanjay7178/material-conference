"use client"

import Link from "next/link"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/mui-button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SPEAKERS", href: "/speakers" },
  { name: "SCHEDULE", href: "/schedule" },
  { name: "TEAM", href: "/team" },
  { name: "BLOG", href: "/blog" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      <div className="relative flex h-20 items-center justify-between px-4 md:px-[10rem]">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/gdg-logo.svg" alt="GDG DevFest" className="h-8 w-8" />
          <span className={cn("font-bold transition-colors", isScrolled ? "text-foreground" : "text-white/90")}>
            GDG DevFest
          </span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <IconButton
            size="small"
            className={cn("relative", !isScrolled && "text-white")}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-purple-600" />
          </IconButton>
          {/* <Button
            className="ghost"
            sx={{ color: !isScrolled ? 'white' : 'inherit' }}
          >
            SIGN IN
          </Button> */}
            <Button className="primary" sx={{ borderRadius: '0px' }}>
              REGISTER
            </Button>
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={cn("md:hidden", !isScrolled && "text-white")}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu Drawer */}
        <Drawer
          anchor="right"
          open={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="w-[280px] p-4">
            <div className="flex justify-end mb-4">
              <IconButton onClick={() => setIsMobileMenuOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <List>
              {navigation.map((item) => (
                <ListItem 
                  key={item.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                  component={Link}
                  href={item.href}
                >
                  <ListItemText 
                    primary={item.name} 
                    className="text-foreground hover:text-purple-400"
                  />
                </ListItem>
              ))}
              <ListItem className="flex flex-col space-y-4 pt-4 border-t mt-4">
                {/* <Button className="ghost w-full">SIGN IN</Button> */}
                <Button className="primary w-full" sx={{ borderRadius: '0px' }}>
                  REGISTER
                </Button>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </header>
  )
}

