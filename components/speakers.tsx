"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Facebook, Linkedin, SlidersHorizontal } from "lucide-react"
import { useState } from "react"

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

export function Speakers() {
  const [filter, setFilter] = useState("all")

  return (
    <div className="mb-20">
      <div className="flex justify-end mb-8">
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          FILTERS
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakers.map((speaker) => (
          <Card key={speaker.name} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto"
                  />
                </div>
                <div className="mb-2">
                  <img src="/gdg-logo.svg" alt="Null VJA" className="h-6 mx-auto" />
                </div>
                <h3 className="font-bold text-lg mb-1">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{speaker.location}</p>
                <p className="text-sm text-muted-foreground mb-4">{speaker.bio}</p>
                <div className="flex justify-center gap-2">
                  {speaker.social.twitter && (
                    <a href={speaker.social.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.facebook && (
                    <a href={speaker.social.facebook} className="text-muted-foreground hover:text-primary">
                      <Facebook className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.linkedin && (
                    <a href={speaker.social.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

