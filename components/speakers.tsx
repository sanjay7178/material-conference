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
    name: "Adrian Kajda",
    role: "Creator of Fuelio app",
    location: "Poland",
    bio: "Creator of Fuelio app. Fuelio was his hobby project started in 2012. Three years later the app was acquired by Sygic.",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Aleksander Piotrowski",
    role: "Mobile Developer",
    location: "Warsaw, Poland",
    bio: "Became a mobile developer after long run as a backend developer. Because of age, holding senior positions from the day one as an Android programmer. Serial...",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Anton Minashkin",
    role: "Android Developer",
    location: "Lviv, Ukraine",
    bio: "Android developer, currently works at EPAM. Have experience in both server and mobile side development. All my free time I spend on the endless search of...",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Carmen Popoviciu",
    role: "Front-end Engineer",
    location: "Cluj-Napoca, Romania",
    bio: "Carmen is a front-end engineer and a #1 fan of dev communities. She loves Angular but has since recently developed feelings for Polymer too. She strongly believ...",
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
                  <img src="/gdg-logo.svg" alt="GDG Lviv" className="h-6 mx-auto" />
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

