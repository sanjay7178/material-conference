"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, Bookmark, Clock, Users, Coffee, Presentation, PartyPopperIcon as Party } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Speaker {
  name: string
  role: string
  company: string
  location: string
  avatar: string
}

interface Session {
  time: string
  timeMinutes: string
  title: string
  description: string
  duration: string
  language?: string
  difficulty?: "Beginner" | "Intermediate" | "Advanced"
  track?: "Android" | "Web" | "Cloud" | "ML/AI"
  type?: "talk" | "workshop" | "break" | "networking"
  speakers?: Speaker[]
}

const scheduleData: Record<string, Session[]> = {
  "september-9": [
    {
      time: "09",
      timeMinutes: "00",
      title: "Registration & morning Coffee",
      description: "Get your badge, coffee, enjoy talking with tech edicts around.",
      duration: "1 hour",
      type: "break",
    },
    {
      time: "10",
      timeMinutes: "00",
      title: "GDG DevFest Ukraine 2024 Opening",
      description: "Official start of the conference. Greetings from the organizers, sponsors and partners.",
      duration: "15 mins",
      language: "EN",
      type: "talk",
    },
    {
      time: "14",
      timeMinutes: "00",
      title: "Windows and .NET on Google Cloud Platform",
      description:
        "In this session, we will take a look at Windows and .NET support on Google Cloud Platform. We will build a simple ASP.NET...",
      duration: "40 mins",
      language: "EN",
      difficulty: "Beginner",
      track: "Cloud",
      type: "workshop",
      speakers: [
        {
          name: "Mete Atamel",
          role: "Developer Advocate",
          company: "Google",
          location: "London, United Kingdom",
          avatar: "/placeholder.svg",
        },
      ],
    },
    {
      time: "18",
      timeMinutes: "30",
      title: "Afterparty & Networking",
      description: "Join us for an evening of networking, food, and fun!",
      duration: "4 hours",
      type: "networking",
    },
  ],
  "september-10": [
    // Similar structure for day 2
  ],
}

const trackColors = {
  Android: "bg-green-100 text-green-800 border-green-200",
  Web: "bg-blue-100 text-blue-800 border-blue-200",
  Cloud: "bg-purple-100 text-purple-800 border-purple-200",
  "ML/AI": "bg-orange-100 text-orange-800 border-orange-200",
}

const difficultyColors = {
  Beginner: "bg-emerald-100 text-emerald-800",
  Intermediate: "bg-amber-100 text-amber-800",
  Advanced: "bg-rose-100 text-rose-800",
}

const SessionTypeIcon = ({ type }: { type: Session["type"] }) => {
  switch (type) {
    case "talk":
      return <Presentation className="h-5 w-5" />
    case "workshop":
      return <Users className="h-5 w-5" />
    case "break":
      return <Coffee className="h-5 w-5" />
    case "networking":
      return <Party className="h-5 w-5" />
    default:
      return null
  }
}

export function Schedule() {
  const [activeTab, setActiveTab] = useState("september-9")

  return (
    <div className="relative">
      <Tabs defaultValue="september-9" onValueChange={setActiveTab}>
        <div className="sticky top-20 z-10 bg-gradient-to-b  backdrop-blur-sm pb-4">
          <div className="flex justify-between items-center mb-8">
            <TabsList className="bg-white/50 backdrop-blur-sm">
              <TabsTrigger value="september-9" className="data-[state=active]:bg-white">
                September 9
              </TabsTrigger>
              <TabsTrigger value="september-10" className="data-[state=active]:bg-white">
                September 10
              </TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              FILTERS
            </Button>
          </div>
        </div>

        {Object.entries(scheduleData).map(([day, sessions]) => (
          <TabsContent key={day} value={day}>
            <div className="space-y-6">
              {sessions.map((session, index) => (
                <Card key={index} className="relative overflow-hidden transition-all duration-200 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-20 flex-shrink-0 flex flex-col items-center">
                        <div className="text-3xl font-bold text-purple-600">
                          {session.time}
                          <span className="text-base text-purple-400">{session.timeMinutes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <Clock className="h-3 w-3" />
                          {session.duration}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="mt-1">
                              <SessionTypeIcon type={session.type} />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                {session.title}
                                {session.language && (
                                  <Badge variant="outline" className="ml-2">
                                    {session.language}
                                  </Badge>
                                )}
                              </h3>
                              <p className="text-muted-foreground mb-4">{session.description}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-purple-500 hover:text-purple-600 hover:bg-purple-50"
                          >
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {session.track && (
                            <Badge variant="outline" className={cn("font-medium", trackColors[session.track])}>
                              {session.track}
                            </Badge>
                          )}
                          {session.difficulty && (
                            <Badge
                              variant="outline"
                              className={cn("font-medium", difficultyColors[session.difficulty])}
                            >
                              {session.difficulty}
                            </Badge>
                          )}
                        </div>

                        {session.speakers && (
                          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t">
                            {session.speakers.map((speaker, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-3 bg-gray-50 rounded-full pl-1 pr-4 py-1 transition-colors hover:bg-gray-100"
                              >
                                <Avatar className="h-8 w-8 border-2 border-white">
                                  <AvatarImage src={speaker.avatar} alt={speaker.name} />
                                  <AvatarFallback className="bg-purple-100 text-purple-700">
                                    {speaker.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium text-sm">{speaker.name}</div>
                                  <div className="text-xs text-muted-foreground">{speaker.company}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

