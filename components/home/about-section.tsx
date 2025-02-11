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
    <Card className="bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800/50 border-none shadow-sm rounded-xl overflow-hidden">
      <CardContent className="p-6 text-center">
        <div className="mb-6 relative">
          <Skeleton className="w-32 h-32 rounded-full mx-auto" />
          <Skeleton className="h-6 w-16 mx-auto mt-4" />
        </div>
        <Skeleton className="h-6 w-32 mx-auto mb-2" />
        <Skeleton className="h-4 w-48 mx-auto mb-3" />
        <Skeleton className="h-4 w-24 mx-auto mb-4" />
        <div className="flex justify-center gap-3 pt-2">
          <Skeleton className="h-5 w-5 rounded-full" />
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

              <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-4 mb-6">
                <p className="text-sm md:text-base text-purple-800 dark:text-purple-200">
                  🎁 <span className="font-semibold">Special Benefit:</span> All participants will receive free API keys for development, including access to popular LLM models for hands-on practice during and after the bootcamp.
                </p>
              </div>

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
                  className="group bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800/50 border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden cursor-pointer active:scale-95"
                  onClick={() => setSelectedSpeaker(speaker)}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="mb-5 sm:mb-6 relative">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto relative">
                        <div className="absolute inset-0 bg-purple-200 dark:bg-purple-900/20 rounded-full transform -rotate-6 transition-transform group-hover:rotate-6"></div>
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md relative z-10 transition-transform group-hover:scale-105"
                        />
                      </div>
                      <img
                        src="/gdg-logo.svg"
                        alt=""
                        className="h-5 sm:h-6 mx-auto mt-3 opacity-80"
                      />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 text-gray-800 dark:text-gray-100 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      {speaker.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {speaker.role}
                    </p>
                    <span className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium mb-4 block">
                      Topic: {speaker.topic}
                    </span>
                    <div className="flex justify-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                      {speaker.social.linkedin && (
                        <a
                          href={speaker.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="h-4 sm:h-5 w-4 sm:w-5" />
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
