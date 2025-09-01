// Datos del CV (editable). Mantiene la misma estructura del pack anterior.
export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  notes?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets?: string[];
}

export interface CertificateItem {
  title: string;
  date: string;
  description?: string;
}

export interface CourseItem {
  title: string;
  period?: string;
  description?: string;
}

export interface CvData {
  contact: ContactInfo;
  profile: string;
  competencias: string[];
  tecnologias: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  practices: ExperienceItem[];
  courses: CourseItem[];
  certificates: CertificateItem[];
  hobbies: string[];
}

export const cvData: CvData = {
  contact: {
    name: "Cristhian Javier Ulloa Carmona",
    email: "cristhiannica@gmail.com",
    phone: "+505 86293096",
    location: "Nicaragua/Leòn",
    linkedin: "https://www.linkedin.com/in/cristhianulloa78ba83275"
  },
  profile:
    "Apasionado por el desarrollo de software, con conocimientos sólidos en Java y experiencia trabajando en entornos remotos. Comprometido con la mejora continua y la aplicación de buenas prácticas de programación para aportar soluciones eficientes y de calidad.",
  competencias: [
    "Java",
    "Apps Android",
    "Programación orientada a objetos",
    "Desarrollo de software",
    "Microservicios",
    "Desarrollo Back-End",
    "Desarrollo Front-End",
    "SQL",
    "MySQL",
    "SQL Server",
    "Postgresql",
    "Java Persistence API (JPA)",
    "Spring Boot (Framework Java)"
  ],
  tecnologias: [
    "Jhipster (Framework Java)",
    "HTML",
    "Git / GitHub / Gitlab",
    "Docker",
    "Linux",
    "Windows",
    "OAuth",
    "Deep Learning",
    "React",
    "Tomcat",
    "PrimeFaces",
    "Hibernate/Eclipse Link",
    "Swagger",
    "AJAX"
  ],
  education: [
    {
      degree: "Ing. en Sistemas",
      institution: "Universidad Nacional Autónoma de Nicaragua",
      period: "feb 2019 - dic 2024",
      notes: "Solo cuento con carta de engresado"
    }
  ],
  experience: [
    {
      role: "Junior Java Developer",
      company: "Clicklease LLC",
      period: "ene 2025 - presente",
      location: "Remoto",
      bullets: []
    }
  ],
  practices: [
    {
      role: "Data Annotator",
      company: "DCM Consulting",
      period: "sep 2024 - dic 2024",
      location: "Remoto",
      bullets: []
    }
  ],
  courses: [
    {
      title: "Autodidacta",
      period: "ene 2017",
      description:
        "Una pasión por crear videojuegos me impulsó a aprender programación desde el tercer año de secundaria, lo que me llevó a adquirir conocimientos en librerías (frameworks) como LibGDX, así como en programación Android y Java."
    }
  ],
  certificates: [
    {
      title:
        "Certificado de participación en competencia del MINED, representando al departamento de León, en la categoría de desarrollo de aplicación Android",
      date: "dic 2018",
      description:
        "Este certificado se me dio por ganar a nivel escolar, luego a nivel municipal e ir a precentar al departamento de Leòn en la competencia Departamental."
    },
    {
      title:
        "Certificado de participación en competencia del MINED, representando al departamento de León, con el proyecto científico",
      date: "dic 2019",
      description:
        "Este certificado se me dio por ganar a nivel escolar, luego a nivel municipal e ir a precentar al departamento de Leòn en la competencia Departamental. Este año tambien lleve una app Android y llegue hasta managua"
    }
  ],
  hobbies: [
    "Programación",
    "Jugar Minecraft",
    "Desarrollar Add-ons para Minecraft",
    "Tecnología"
  ]
};
