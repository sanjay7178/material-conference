import { TeamIntro } from "@/components/team/team-intro"
import { TeamSection } from "@/components/team/team-section"

// This would typically come from a CMS or API
const coreTeam = [
  {
    name: "Diana Pinchuk",
    role: "Social",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
    },
  },
  {
    name: "Marta Maxymiak",
    role: "Party and happiness",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
    },
  },
  {
    name: "Oleh Zasadnyy",
    role: "Website and sponsors",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Ostap Andrusiv",
    role: "Sponsors",
    image: "/placeholder.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Sofiya Huts",
    role: "Social media",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Vasylyna Mytsak",
    role: "Party and happiness",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
    },
  },
]

const programCommittee = [
  {
    name: "Dmytro Danylyk",
    role: "Android Stream",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Ihor Dvoretskyi",
    role: "Cloud stream",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
    },
  },
]

export default function TeamPage() {
  return (
    // <div className="relative min-h-screen flex items-center justify-center">
    //   <div className="container py-20">
    //     <h1 className="text-4xl font-bold mb-20">Team</h1>
    //     <TeamIntro />
    //     <TeamSection title="Core Team" members={coreTeam} />
    //     <TeamSection title="Program Committee" members={programCommittee} />
    //   </div>
    // </div>
        <div className="relative ">
          <div className="relative h-[60vh] bg-[url('/team.jpeg')] bg-cover bg-center  flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative container h-full flex items-center">
              <div className="max-w-3xl text-white">
                <h1 className="text-5xl font-bold mb-6">Team</h1>
                <p className="text-xl text-gray-200 mb-12">
                  Meet our dedicated team of volunteers who work tirelessly to bring you an exceptional conference experience. From organizing talks to managing social media, each member contributes their unique skills to make this event possible.
                </p>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-2 md:px-2 py-16 max-w-11xl">
            <div className="space-y-20">
            <TeamIntro />
         <TeamSection title="Core Team" members={coreTeam} />
         <TeamSection title="Program Committee" members={programCommittee} />
            </div>
          </div>
        </div>
  )
}

