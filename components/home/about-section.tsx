"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Facebook, Twitter, LinkIcon } from "lucide-react";
import { useState, useEffect } from "react";
import NewsContainer from "../NewsContainer";
import { SpeakerModal } from "../speakers/modal"
import { Speaker, speakers } from "@/data/speakers"
import { Linkedin } from "lucide-react"

const stats = [
  { number: "180+", label: "Attendees" },
  { number: "2", label: "Days" },
  { number: "4+", label: "Sessions" },
  { number: "6", label: "Tracks" },
];

function SpeakerSkeleton() {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardContent className="p-0 text-center">
        <div className="mb-3 md:mb-4 relative">
          <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto" />
          <Skeleton className="h-5 md:h-6 w-16 mx-auto mt-3" />
        </div>
        <Skeleton className="h-5 w-32 mx-auto mb-1 md:mb-2" />
        <Skeleton className="h-4 w-48 mx-auto mb-3 md:mb-4" />
        <div className="flex justify-center gap-3">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>
      </CardContent>
    </Card>
  )
}

export function AboutSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-10 md:py-20">
      <div className="container px-4 md:px-6">
        {selectedSpeaker && (
          <SpeakerModal 
            speaker={selectedSpeaker} 
            open={!!selectedSpeaker} 
            onOpenChange={(open) => !open && setSelectedSpeaker(null)}
          />
        )}

        {/* Two-column layout for Overview and News */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Overview Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 pt-10 md:pt-20">Overview</h2>
            <div className="mb-10 md:mb-16">
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                The LLM Security Bootcamp aims to provide a comprehensive
                understanding of security principles and best practices specific to
                Large Language Models (LLMs). The bootcamp will include hands-on
                sessions, and practical exercises. The target audience is students
                from various engineering disciplines with an interest in Artificial
                Intelligence and cybersecurity.
              </p>

              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Objective</h3>
              <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-muted-foreground space-y-2">
                <li>To educate students on security aspects of Large Language Models (LLMs)</li>
                <li>To provide exposure to real-world applications of LLMs in cybersecurity</li>
                <li>To bridge the gap between theoretical knowledge and industry practices in LLM security</li>
              </ul>
            </div>
          </div>

          {/* News Column */}
          <div className="lg:pt-[5.5rem]">
            <NewsContainer />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-3 md:p-4">
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Speakers Section */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {isLoading ? (
            <>
              {[...Array(4)].map((_, index) => (
                <SpeakerSkeleton key={index} />
              ))}
            </>
          ) : (
            <>
              {speakers.map((speaker) => (
                <Card
                  key={speaker.name}
                  className="bg-transparent border-none shadow-none cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedSpeaker(speaker)}
                >
                  <CardContent className="p-2 text-center">
                    <div className="mb-3 md:mb-6 relative">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto"
                      />
                      <img
                        src="/gdg-logo.svg"
                        alt=""
                        className="h-5 md:h-6 mx-auto mt-3"
                      />
                    </div>
                    <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{speaker.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 px-2">
                      {speaker.role}
                    </p>
                    <div className="flex justify-center gap-3">
                      {speaker.social.linkedin && (
                        <a
                          href={speaker.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-purple-600"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
