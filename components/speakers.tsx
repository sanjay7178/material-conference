"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Twitter, Facebook, Linkedin, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import { Speaker, speakers } from "@/data/speakers"
import { SpeakerModal } from "./speakers/modal"

function SpeakerCard({ speaker, onClick }: { speaker: Speaker; onClick: () => void }) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="p-6 text-center">
          <div className="mb-4">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-32 h-32 rounded-full mx-auto"
            />
          </div>
          <div className="mb-2">
            <img src="/gdg-logo.svg" alt="Null VJA" className="h-6 mx-auto" />
          </div>
          <h3 className="font-bold text-lg mb-1">{speaker.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{speaker.role}</p>
          <div className="flex justify-center gap-2">
            {speaker.social.linkedin && (
              <a 
                href={speaker.social.linkedin}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="h-4 w-4" />
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
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  return (
    <div className="mb-20">
      {selectedSpeaker && (
        <SpeakerModal 
          speaker={selectedSpeaker} 
          open={!!selectedSpeaker} 
          onOpenChange={(open) => !open && setSelectedSpeaker(null)}
        />
      )}
      
      <div className="flex justify-end mb-8">
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          FILTERS
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakers.map((speaker) => (
          <SpeakerCard 
            key={speaker.name} 
            speaker={speaker}
            onClick={() => setSelectedSpeaker(speaker)}
          />
        ))}
      </div>
    </div>
  )
}

