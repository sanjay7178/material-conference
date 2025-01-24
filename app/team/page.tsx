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
    <div className="min-h-screen">
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-20">Team</h1>
        <TeamIntro />
        <TeamSection title="Core Team" members={coreTeam} />
        <TeamSection title="Program Committee" members={programCommittee} />
      </div>
    </div>
  )
}

