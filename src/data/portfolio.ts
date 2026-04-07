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
    projects: "15+",
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
      title: "CashBlueprint",
      description:
        'Aplicación de gestión financiera personal construida con arquitectura limpia. Automatiza el cálculo de "Saldo Libre" priorizando metas de ahorro y gastos fijos temporales.',
      tags: ["#React", "#FastAPI"],
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuADpF54vGqQ1FQwuDEBTbYwUAQ7j4iS29tziw_Kk7HLonnwjVX5GEBhTC-fZbrmq8p-iqPgRvTeoL_Uv2bB83sJgZePDi8DbG4MG3u1m55FKP27aPZ2ziRQm8ws9-fsfzHB1AKo1NqDuSrovH3vM40NAxZRHGW1iTycbrQo7sqXoOBkX5c-KwDgCa-ggSv1uYt87C1Q4XQGoEfpTWfvNke5wa9MtriUHl_3kCplJSYo-VgR6XLOS620sc3ZkmR_shuZd550Xb4GVYA",
      imageAlt: "CashBlueprint App",
      caseStudyUrl: "#",
      githubUrl: "https://github.com/",
      liveUrl: "#",
    },
    {
      title: "Pictionary Online",
      description:
        "Juego multijugador de dibujo en tiempo real con salas privadas, chat integrado y detección de palabras mediante websockets.",
      tags: ["#Next.js", "#WebSockets"],
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAom1PTd7snl-FCHWqtMLaebzTjiMhYU3zoPP-YlMOk6lI_2I46YjxDvg7IXdDgiELd9tLGot5G2PCjtCE0xN6u60_G0e8L4haHCTESszHUTty13jJYaotcfqfh6XBYcqZ9mhxam7X61U73IRFwfoSONkfDfA8zfMQQJaT4DDpD3z8C1p7tFf4CtQUi-_UfiPBnnhbP3zs5v5YeEcp2C3nm3fTanVq0C7wRJIUUR0bsEgjfr1dwOoerNhE_KXIWiSUyW8J90ZQEh3A",
      imageAlt: "Pictionary Online",
      caseStudyUrl: "#",
      githubUrl: "https://github.com/",
      liveUrl: "#",
    },
    {
      title: "OpenDocs-AI",
      description:
        "Micro-SaaS que automatiza la creación de documentación técnica. El usuario pega la URL de su repositorio y la herramienta genera un archivo Markdown listo para usar.",
      tags: ["#Python", "#AI"],
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCJRqn-aXC8Y5lXtT_dMrpdofhpE8I_ka4Nsr-eNa-slP_AA-FcU2-uezC68m3n4xgJ2uaRvdsvQPQx69emu0SavAjjGZP_nylHBR8ucer2fSJwFNO24_EH7REihpU4r-gQP9T9qcvylLs4WY_AIvc39sGkDKIM8ouwm4dmrVqpj7iCiV50P0w8Al8IN5Emt4WvnS0QwRPzQzHSJAQ1sdgsuqI2ZYqsOjyP1ojZaCwSkqtMf8q5v5DG58foVKoRk_6niNTh48Dih4k",
      imageAlt: "OpenDocs-AI",
      caseStudyUrl: "#",
      githubUrl: "https://github.com/",
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
    github: "https://github.com/",
    dribbble: "#",
    newsletter: "#",
  },
  email: "jesus@example.com",
};
