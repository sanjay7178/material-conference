import { Hero } from "@/components/hero"
import { AboutSection } from "../components/home/about-section"
import { TicketsSection } from "../components/home/tickets-section"
import { HighlightsSection } from "../components/home/highlights-section"
import { FeaturedVideos } from "../components/home/featured-videos"
import { LocationSection } from "../components/home/location-section"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      {/* <TicketsSection /> */}
      {/* <HighlightsSection /> */}
      {/* <FeaturedVideos /> */}
      <LocationSection />
    </main>
  )
}

