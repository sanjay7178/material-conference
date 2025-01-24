import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

interface TeamMemberProps {
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

export function TeamMember({ name, role, image, social }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-6">
        <div className="w-48 h-48 rounded-full overflow-hidden mb-4 transition-transform group-hover:scale-105">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-muted-foreground mb-4">{role}</p>
      <div className="flex gap-3">
        {social.facebook && (
          <a
            href={social.facebook}
            className="text-gray-400 hover:text-purple-600 transition-colors"
            aria-label={`${name}'s Facebook`}
          >
            <Facebook className="w-5 h-5" />
          </a>
        )}
        {social.twitter && (
          <a
            href={social.twitter}
            className="text-gray-400 hover:text-purple-600 transition-colors"
            aria-label={`${name}'s Twitter`}
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
        {social.linkedin && (
          <a
            href={social.linkedin}
            className="text-gray-400 hover:text-purple-600 transition-colors"
            aria-label={`${name}'s LinkedIn`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {social.email && (
          <a
            href={social.email}
            className="text-gray-400 hover:text-purple-600 transition-colors"
            aria-label={`Email ${name}`}
          >
            <Mail className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  )
}

