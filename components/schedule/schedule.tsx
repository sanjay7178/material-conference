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
  "day-1": [
    {
      time: "09",
      timeMinutes: "30",
      title: "Registration & Welcome Coffee",
      description: "Get your workshop materials and enjoy morning refreshments",
      duration: "30 mins",
      type: "break",
    },
    {
      time: "10",
      timeMinutes: "00",
      title: "Session 1: Adversarial Robustness",
      description: "Understanding and mitigating adversarial attacks on LLMs, including prompt injection and evasion.",
      duration: "3 hours",
      language: "EN",
      difficulty: "Intermediate",
      track: "ML/AI",
      type: "workshop",
      speakers: [
        {
          name: "Dr. Chester Rebeiro",
          role: "Principal Investigator",
          company: "IIT Madras",
          location: "Chennai, India",
          avatar: "/investigator/prof-chester.png",
        },
      ],
    },
    {
      time: "13",
      timeMinutes: "00",
      title: "Lunch Break",
      description: "Networking lunch",
      duration: "1 hour",
      type: "break",
    },
    {
      time: "14",
      timeMinutes: "00",
      title: "Session 2: Data Privacy and Security",
      description: "Protecting sensitive data in LLM interactions and preventing data leakage.",
      duration: "3 hours",
      language: "EN",
      difficulty: "Advanced",
      track: "ML/AI",
      type: "workshop",
      speakers: [
        {
          name: "Dr. Hari Seetha",
          role: "Convenor",
          company: "VIT-AP University",
          location: "Amaravati, India",
          avatar: "/convenors/Dr_Hari_Seetha_SCOPE_0741_2b647e6904.avif",
        },
      ],
    },
  ],
  "day-2": [
    {
      time: "10",
      timeMinutes: "00",
      title: "Session 3: Bias and Fairness Mitigation",
      description: "Identifying and mitigating biases in LLM-generated content for ethical AI deployment.",
      duration: "3 hours",
      language: "EN",
      difficulty: "Intermediate",
      track: "ML/AI",
      type: "workshop",
      speakers: [
        {
          name: "Dr. Sibi Chakkaravarthy S",
          role: "Coordinator",
          company: "VIT-AP University",
          location: "Amaravati, India",
          avatar: "/coordinators/Dr_Sibi_Chakkaravarthy_S_70084_0587_206cccb3ec.avif",
        },
      ],
    },
    {
      time: "13",
      timeMinutes: "00",
      title: "Lunch Break",
      description: "Networking lunch",
      duration: "1 hour",
      type: "break",
    },
    {
      time: "14",
      timeMinutes: "00",
      title: "Session 4: Detection and Mitigation of Misuse",
      description: "Techniques to identify and mitigate malicious use cases of LLMs, like phishing or misinformation.",
      duration: "3 hours",
      language: "EN",
      difficulty: "Advanced",
      track: "ML/AI",
      type: "workshop",
      speakers: [
        {
          name: "Dr. Sudhakar Ilango",
          role: "Convenor",
          company: "VIT-AP University",
          location: "Amaravati, India",
          avatar: "/convenors/Dr_Sudhakar_Ilango_70087_IMG_4727_SCOPE_68f8caba72.avif",
        },
      ],
    },
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
  const [activeTab, setActiveTab] = useState("day-1")

  return (
    <div className="relative">
      <Tabs defaultValue="day-1" onValueChange={setActiveTab}>
        <div className="sticky top-20 z-10 bg-gradient-to-b backdrop-blur-sm pb-4">
          <div className="flex justify-between items-center mb-8">
            <TabsList className="relative h-10 bg-transparent p-0 border-b border-gray-200">
              <div
                className="absolute bottom-0 h-0.5 bg-purple-600 transition-all duration-300"
                style={{
                  left: activeTab === "day-1" ? "0" : "50%",
                  width: "50%",
                }}
              />
              <TabsTrigger 
                value="day-1" 
                className="relative h-10 rounded-none px-8 font-medium data-[state=active]:text-purple-600 data-[state=active]:bg-transparent transition-colors"
              >
                Day 1 
              </TabsTrigger>
              <TabsTrigger 
                value="day-2" 
                className="relative h-10 rounded-none px-8 font-medium data-[state=active]:text-purple-600 data-[state=active]:bg-transparent transition-colors"
              >
                Day 2
              </TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              FILTERS
            </Button>
          </div>
        </div>

        {/* Add smooth transition for tab content */}
        <div className="relative">
          {Object.entries(scheduleData).map(([day, sessions]) => (
            <TabsContent 
              key={day} 
              value={day}
              className="transition-all duration-300 animate-in slide-in-from-right-4"
            >
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
        </div>
      </Tabs>
    </div>
  )
}

