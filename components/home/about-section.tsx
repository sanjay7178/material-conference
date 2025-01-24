import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, LinkIcon } from "lucide-react";

const stats = [
  { number: "180+", label: "Attendees" },
  { number: "2", label: "Days" },
  { number: "4+", label: "Sessions" },
  { number: "6", label: "Tracks" },
];

const speakers = [
  {
    name: "Speaker 1",
    role: "AI Safety Researcher at OpenAI, LLM Security Specialist",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Speaker 2",
    role: "MLOps Lead at Google AI, Security Architecture Expert",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Speaker 3",
    role: "Principal AI Security Engineer at Microsoft",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Speaker 4",
    role: "Head of LLM Security Research at DeepMind",
    image: "/placeholder.svg",
    social: {
      facebook: "#",
      twitter: "#",
    },
  },
];

export function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pb-20 ">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 pt-20 ">Overview</h2>

        <div className="max-w-3xl mb-16 pb-10">
          <p className="text-lg text-muted-foreground mb-6">
            The LLM Security Bootcamp aims to provide a comprehensive
            understanding of security principles and best practices specific to
            Large Language Models (LLMs). The bootcamp will include hands-on
            sessions, and practical exercises. The target audience is students
            from various engineering disciplines with an interest in Artificial
            Intelligence and cybersecurity.
          </p>

            <h3 className="font-semibold mb-4">Objective</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground">
            <li>To educate students on security aspects of Large Language Models (LLMs)</li>
            <li>To provide exposure to real-world applications of LLMs in cybersecurity</li>
            <li>To bridge the gap between theoretical knowledge and industry practices in LLM security</li>
            </ul>

          {/* <Button
            variant="link"
            className="text-purple-600 p-0 h-auto font-semibold"
          >
            EXPLORE FEATURED SESSION
          </Button>

          <p className="text-lg text-muted-foreground mt-8 mb-6">
            Described by many as 'Google I/O of Ukraine', our team creates
            DevFest to be the best place for experience sharing in a phenomenal
            atmosphere.
          </p>
          <Button
            variant="link"
            className="text-purple-600 p-0 h-auto font-semibold"
          >
            SEE HOW IT WAS IN 2016
          </Button> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-12">Speakers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <Card
              key={speaker.name}
              className="bg-transparent border-none shadow-none"
            >
              <CardContent className="p-0 text-center">
                <div className="mb-4 relative">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto"
                  />
                  <img
                    src="/gdg-logo.svg"
                    alt="GDG Lviv"
                    className="h-6 mx-auto mt-4"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {speaker.role}
                </p>
                <div className="flex justify-center gap-2">
                  {speaker.social.facebook && (
                    <a
                      href={speaker.social.facebook}
                      className="text-muted-foreground hover:text-purple-600"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.twitter && (
                    <a
                      href={speaker.social.twitter}
                      className="text-muted-foreground hover:text-purple-600"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
