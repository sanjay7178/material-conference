"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  SlidersHorizontal,
  Bookmark,
  Clock,
  Users,
  Coffee,
  Presentation,
  PartyPopperIcon as Party,
  X,
  Mic,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Speaker {
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
}

interface Session {
  time: string;
  timeMinutes: string;
  title: string;
  description: string;
  duration: string;
  language?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  track?:
    | "Adversarial Robustness"
    | "Data Privacy"
    | "Bias and Fairness"
    | "Misuse Detection"
    | "ML/AI"
    | "OWASP Top 10 for LLM"
    | "Security Engineering"
    | "Secure Development"
    | "Security"
    | "LLM"
    | "ML/AI";
  type?: "talk" | "workshop" | "break" | "networking" | "podcast";
  speakers?: Speaker[];
}

const scheduleData: Record<string, Session[]> = {
  "day-1": [
    {
      time: "09",
      timeMinutes: "00",
      title: "Participants check-in",
      description: "Get your workshop materials ",
      duration: "30 mins",
      type: "break",
    },
    {
      time: "09",
      timeMinutes: "45",
      title: "Event Inaguration",
      description: "Opening remarks and welcome address.",
      duration: "15 mins",
      type: "talk",
    },
    {
      time: "09",
      timeMinutes: "50",
      title: "Introduction to Null Vijaywada Community",
      description: "Know more about the community",
      duration: "10 mins",
      type: "networking",
      speakers: [
        {
          name: "Sai Sanjay",
          role: "Chapter Lead - Null Vijayawada",
          company: "Chapter Lead - Null Vijayawada",
          location: "India",
          avatar: "",
        },
      ],
    },
    {
      time: "10",
      timeMinutes: "00",
      title:
        "Session 1: Building Smarter Chatbots: LangChain, LangGraph & RAG in Action",
      description: "",
      duration: "3 hours",
      language: "EN",
      difficulty: "Intermediate",
      track: "ML/AI",
      type: "workshop",
      speakers: [
        {
          name: "Jai Ganesh S",
          role: "Senior AI Architect Lead",
          company: "Valeo",
          location: "India",
          avatar: "speakers/jai-ganesh-s.jpeg",
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
      title:
        "Session 2:  Evolution gpt model , Bert and custom Bert implementation (LLM)",
      description: "",
      duration: "3 hours",
      language: "EN",
      difficulty: "Advanced",
      track: "ML/AI",
      type: "workshop",
      speakers: [
        {
          name: "Deepan Raj",
          role: "Technical Manager",
          company: "HCL Tech",
          location: "India",
          avatar: "speakers/deepan-raj.jpeg",
        },
      ],
    },
  ],
  "day-2": [
    {
      time: "10",
      timeMinutes: "00",
      title:
        "Session 3: Build , Scale GenAI on AWS and Security of LLMs on AWS",
      description: `
       1. Introduction to AWS 2.Build and scale genAI on AWS ,  \n
       3.LLM security on AWS \n
       4.Qna  \n
       5.Hands on
      `,
      duration: "3 hours",
      language: "EN",
      difficulty: "Intermediate",
      track: "ML/AI",
      type: "workshop",
      speakers: [
        {
          name: "Punit Kumar Jain",
          role: "Senior FSI Solutions Architect",
          company: "Amazon Web Services",
          location: "India",
          avatar: "speakers/punitjain-3.jpeg",
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
      title: "Tentative : Podcast: LLM Security - Industry Perspectives",
      description:
        "An engaging discussion between industry leaders on real-world LLM security challenges and solutions",
      duration: "1 hour",
      language: "EN",
      track: "Security",
      type: "podcast",
      speakers: [
        {
          name: "Speaker 1",
          role: "Senior Researcher",
          company: "Tech Corp",
          location: "India",
          avatar: "/speakers/speaker1.png",
        },
        {
          name: "Speaker 2",
          role: "Security Expert",
          company: "AI Solutions",
          location: "India",
          avatar: "/speakers/speaker2.png",
        },
        {
          name: "Speaker 3",
          role: "AI Lead",
          company: "Security Labs",
          location: "India",
          avatar: "/speakers/speaker3.png",
        },
      ],
    },
    {
      time: "15",
      timeMinutes: "00",
      title: "Session 4:  Securing the AI Assembly Line: MLOps Edition",
      description: "",
      duration: "3 hours",
      language: "EN",
      difficulty: "Advanced",
      track: "ML/AI",
      type: "workshop",
      speakers: [
        {
          name: "Geet Hirawat",
          role: "Cloud Security Engineer",
          company: "We45",
          location: "India",
          avatar: "speakers/geeth.jpeg",
        },
      ],
    },
  ],
};

const trackColors: Record<string, string> = {
  "Adversarial Robustness": "bg-green-100 text-green-800 border-green-200",
  "Data Privacy": "bg-blue-100 text-blue-800 border-blue-200",
  "Bias and Fairness": "bg-purple-100 text-purple-800 border-purple-200",
  "Misuse Detection": "bg-red-100 text-red-800 border-red-200",
  "ML/AI": "bg-orange-100 text-orange-800 border-orange-200",
  "OWASP Top 10 for LLM": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Security Engineering": "bg-teal-100 text-teal-800 border-teal-200",
  "Secure Development": "bg-cyan-100 text-cyan-800 border-cyan-200",
  Security: "bg-indigo-100 text-indigo-800 border-indigo-200",
  LLM: "bg-violet-100 text-violet-800 border-violet-200",
};

const difficultyColors = {
  Beginner: "bg-emerald-100 text-emerald-800",
  Intermediate: "bg-amber-100 text-amber-800",
  Advanced: "bg-rose-100 text-rose-800",
};

const tracks = [
  "Adversarial Robustness",
  "Data Privacy",
  "Bias and Fairness",
  "Misuse Detection",
  "ML/AI",
  "OWASP Top 10 for LLM",
  "Security Engineering",
  "Secure Development",
  "Security",
  "LLM",
];
const difficulties = ["Beginner", "Intermediate", "Advanced"];
const types = ["talk", "workshop", "break", "networking", "podcast"];

const SessionTypeIcon = ({ type }: { type: Session["type"] }) => {
  switch (type) {
    case "talk":
      return <Presentation className="h-5 w-5" />;
    case "workshop":
      return <Users className="h-5 w-5" />;
    case "break":
      return <Coffee className="h-5 w-5" />;
    case "networking":
      return <Party className="h-5 w-5" />;
    case "podcast":
      return <Mic className="h-5 w-5" />;
    default:
      return null;
  }
};

export function Schedule() {
  const [activeTab, setActiveTab] = useState("day-1");
  const [filters, setFilters] = useState({
    tracks: [] as string[],
    difficulties: [] as string[],
    types: [] as string[],
  });

  const filterSession = (session: Session) => {
    if (
      filters.tracks.length &&
      session.track &&
      !filters.tracks.includes(session.track)
    )
      return false;
    if (
      filters.difficulties.length &&
      session.difficulty &&
      !filters.difficulties.includes(session.difficulty)
    )
      return false;
    if (
      filters.types.length &&
      session.type &&
      !filters.types.includes(session.type)
    )
      return false;
    return true;
  };

  const clearFilters = () => {
    setFilters({
      tracks: [],
      difficulties: [],
      types: [],
    });
  };

  const hasActiveFilters =
    filters.tracks.length > 0 ||
    filters.difficulties.length > 0 ||
    filters.types.length > 0;

  return (
    <div className="relative">
      <Tabs defaultValue="day-1" onValueChange={setActiveTab}>
        <div className="sticky top-16 sm:top-20 z-10 bg-gradient-to-b backdrop-blur-sm pb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
            <TabsList className="relative h-10 bg-transparent p-0 border-b border-gray-200 w-full sm:w-auto">
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
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  FILTERS
                  {hasActiveFilters && (
                    <Badge variant="secondary" className="ml-1 rounded-full">
                      {filters.tracks.length +
                        filters.difficulties.length +
                        filters.types.length}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[calc(100vw-2rem)] sm:w-80">
                <div className="space-y-4">
                  {hasActiveFilters && (
                    <div className="flex justify-between items-center pb-2 border-b">
                      <h4 className="font-medium">Active Filters</h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="h-auto p-1"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h4 className="font-medium">Track</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tracks.map((track) => (
                        <div
                          key={track}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`track-${track}`}
                            checked={filters.tracks.includes(track)}
                            onCheckedChange={(checked) => {
                              setFilters((prev) => ({
                                ...prev,
                                tracks: checked
                                  ? [...prev.tracks, track]
                                  : prev.tracks.filter((t) => t !== track),
                              }));
                            }}
                          />
                          <label htmlFor={`track-${track}`} className="text-sm">
                            {track}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Difficulty</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {difficulties.map((difficulty) => (
                        <div
                          key={difficulty}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`difficulty-${difficulty}`}
                            checked={filters.difficulties.includes(difficulty)}
                            onCheckedChange={(checked) => {
                              setFilters((prev) => ({
                                ...prev,
                                difficulties: checked
                                  ? [...prev.difficulties, difficulty]
                                  : prev.difficulties.filter(
                                      (d) => d !== difficulty
                                    ),
                              }));
                            }}
                          />
                          <label
                            htmlFor={`difficulty-${difficulty}`}
                            className="text-sm"
                          >
                            {difficulty}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Type</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {types.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={`type-${type}`}
                            checked={filters.types.includes(type)}
                            onCheckedChange={(checked) => {
                              setFilters((prev) => ({
                                ...prev,
                                types: checked
                                  ? [...prev.types, type]
                                  : prev.types.filter((t) => t !== type),
                              }));
                            }}
                          />
                          <label
                            htmlFor={`type-${type}`}
                            className="text-sm capitalize"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="relative px-2 sm:px-0">
          {Object.entries(scheduleData).map(([day, sessions]) => (
            <TabsContent
              key={day}
              value={day}
              className="transition-all duration-300 animate-in slide-in-from-right-4"
            >
              <div className="space-y-4 sm:space-y-6">
                {sessions.filter(filterSession).map((session, index) => (
                  <Card
                    key={index}
                    className="relative overflow-hidden transition-all duration-200 hover:shadow-lg"
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:gap-6">
                        <div className="flex sm:block items-center justify-between mb-4 sm:mb-0">
                          <div className="w-20 flex-shrink-0 flex flex-col items-center">
                            <div className="text-2xl sm:text-3xl font-bold text-purple-600">
                              {session.time}
                              <span className="text-sm sm:text-base text-purple-400">
                                {session.timeMinutes}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-1">
                              <Clock className="h-3 w-3" />
                              {session.duration}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="sm:hidden text-purple-500 hover:text-purple-600 hover:bg-purple-50"
                          >
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="mt-1">
                                <SessionTypeIcon type={session.type} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="text-base sm:text-xl font-semibold mb-2 flex flex-wrap items-center gap-2">
                                  {session.title}
                                  {session.language && (
                                    <Badge
                                      variant="outline"
                                      className="ml-0 sm:ml-2 text-xs"
                                    >
                                      {session.language}
                                    </Badge>
                                  )}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3 sm:mb-4">
                                  {session.description}
                                </p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="hidden sm:flex text-purple-500 hover:text-purple-600 hover:bg-purple-50"
                            >
                              <Bookmark className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {session.track && (
                              <Badge
                                variant="outline"
                                className={cn(
                                  "font-medium",
                                  trackColors[session.track]
                                )}
                              >
                                {session.track}
                              </Badge>
                            )}
                            {session.difficulty && (
                              <Badge
                                variant="outline"
                                className={cn(
                                  "font-medium",
                                  difficultyColors[session.difficulty]
                                )}
                              >
                                {session.difficulty}
                              </Badge>
                            )}
                          </div>

                          {session.speakers && (
                            <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t">
                              {session.speakers.map((speaker, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full pl-1 pr-3 sm:pr-4 py-1 transition-colors hover:bg-gray-100 w-full sm:w-auto"
                                >
                                  <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border-2 border-white">
                                    <AvatarImage
                                      src={speaker.avatar}
                                      alt={speaker.name}
                                    />
                                    <AvatarFallback className="bg-purple-100 text-purple-700">
                                      {speaker.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="min-w-0 flex-1">
                                    <div className="font-medium text-xs sm:text-sm truncate">
                                      {speaker.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground truncate">
                                      {speaker.company}
                                    </div>
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
  );
}
