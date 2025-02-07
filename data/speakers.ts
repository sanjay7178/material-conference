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
    role: "Software Engineering Manager - Amazon",
    location: "Physical",
    bio: "• A result-driven Software Development Manager with over 18 years of IT industry experience.\n• Expertise in designing and building highly available and scalable cloud based micro-services.\n• Experienced in leading teams in AWS AI space building Demand Forecasting, Observability capabilities and GenAI (LLM) based features.\n• Experienced in partnering with Product, Science and UX teams to build innovative AI solutions to solve customer problems.",
    image: "/placeholder.svg",
    companyLogo: "/speakers/company/amazon.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/jainpunit/",
    },
  }
]
