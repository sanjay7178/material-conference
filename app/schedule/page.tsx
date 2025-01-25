import { Schedule } from "@/components/schedule/schedule"

export default function SchedulePage() {
  return (
    <div className="relative">
      <div className="relative h-[40vh] md:h-[60vh] bg-[url('/schedule.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Schedule</h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-12">
              Explore our two-day schedule packed with inspiring talks, workshops, and networking opportunities.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="space-y-8 md:space-y-20">
          <Schedule />
        </div>
      </div>
    </div>
  )
}

