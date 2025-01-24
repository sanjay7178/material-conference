import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, LinkIcon } from "lucide-react"

const stats = [
  { number: "900", label: "Attendees" },
  { number: "2", label: "Days" },
  { number: "50", label: "Sessions" },
  { number: "4", label: "Tracks" },
]

const speakers = [
  {
    name: "Adrian Kajda",
    role: "Creator of Fuelio app. Fuelio blah blah, Poland",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "David Vávra",
    role: "Prague, Czech Republic",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Mateusz Herych",
    role: "Krakow, Poland",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Gerard Sans",
    role: "London, United Kingdom",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
    },
  },
]

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">About</h2>

        <div className="max-w-3xl mb-16">
          <p className="text-lg text-muted-foreground mb-6">
            GDG DevFest Ukraine brings together the world class experts in Android, Web and Cloud technologies to Lviv
            for 2 days of sessions, workshops and showcases.
          </p>
          <Button variant="link" className="text-purple-600 p-0 h-auto font-semibold">
            EXPLORE FEATURED SESSION
          </Button>

          <p className="text-lg text-muted-foreground mt-8 mb-6">
            Described by many as 'Google I/O of Ukraine', our team creates DevFest to be the best place for experience
            sharing in a phenomenal atmosphere.
          </p>
          <Button variant="link" className="text-purple-600 p-0 h-auto font-semibold">
            SEE HOW IT WAS IN 2016
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-12">Speakers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.name} className="bg-transparent border-none shadow-none">
              <CardContent className="p-0 text-center">
                <div className="mb-4 relative">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto"
                  />
                  <img src="/gdg-logo.svg" alt="GDG Lviv" className="h-6 mx-auto mt-4" />
                </div>
                <h3 className="font-bold text-lg mb-2">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{speaker.role}</p>
                <div className="flex justify-center gap-2">
                  {speaker.social.facebook && (
                    <a href={speaker.social.facebook} className="text-muted-foreground hover:text-purple-600">
                      <Facebook className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.twitter && (
                    <a href={speaker.social.twitter} className="text-muted-foreground hover:text-purple-600">
                      <Twitter className="h-4 w-4" />
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

