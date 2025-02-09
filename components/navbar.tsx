"use client"

import Link from "next/link"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/mui-button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { 
  IconButton, 
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Tabs,
  Tab,
  Box,
  Divider,
  AppBar,
  Toolbar,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SPEAKERS", href: "/speakers" },
  { name: "SCHEDULE", href: "/schedule" },
  { name: "TEAM", href: "/team" },
  { name: "NEWS", href: "/blog" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  // Mobile drawer content
  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        p: 2, 
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
      }}>
        <IconButton onClick={handleDrawerToggle}>
          <svg className="h-6 w-6" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1, pt: 8 }}>
        {navigation.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                py: 2,
                '&:hover': {
                  bgcolor: 'rgba(147, 51, 234, 0.1)',
                  color: '#9333EA',
                }
              }}
            >
              <ListItemText 
                primary={item.name}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '1rem',
                    fontWeight: 500,
                  }
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
      <form action="https://lu.ma/1fa60wdk">
            <Button className="primary" sx={{ borderRadius: "0px" }} type="submit">
              REGISTER
            </Button>
            </form>
      </Box>
    </Box>
  )

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: isScrolled ? 'background.default/95' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s'
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: '10rem' }, height: '5rem' }}>
        <Link href="/" className="flex items-center space-x-2">
          <span className={cn(
            "font-bold transition-colors",
            isScrolled ? "text-foreground" : "text-white/90"
          )}>
            Null Vijayawada
          </span>
        </Link>

        {/* Desktop Navigation */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
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
            {navigation.map((item) => (
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
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          <IconButton
            size="small"
            sx={{ 
              color: !isScrolled ? 'white' : 'inherit',
              position: 'relative'
            }}
          >
            <Bell className="h-5 w-5" />
            <Box
              component="span"
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: 'purple.600'
              }}
            />
          </IconButton>
          <form action="https://lu.ma/1fa60wdk">
            <Button className="primary" sx={{ borderRadius: "0px" }} type="submit">
              REGISTER
            </Button>
            </form>
        </Box>

        {/* Mobile Menu Button */}
                  <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{ 
            ml: 'auto',
            display: { md: 'none' },
            color: isScrolled ? 'text.primary' : '#fff'
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: '100%',
              maxWidth: 320,
              bgcolor: 'background.default/95',
              backdropFilter: 'blur(10px)'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}