export interface Speaker {
  name: string
  role: string
  location: string
  bio: string
  image: string
  companyLogo: string
  topic : string
  social: {
    twitter?: string
    facebook?: string
    linkedin?: string
  }
}

export const speakers: Speaker[] = [
  {
    name: "Punit Kumar Jain",
    role: "Senior FSI Solutions Architect, AWS",
    location: "Physical",
    bio: `
    Punit Jain is a FSI Solutions Architect at AWS working with large scale digital-native businesses. He is passionate about technology, helping customers architect and 
    build innovative, secure, resilient and efficient solutions for complex business problems. 
    He is also known as a regional security expert for his contributions to improving the security posture of many AWS customers. Additionally, Punit has deep expertise in Generative AI (GenAI) and is dedicated to enhancing developer productivity through GenAI-driven solutions.
    `,
    image: "/speakers/punitjain-3.jpeg",
    topic : `
     1. Introduction to AWS 2.Build and scale genAI on AWS ,  \n
     3.LLM security on AWS \n
     4.Qna  \n
     5.Hands on
    ` ,
    companyLogo: "/speakers/company/amazon.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/punitjain/",
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
    topic :" Evolution gpt model , Bert and custom Bert implementation (LLM)",
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
    topic  : "Building Smarter Chatbots: LangChain, LangGraph & RAG in Action",
    image: "/speakers/jai-ganesh-s.jpeg",
    companyLogo: "/speakers/company/valeo.svg",
    social: {
      linkedin: "https://www.linkedin.com/in/jai-ganesh-suresh-24b64282/",
    },
  },
  {
    name: "Geet Hirawat",
    role: "Cloud Security Engineer - we45",
    location: "Physical",
    bio: `
  Geet Hirawat is a seasoned Cloud Security Engineer with expertise in securing multi-cloud architectures across AWS and Azure. 
  His work focuses on building resilient cloud security frameworks through comprehensive security audits, threat modeling, and DevSecOps implementation. His expertise includes developing cloud-specific incident response playbooks, 
  securing CI/CD pipelines, and automating cloud security workflows for enhanced resilience.  His approach combines hands-on technical expertise with a focus on building scalable, secure cloud architectures that meet complex compliance requirements.
    `,
    image: "/speakers/geeth.jpeg",
    companyLogo: "we45",
    topic : "Securing the AI Assembly Line: MLOps Edition",
    social: {
      linkedin: "https://www.linkedin.com/in/geethirawat/",
    },
  }

]
