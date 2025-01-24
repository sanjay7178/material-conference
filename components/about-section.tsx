import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">About</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              GDG DevFest Ukraine brings together the world class experts in Android, Web and Cloud technologies to Lviv
              for 2 days of sessions, workshops and showcases.
            </p>
            <Button variant="outline" className="mt-4">
              EXPLORE FEATURED SESSION
            </Button>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Described by many as 'Google I/O of Ukraine', our team creates DevFest to be the best place for experience
              sharing in a phenomenal atmosphere.
            </p>
            <Button variant="outline" className="mt-4">
              SEE HOW IT WAS IN 2023
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2">900</h3>
            <p className="text-muted-foreground">Attendees</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2">2</h3>
            <p className="text-muted-foreground">Days</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2">50</h3>
            <p className="text-muted-foreground">Sessions</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2">4</h3>
            <p className="text-muted-foreground">Tracks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

