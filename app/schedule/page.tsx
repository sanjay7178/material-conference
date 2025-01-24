import { Schedule } from "@/components/schedule/schedule"

export default function SchedulePage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl font-bold mb-4">Schedule</h1>
          <p className="text-lg text-muted-foreground">
            Explore our two-day schedule packed with inspiring talks, workshops, and networking opportunities.
          </p>
        </div>
        <Schedule />
      </div>
    </div>
  )
}

