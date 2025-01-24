import { Speakers } from "../../components/speakers/speakers"
import { PreviousSpeakers } from "../../components/speakers/previous-speakers"

export default function SpeakersPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Speakers</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Hear from the Googlers, Partners, and Guest Speakers who are building the future of cloud. Check back often
            as we add more speakers, including our customers and partners.
          </p>
        </div>
        <Speakers />
        <PreviousSpeakers />
      </div>
    </div>
  )
}

