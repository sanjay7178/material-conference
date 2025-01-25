import { Speakers } from "@/components/speakers/speakers"
import { PreviousSpeakers } from "@/components/speakers/previous-speakers"

export default function SpeakersPage() {
  return (
    <div className="relative">
      <div className="relative h-[40vh] md:h-[60vh] bg-[url('/Security-Conferences-Hit-Las-Vegas.jpg.webp')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Speakers</h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-12">
              Hear from the Googlers, Partners, and Guest Speakers who are building the future of cloud. Check back often
              as we add more speakers, including our customers and partners.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="space-y-12 md:space-y-20">
          <Speakers />
          <PreviousSpeakers />
        </div>
      </div>
    </div>
  )
}

