import { Schedule } from "@/components/schedule/schedule"

export default function SchedulePage() {
  return (
    // <div className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b  to-white">
    //   <div className="container">
    //     <div className="max-w-2xl mb-12">
    //       <h1 className="text-4xl font-bold mb-4">Schedule</h1>
    //       <p className="text-lg text-muted-foreground">
    //         Explore our two-day schedule packed with inspiring talks, workshops, and networking opportunities.
    //       </p>
    //     </div>
    //     <Schedule />
    //   </div>
    // </div>
        <div className="relative ">
          <div className="relative h-[60vh] bg-[url('/speakers-hero.jpg')] bg-cover bg-center  flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative container h-full flex items-center">
              <div className="max-w-3xl text-white">
                <h1 className="text-5xl font-bold mb-6">Schedule</h1>
                <p className="text-xl text-gray-200 mb-12">
                Explore our two-day schedule packed with inspiring talks, workshops, and networking opportunities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-2 md:px-2 py-16 max-w-11xl">
            <div className="space-y-20">
              <Schedule />
            </div>
          </div>
        </div>
  )
}

