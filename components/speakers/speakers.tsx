"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Twitter, Facebook, Linkedin, SlidersHorizontal } from "lucide-react"
import { useState, useEffect } from "react"

interface Speaker {
  name: string
  role: string
  location: string
  bio: string
  image: string
  social: {
    twitter?: string
    facebook?: string
    linkedin?: string
  }
}

const speakers: Speaker[] = [
  {
    name: "Speaker 1",
    role: "AI Safety Researcher",
    location: "Physical",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Speaker 2",
    role: "ML Engineer",
    location: "Physical",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Speaker 3",
    role: "Security Researcher",
    location: "Physical",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Speaker 4",
    role: "AI Ethics Specialist",
    location: "Physical",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
    },
  },
]

function SpeakerSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4 md:p-6 text-center">
          <div className="mb-3 md:mb-4">
            <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto" />
          </div>
          <div className="mb-2">
            <Skeleton className="h-4 md:h-6 w-16 mx-auto" />
          </div>
          <Skeleton className="h-4 w-32 mx-auto mb-1" />
          <Skeleton className="h-3 w-24 mx-auto mb-2 md:mb-4" />
          <div className="space-y-2 mb-3 md:mb-4">
            <Skeleton className="h-2 w-full" />
            <Skeleton className="h-2 w-full" />
            <Skeleton className="h-2 w-2/3 mx-auto" />
          </div>
          <div className="flex justify-center gap-3">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-4 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Speakers() {
  const [filter, setFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="px-4 md:px-6 mb-12 md:mb-20">
      <div className="flex justify-end mb-6 md:mb-8">
        <Button variant="outline" className="gap-2 text-sm">
          <SlidersHorizontal className="h-3 w-3 md:h-4 md:w-4" />
          FILTERS
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {isLoading ? (
          <>
            {[...Array(4)].map((_, index) => (
              <SpeakerSkeleton key={index} />
            ))}
          </>
        ) : (
          <>
            {speakers.map((speaker) => (
              <Card key={speaker.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 md:p-6 text-center">
                    <div className="mb-3 md:mb-4">
                      <img
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto"
                      />
                    </div>
                    <div className="mb-2">
                      <img 
                        src="/gdg-logo.svg" 
                        alt="" 
                        className="h-4 md:h-6 mx-auto" 
                      />
                    </div>
                    <h3 className="font-bold text-base md:text-lg mb-1">{speaker.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">
                      {speaker.location}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-3 px-2">
                      {speaker.bio}
                    </p>
                    <div className="flex justify-center gap-3">
                      {speaker.social.twitter && (
                        <a 
                          href={speaker.social.twitter} 
                          className="text-muted-foreground hover:text-primary p-1"
                        >
                          <Twitter className="h-3 w-3 md:h-4 md:w-4" />
                        </a>
                      )}
                      {speaker.social.facebook && (
                        <a 
                          href={speaker.social.facebook} 
                          className="text-muted-foreground hover:text-primary p-1"
                        >
                          <Facebook className="h-3 w-3 md:h-4 md:w-4" />
                        </a>
                      )}
                      {speaker.social.linkedin && (
                        <a 
                          href={speaker.social.linkedin} 
                          className="text-muted-foreground hover:text-primary p-1"
                        >
                          <Linkedin className="h-3 w-3 md:h-4 md:w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

