import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">About</h2>
        <div className="max-w-3xl space-y-6">
          <p className="text-lg text-muted-foreground">
            GDG DevFest Ukraine brings together the world class experts in Android, Web and Cloud technologies to Lviv
            for 2 days of sessions, workshops and showcases.
          </p>
          <p className="text-lg text-muted-foreground">
            Described by many as 'Google I/O of Ukraine', our team creates DevFest to be the best place for experience
            sharing in a phenomenal atmosphere.
          </p>
          <Button variant="link" className="text-purple-600 hover:text-purple-700 p-0 h-auto font-semibold">
            EXPLORE FEATURED SESSION
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

