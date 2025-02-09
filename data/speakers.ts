export interface Speaker {
  name: string
  role: string
  location: string
  bio: string
  image: string
  companyLogo: string
  social: {
    twitter?: string
    facebook?: string
    linkedin?: string
  }
}

export const speakers: Speaker[] = [
  {
    name: "Punit Jain",
    role: "Senior FSI Solutions Architect, AWS",
    location: "Physical",
    bio: "• A result-driven Software Development Manager with over 18 years of IT industry experience.\n• Expertise in designing and building highly available and scalable cloud based micro-services.\n• Experienced in leading teams in AWS AI space building Demand Forecasting, Observability capabilities and GenAI (LLM) based features.\n• Experienced in partnering with Product, Science and UX teams to build innovative AI solutions to solve customer problems.",
    image: "/speakers/punitjain-2.jpeg",
    companyLogo: "/speakers/company/amazon.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/jainpunit/",
    },
  },
  {
    name: "Deepan Raj",
    role: "Technical Manager - HCL Tech",
    location: "Physical",
    bio: "",
    image: "/speakers/deepan-raj.jpeg",
    companyLogo: "/speakers/company/hcl1.jpg",
    social: {
      linkedin: "#",
    },
  },
  {
    name: "Jai Ganesh S",
    role: "Senior AI Architect Lead - Valeo",
    location: "Physical",
    bio: "",
    image: "/speakers/jai-ganesh-s.jpeg",
    companyLogo: "/speakers/company/valeo.svg",
    social: {
      linkedin: "#",
    },
  }
]
