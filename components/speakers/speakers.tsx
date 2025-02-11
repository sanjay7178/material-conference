"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { Twitter, Facebook, Linkedin, SlidersHorizontal, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { Speaker, speakers } from "@/data/speakers"
import { SpeakerModal } from "./modal"

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

function SpeakerCard({ speaker, onClick }: { speaker: Speaker; onClick: () => void }) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="p-4 md:p-6 text-center">
          <div className="mb-3 md:mb-4">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto"
            />
          </div>
          <div className="mb-2">
            <img src="/gdg-logo.svg" alt="" className="h-4 md:h-6 mx-auto" />
          </div>
          <h3 className="font-bold text-base md:text-lg mb-1">{speaker.name}</h3>
          <p className="text-xs md:text-sm text-muted-foreground mb-1">
            {speaker.role}
          </p>
          {/* New topic display */}
            <div className="inline-block px-3 py-1 rounded-md bg-purple-100 dark:bg-purple-900/20 mb-2">
            <p className="text-[10px] md:text-xs text-purple-700 dark:text-purple-300">
              {speaker.topic}
            </p>
            </div>
          <div className="flex justify-center gap-3">
            {speaker.social.linkedin && (
              <a 
                href={speaker.social.linkedin}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary p-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="h-3 w-3 md:h-4 md:w-4" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Speakers() {
  const [filter, setFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="px-4 md:px-6 mb-12 md:mb-20">
      {selectedSpeaker && (
        <SpeakerModal 
          speaker={selectedSpeaker} 
          open={!!selectedSpeaker} 
          onOpenChange={(open) => !open && setSelectedSpeaker(null)}
        />
      )}
      
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
              <SpeakerCard
                key={speaker.name}
                speaker={speaker}
                onClick={() => setSelectedSpeaker(speaker)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

