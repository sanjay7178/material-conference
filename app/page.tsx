import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SpeakersSection } from "@/components/speakers-section"
import { ScheduleSection } from "@/components/schedule-section"
import { VideosSection } from "@/components/videos-section"
import { NewsSection } from "@/components/news-section"
import { SponsorsSection } from "@/components/sponsors-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <VideosSection />
      <NewsSection />
      <SponsorsSection />
    </div>
  )
}

