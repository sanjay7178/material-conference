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
    bio: `
    About Me
    I always believe in the words "Stay Hungry Stay Foolish" said by Steve Jobs.

    Innovation and Creativity is my strength. Whatever Job is given, I can Crack them just by "Keeping It Simple"
    
    More Info About Me

    > Github - https://github.com/deepanrajm
    > Youtube - https://www.youtube.com/DeepanTechspace
    `,
    image: "/speakers/deepan-raj.jpeg",
    companyLogo: "/speakers/company/hcl1.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/deepanrajm/",
    },
  },
  {
    name: "Jai Ganesh S",
    role: "Senior AI Architect Lead - Valeo",
    location: "Physical",
    bio: `
    Jai Ganesh Suresh, I've 8+ years of experience in my interested domains such as Python, Machine Learning and so. Updating our self always exhibit our potential and the interest towards the society. I used to belief myself and my own decision and want to be positive during the time of negative atmosphere.

    Expertise Domains :

    1. Artificial Intelligence
    2. Deep Learning & Machine Learning
    3. Computer Vision & Digital Image Processing
    4. Python programming
    5. Robotics & Arduino
    6. Freelance Technical Trainer
    7. Public motivational speaker
    8. Intermediate knowledge of LabVIEW

    `,
    image: "/speakers/jai-ganesh-s.jpeg",
    companyLogo: "/speakers/company/valeo.svg",
    social: {
      linkedin: "https://www.linkedin.com/in/jai-ganesh-suresh-24b64282/",
    },
  }
]
