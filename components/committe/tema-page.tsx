import { Committee } from "./committe"

export default function TeamPage() {
  return (
    <div>
      <div className="relative h-[40vh] bg-purple-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container">
          <h1 className="text-5xl font-bold text-white mb-6">Organizing Committee</h1>
          <p className="text-xl text-gray-200">
            Meet the team behind the conference
          </p>
        </div>
      </div>
      <Committee />
    </div>
  )
}