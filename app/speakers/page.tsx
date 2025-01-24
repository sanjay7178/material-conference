import { Speakers } from "@/components/speakers/speakers"
import { PreviousSpeakers } from "@/components/speakers/previous-speakers"

export default function SpeakersPage() {
  return (
    <div className="relative ">
      <div className="relative h-[60vh] bg-[url('/speakers-hero.jpg')] bg-cover bg-center  flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Speakers</h1>
            <p className="text-xl text-gray-200 mb-12">
              Hear from the Googlers, Partners, and Guest Speakers who are building the future of cloud. Check back often
              as we add more speakers, including our customers and partners.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-2 md:px-2 py-16 max-w-11xl">
        <div className="space-y-20">
          <Speakers />
          <PreviousSpeakers />
        </div>
      </div>
    </div>
  )
}

