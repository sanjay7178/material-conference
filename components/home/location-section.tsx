import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function LocationSection() {
  return (
    <section className="relative min-h-screen py-10 flex items-center justify-center bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/placeholder.svg" alt="GDG Team" className="rounded-lg" />
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Organizer</h2>
              <p className="text-muted-foreground mb-4">
                GDG Lviv with support of 10 GDGs from all around Ukraine is proud organizer of DevFest Ukraine
              </p>
              <Button variant="link" className="text-purple-600 p-0 h-auto font-semibold">
                OPEN TEAM PAGE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">What is a GDG?</h2>
              <p className="text-muted-foreground mb-4">
                A Google Developer Group is a community of volunteers who create exciting projects and share experiences
                about Google technologies.
              </p>
              <Button variant="link" className="text-purple-600 p-0 h-auto font-semibold">
                READ MORE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">What is DevFest?</h2>
              <p className="text-muted-foreground mb-4">
                DevFests are community-led developer events hosted by Google Developer Groups around the globe.
              </p>
              <Button variant="link" className="text-purple-600 p-0 h-auto font-semibold">
                READ MORE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[...Array(10)].map((_, i) => (
              <img
                key={i}
                src={i % 2 === 0 ? "/google-logo.svg" : "/gdg-logo.svg"}
                alt={i % 2 === 0 ? "Google" : "GDG"}
                className="h-8 opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="link" className="text-purple-600 font-semibold">
              BECOME A PARTNER
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

