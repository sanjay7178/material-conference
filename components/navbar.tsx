"use client"

import Link from "next/link"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/mui-button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { IconButton, Drawer, List, ListItem, ListItemText, Tabs, Tab, Box } from "@mui/material"
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

        {/* Mobile Menu Button - Make sure it's visible on mobile */}
        <div className="flex md:hidden">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={cn("text-2xl", !isScrolled && "text-white")}
            onClick={() => setIsMobileMenuOpen(true)}
            sx={{ padding: '8px' }}
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </div>

        {/* Mobile Menu Drawer */}
        <Drawer
          anchor="right"
          open={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: '80%',
              maxWidth: '300px',
              background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)',
              color: isScrolled ? 'inherit' : 'white',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <IconButton 
                onClick={() => setIsMobileMenuOpen(false)}
                className={isScrolled ? '' : 'text-white'}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <List className="flex-1">
              {navigation.map((item) => (
                <ListItem 
                  key={item.name}
                  component={Link}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  sx={{
                    color: isScrolled ? 'inherit' : 'white',
                    '&:hover': {
                      backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <ListItemText 
                    primary={item.name}
                    primaryTypographyProps={{
                      className: "font-medium",
                    }}
                  />
                </ListItem>
              ))}
            </List>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-3">
                {/* <Button className="ghost w-full" sx={{ justifyContent: 'flex-start' }}>
                  SIGN IN
                </Button> */}
                <Button className="primary w-full" sx={{ borderRadius: '0px' }}>
                  REGISTER
                </Button>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  )
}

