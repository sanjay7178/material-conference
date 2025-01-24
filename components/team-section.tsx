import { TeamMember } from "./team-member"

interface TeamMemberType {
  name: string
  role: string
  image: string
  social: {
    facebook?: string
    twitter?: string
    linkedin?: string
    email?: string
  }
}

interface TeamSectionProps {
  title: string
  members: TeamMemberType[]
}

export function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-12">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {members.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  )
}

