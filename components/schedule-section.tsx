import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface ScheduleItem {
  time: string
  title: string
  description: string
  duration: string
  language?: string
}

const schedule: Record<string, ScheduleItem[]> = {
  day1: [
    {
      time: "09:00",
      title: "Registration & morning Coffee",
      description: "Get your badge, coffee, enjoy talking with tech edicts around.",
      duration: "1 hour",
    },
    {
      time: "10:00",
      title: "GDG DevFest Ukraine 2024 Opening",
      description: "Official start of the conference. Greetings from the organizers, sponsors and partners.",
      duration: "15 mins",
      language: "EN",
    },
    // Add more schedule items...
  ],
  day2: [
    // Add day 2 schedule...
  ],
}

export function ScheduleSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Schedule</h2>
        <Tabs defaultValue="day1">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
          </TabsList>
          {Object.entries(schedule).map(([day, items]) => (
            <TabsContent key={day} value={day}>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-24 flex-shrink-0">
                          <div className="text-2xl font-bold">{item.time}</div>
                          <div className="text-sm text-muted-foreground">{item.duration}</div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg flex items-center gap-2">
                            {item.title}
                            {item.language && (
                              <span className="text-xs bg-muted px-2 py-1 rounded">{item.language}</span>
                            )}
                          </h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

