"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, SlidersHorizontal } from "lucide-react"

interface CommitteeMember {
  name: string
  role: string
  department?: string
  image: string
  social: {
    linkedin?: string
    email?: string
  }
}

const convenors: CommitteeMember[] = [
  {
    name: "Dr. Hari Seetha",
    role: "Convenor",
    department: "School of Computer Science and Engineering",
    image: "/convenors/Dr_Hari_Seetha_SCOPE_0741_2b647e6904.avif",
    social: {
      linkedin: "#",
      email: "mailto:hari.seetha@vitap.ac.in"
    }
  },
  {
    name: "Dr. Sudhakar Ilango",
    role: "Convenor",
    department: "School of Computer Science and Engineering",
    image: "/convenors/Dr_Sudhakar_Ilango_70087_IMG_4727_SCOPE_68f8caba72.avif",
    social: {
      linkedin: "#",
      email: "mailto:sudhakar.ilango@vitap.ac.in"
    }
  }
]

const coordinators: CommitteeMember[] = [
  {
    name: "Dr. Sibi Chakkaravarthy S",
    role: "Coordinator",
    department: "School of Computer Science and Engineering",
    image: "coordinators/Dr_Sibi_Chakkaravarthy_S_70084_0587_206cccb3ec.avif",
    social: {
      linkedin: "#",
      email: "mailto:sibi.chakkaravarthy@vitap.ac.in"
    }
  },
  {
    name: "Dr. Ganesh Reddy Karri",
    role: "Coordinator",
    department: "School of Computer Science and Engineering", 
    image: "coordinators/Dr_Ganesh_Reddy_Karri_70140_IMG_4952_SCOPE_3e82aa165c.avif",
    social: {
      linkedin: "#",
      email: "mailto:ganeshreddy.karri@vitap.ac.in"
    }
  },
  {
    name: "Dr. Nandha Kumar",
    role: "Coordinator",
    department: "School of Computer Science and Engineering",
    image: "coordinators/Dr_R_Nandha_Kumar_IMG_6597_SCOPE_36b1aaa52e.avif",
    social: {
      linkedin: "#",
      email: "mailto:nandhakumar.p@vitap.ac.in"
    }
  },
  {
    name: "Dr. Priyanka S",
    role: "Coordinator",
    department: "School of Computer Science and Engineering",
    image: "coordinators/Dr_S_Priyanka_70416_IMG_2666_SENSE_f3561b6588.avif",
    social: {
      linkedin: "#",
      email: "mailto:priyanka.s@vitap.ac.in"
    }
  }
]

const investigators: CommitteeMember[] = [
  {
    name: "Dr. Chester Rebeiro",
    role: "Investigator",
    department: "Indian Institute of Technology Madras",
    image: "investigator/prof-chester.png",
    social: {
      linkedin: "#",
      email: "mailto:chester@iitm.ac.in"
    }
  }
]

export function Committee() {
  return (
    <div className="mb-20 py-10 flex items-center justify-center">
      <div className="container">
        {/* Filter Button */}
        {/* <div className="flex justify-end mb-8">
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            FILTERS
          </Button>
        </div> */}

        {/* Investigators Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold  mb-12">Princial Investigator</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investigators.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 text-center">
                    <div className="mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto"
                      />
                    </div>
                    <div className="mb-2">
                      <img src="/gdg-logo.svg" alt="" className="h-6 mx-auto" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.department}</p>
                    <div className="flex justify-center gap-2">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={member.social.email} className="text-muted-foreground hover:text-primary">
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Convenors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold  mb-12">Convenors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {convenors.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 text-center">
                    <div className="mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto"
                      />
                    </div>
                    <div className="mb-2">
                      <img src="/gdg-logo.svg" alt="" className="h-6 mx-auto" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.department}</p>
                    <div className="flex justify-center gap-2">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={member.social.email} className="text-muted-foreground hover:text-primary">
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coordinators Section */}
        <div>
          <h3 className="text-3xl font-bold  mb-12">Coordinators</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordinators.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 text-center">
                    <div className="mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto"
                      />
                    </div>
                    <div className="mb-2">
                      <img src="/gdg-logo.svg" alt="" className="h-6 mx-auto" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.department}</p>
                    <div className="flex justify-center gap-2">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={member.social.email} className="text-muted-foreground hover:text-primary">
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}