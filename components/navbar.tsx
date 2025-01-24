"use client"

import Link from "next/link"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/mui-button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { IconButton, List, ListItem, ListItemText, Tabs, Tab, Box } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SPEAKERS", href: "/speakers" },
  { name: "SCHEDULE", href: "/schedule" },
  { name: "TEAM", href: "/team" },
  { name: "NEWS", href: "/blog" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent",
      )}
    >
      <div className="relative flex h-20 items-center justify-between px-4 md:px-[10rem]">
        <Link href="/" className="flex items-center space-x-2">
          {/* <img src="/gdg-logo.svg" alt="GDG DevFest" className="h-8 w-8" /> */}
          <span className={cn("font-bold transition-colors", isScrolled ? "text-foreground" : "text-white/90")}>
            Null Vijaywada
          </span>
        </Link>

        {/* Desktop Navigation with Material UI */}
        <Box className="hidden md:block">
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            sx={{
              '& .MuiTab-root': {
                color: isScrolled ? 'text.primary' : 'white',
                opacity: 0.7,
                '&.Mui-selected': {
                  color: isScrolled ? 'primary.main' : 'white',
                  opacity: 1,
                },
                '&:hover': {
                  opacity: 1,
                },
                minWidth: 'auto',
                padding: '12px 16px',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                fontWeight: 500,
              },
              '& .MuiTabs-indicator': {
                backgroundColor: isScrolled ? 'primary.main' : 'white',
              },
            }}
          >
            {navigation.map((item, index) => (
              <Tab
                key={item.name}
                label={item.name}
                component={Link}
                href={item.href}
              />
            ))}
          </Tabs>
        </Box>

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
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 focus:outline-none",
              isScrolled ? "text-foreground" : "text-white/90"
            )}
          >
            <span className="sr-only">Open main menu</span>
            {!isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background/95 backdrop-blur-sm md:hidden transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full">
            <div className="pt-20 pb-4 px-4">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-base font-medium hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-auto p-4 border-t">
              <Button className="primary w-full" sx={{ borderRadius: '0px' }}>
                REGISTER
              </Button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

      </div>
    </header>
  )
}

