export interface Skill {
  name: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  barColor: string;
  barWidth: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  caseStudyUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const portfolioData = {
  name: "Jesus Milpa Lino",
  brand: "Portafolio profesional",
  role: "Full Stack Developer & Software Architect",
  heroHeading: {
    part1: "Building",
    highlight: "Digital",
    part2: "Experiences with Impact.",
  },
  bioParagraphs: [
    "Ingeniero en Computación con experiencia como desarrollador backend, especializado en tecnologías como FastAPI, React y Next.js.",
    "Actualmente me desempeño como programador junior en el Poder Judicial, donde enfoco mis habilidades en la creación de soluciones eficientes y escalables. Apasionado por la inteligencia artificial y la ciberseguridad, busco constantemente innovar a través de proyectos personales de alto impacto.",
  ],
  aboutPhilosophy: {
    heading: {
      part1: "The",
      highlight: "Philosophy",
      part2: "behind the code",
    },
    paragraphs: [
      "La tecnología es una herramienta de conexión. Creo que cada línea de código debe tener un propósito: hacer los entornos digitales más intuitivos, accesibles y confiables para las personas que los usan.",
      "Con enfoque en el desarrollo empático, priorizo la arquitectura limpia no solo por excelencia técnica, sino para garantizar escalabilidad a largo plazo y facilidad de uso para desarrolladores y usuarios finales.",
    ],
  },
  stats: {
    years: "2+",
    projects: "11+",
  },
  profileImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuATb4-SIglmWR8LliZTLlAloivvxCAg_Ts4BLVdX5aPPxCLk6JeQ9PTZdD6PiSOlJ9dPQmex-zQNNifW9Ls3hHjyzORQnBeDTqEEVvHcdzv8bhPXlPc_DCwWkuFpJTCEMdjvrgrOaKjityPYGQzXqRiRhe1EomHNJpXggg0WOL-d6Q9dXe-CvZgAI-gBH9w0iQq3qur-3nTX9y_M2Y-4QE5iMr8KViAEwW1-vtPwdniZKd5ZfPvLVgXvGTaHynSbSuHoMmfBeiHGog",
  skills: [
    {
      name: "React / Next.js",
      icon: "data_object",
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      barColor: "bg-primary",
      barWidth: "w-[95%]",
      description:
        "Construcción de interfaces modernas y responsivas con rendimiento en mente.",
    },
    {
      name: "Node.js / Python",
      icon: "terminal",
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10",
      barColor: "bg-secondary",
      barWidth: "w-[88%]",
      description:
        "Desarrollo de sistemas backend robustos y arquitecturas de API eficientes.",
    },
    {
      name: "FastAPI / .NET",
      icon: "bolt",
      iconColor: "text-tertiary",
      iconBg: "bg-tertiary/10",
      barColor: "bg-tertiary",
      barWidth: "w-[85%]",
      description:
        "APIs de alto rendimiento y servicios web escalables en producción.",
    },
    {
      name: "IA & Ciberseguridad",
      icon: "security",
      iconColor: "text-primary",
      iconBg: "bg-primary-dim/20",
      barColor: "bg-primary opacity-70",
      barWidth: "w-[75%]",
      description:
        "Integración de modelos de IA y prácticas de seguridad en aplicaciones web.",
    },
  ] as Skill[],
  projects: [
    {
      title: "Pictionary Online",
      description:
        "Juego de dibujo y adivinanzas en tiempo real para hasta 8 jugadores, con salas por código, canvas colaborativo, chat y puntuación dinámica. Backend en FastAPI con WebSockets y Redis como estado compartido.",
      tags: ["#FastAPI", "#WebSockets", "#Redis"],
      imageUrl: "/projects/pictionary.svg",
      imageAlt: "Pictionary Online",
      caseStudyUrl: "https://github.com/Milpagit/Pictionary-completo",
      githubUrl: "https://github.com/Milpagit/Pictionary-completo",
      liveUrl: "#",
    },
    {
      title: "Agenda Inteligente",
      description:
        "Calendario inteligente (proyecto de tesis) para gestionar eventos personales, con autenticación de usuarios y visualización de eventos de otros usuarios. Frontend en React con Redux Toolkit y backend en Node.js, Express y MongoDB.",
      tags: ["#React", "#Redux", "#Node.js"],
      imageUrl: "/projects/agenda.svg",
      imageAlt: "Agenda Inteligente",
      caseStudyUrl: "https://github.com/Milpagit/Agenda-Inteligente",
      githubUrl: "https://github.com/Milpagit/Agenda-Inteligente",
      liveUrl: "#",
    },
    {
      title: "OpenDocs-AI",
      description:
        "Micro-SaaS que automatiza la documentación técnica: pegas la URL de tu repositorio y obtienes un archivo Markdown listo para usar, apoyado en la IA generativa de Google. Construido con Next.js y TypeScript.",
      tags: ["#Next.js", "#TypeScript", "#AI"],
      imageUrl: "/projects/opendocs.svg",
      imageAlt: "OpenDocs-AI",
      caseStudyUrl: "https://github.com/Milpagit/OpenDocs-AI",
      githubUrl: "https://github.com/Milpagit/OpenDocs-AI",
      liveUrl: "#",
    },
    {
      title: "Blogger Multi-Agente",
      description:
        "Agencia de contenido con tres agentes (investigador, redactor y editor) que colaboran para escribir un artículo a partir de un tema. Usa LLMs locales, RAG con ChromaDB para el estilo de escritura y streaming SSE. FastAPI + Next.js.",
      tags: ["#FastAPI", "#LLM", "#RAG"],
      imageUrl: "/projects/blogger.svg",
      imageAlt: "Blogger Multi-Agente",
      caseStudyUrl: "https://github.com/Milpagit/Blogger",
      githubUrl: "https://github.com/Milpagit/Blogger",
      liveUrl: "#",
    },
    {
      title: "Agrupación UAEH",
      description:
        "Herramientas de minería de datos educativos para estudiantes de la UAEH: preprocesamiento de datos, agrupación con K-means y un modelo de regresión que predice la aprobación.",
      tags: ["#Python", "#Machine Learning"],
      imageUrl: "/projects/uaeh.svg",
      imageAlt: "Agrupación UAEH",
      caseStudyUrl: "https://github.com/Milpagit/Agrupacion-de-estudiantes-UAEH-kmeans",
      githubUrl: "https://github.com/Milpagit/Agrupacion-de-estudiantes-UAEH-kmeans",
      liveUrl: "#",
    },
  ] as Project[],
  navLinks: [
    { label: "Work", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],
  social: {
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/Milpagit",
    dribbble: "#",
    newsletter: "#",
  },
  email: "jesus@example.com",
};
