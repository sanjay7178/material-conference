import { Committee } from "./committe"

export default function TeamPage() {
  return (
    <div>
      <div className="relative h-[40vh] md:h-[50vh] bg-purple-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container px-4 md:px-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-6">
            Organizing Committee
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">
            Meet the team behind the workshop
          </p>
        </div>
      </div>
      <div className="px-4 md:px-6 py-8 md:py-12">
        <Committee />
      </div>
    </div>
  )
}