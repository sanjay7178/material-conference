import { TeamIntro } from "@/components/team/team-intro"
import { TeamSection } from "@/components/team/team-section"
import { convenors , investigators , coordinators } from "@/components/committe/committe"
// This would typically come from a CMS or API
const coreTeam = [
  {
    name: "Sai Sanjay K",
    role: "Null Vijayawada Chapter Lead",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
    },
  },
  {
    name: "Jahin Justin", 
    role: "Null Vijayawada Chapter Lead",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
    },
  },
  {
    name: "Daniel T",
    role: "Null Vijayawada Chapter Lead",
    image: "/placeholder.svg", 
    social: {
      facebook: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Hari Krishna",
    role: "Null Vijayawada Chapter Member",
    image: "/placeholder.svg",
    social: {
      linkedin: "#", 
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Anurag G",
    role: "Null Vijayawada Chapter Member",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#", 
    },
  },
  // {
  //   name: "Member 6",
  //   role: "Party and happiness",
  //   image: "/placeholder.svg",
  //   social: {
  //     twitter: "#",
  //   },
  // },
]

const programCommittee = [
  {
    name: "Member 7",
    role: "Android Stream",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Member 8",
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
    <div className="relative">
      <div className="relative h-[40vh] md:h-[60vh] bg-[url('/team.jpeg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Team</h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-12">
              Meet our dedicated team of volunteers who work tirelessly to bring you an exceptional conference experience. From organizing talks to managing social media, each member contributes their unique skills to make this event possible.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="space-y-12 md:space-y-20">
          {/* <TeamIntro /> */}
          <TeamSection title="Investigator" members={investigators} />
          <TeamSection title="Convenors" members={convenors} />
          <TeamSection title="Coordinators" members={coordinators} />
          <TeamSection title="Null Vijayawada Community" members={coreTeam} />


        </div>
      </div>
    </div>
  )
}

