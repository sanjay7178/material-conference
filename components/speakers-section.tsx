import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Facebook } from "lucide-react"

interface Speaker {
  name: string
  role: string
  location: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    facebook?: string
  }
}

const speakers: Speaker[] = [
  {
    name: "Adrian Kajda",
    role: "Creator of Fuelio app",
    location: "Poland",
    bio: "Creator of Fuelio app. Fuelio was his hobby project started in 2012. Three years later the app was acquired by Sygic.",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  // Add more speakers...
]

export function SpeakersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <Card key={speaker.name}>
              <CardContent className="p-6 text-center">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold text-lg">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground">{speaker.location}</p>
                <p className="text-sm mt-2">{speaker.bio}</p>
                <div className="flex justify-center gap-2 mt-4">
                  {speaker.social.twitter && (
                    <a href={speaker.social.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.linkedin && (
                    <a href={speaker.social.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.facebook && (
                    <a href={speaker.social.facebook} className="text-muted-foreground hover:text-primary">
                      <Facebook className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

