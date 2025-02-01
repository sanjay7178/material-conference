"use client";
import { Linkedin, Mail } from "lucide-react";
import { TeamMember } from "./team-member";

interface TeamMemberType {
  name: string;
  role: string;
  image: string;
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

interface TeamSectionProps {
  title: string;
  members: TeamMemberType[];
}

export function TeamSection({
  title,
  members,
}: {
  title: string;
  members: any[];
}) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {members.map((member) => (
          <div key={member.name} className="text-center space-y-3">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto"
            />
            <div>
              <h3 className="font-semibold text-lg md:text-xl">
                {member.name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground mb-4">{member.department}</p>

            </div>
            <div className="flex justify-center gap-3">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                  aria-label={`${name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.social.email && (
                <a
                  href={member.social.email}
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                  aria-label={`Email ${name}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
