export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      experience: "Experience",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      role: "Full Stack Developer & Software Architect",
      heading: {
        part1: "Building",
        highlight: "Digital",
        part2: "Experiences with Impact.",
      },
      bio: "Computer Engineer with experience as a backend developer, specialized in FastAPI, React, and Next.js. Currently working as a junior developer at the Judicial Branch, focused on building efficient and scalable solutions. Passionate about AI and cybersecurity.",
      cta: "View My Work",
      stack: "Technical Stack",
      imageCaption: "Human-Centric Approach",
      imageSubCaption: "Architecture designed for people",
    },
    about: {
      heading: {
        part1: "The",
        highlight: "Philosophy",
        part2: "behind the code",
      },
      paragraphs: [
        "Technology is a tool for connection. I believe that every line of code should serve a purpose: making digital environments more intuitive, accessible, and reliable for the people who use them.",
        "With a focus on empathy-driven development, I prioritize clean architecture not just for technical excellence, but to ensure long-term scalability and ease of use for fellow developers and end-users alike.",
      ],
      yearsLabel: "Years Experience",
      projectsLabel: "Projects Delivered",
      skills: [
        "Building modern, responsive interfaces with performance in mind.",
        "Developing robust backend systems and efficient API architectures.",
        "High-performance APIs and scalable web services in production.",
        "Integration of AI models and security practices in web applications.",
      ],
    },
    projects: {
      sectionHeading: "Selected",
      sectionHighlight: "Experience",
      sectionSubtitle:
        "A showcase of digital products where technical excellence meets purposeful design.",
      portfolioLabel: "Portfolio [2026]",
      caseStudy: "Case Study",
      descriptions: [
        'Personal finance management app built with clean architecture. Automates the calculation of "Free Balance" by prioritizing savings goals and fixed temporary expenses.',
        "Real-time multiplayer drawing game with private rooms, integrated chat, and word detection via WebSockets.",
        "Micro-SaaS that automates the creation of technical documentation. Paste your repository URL and get a ready-to-copy Markdown file.",
      ],
    },
    contact: {
      heading1: "Let's build something",
      headingHighlight: "together.",
      subtitle:
        "I'm currently looking for new opportunities to work on ambitious projects and deliver scalable solutions. I'd love to hear about your goals.",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      messageLabel: "Message",
      namePlaceholder: "Jane Doe",
      emailPlaceholder: "jane@example.com",
      messagePlaceholder: "Tell me about your project...",
      sendButton: "Send Message",
      successTitle: "Message sent!",
      successBody: "Your mail client has opened. I'll get back to you soon.",
    },
    footer: {
      tagline: "Built for human connection.",
    },
  },

  es: {
    nav: {
      work: "Trabajo",
      about: "Sobre mí",
      experience: "Experiencia",
      contact: "Contacto",
      downloadCV: "Descargar CV",
    },
    hero: {
      role: "Desarrollador Full Stack y Arquitecto de Software",
      heading: {
        part1: "Construyendo",
        highlight: "Experiencias",
        part2: "Digitales con Impacto.",
      },
      bio: "Ingeniero en Computación con experiencia como desarrollador backend, especializado en tecnologías como FastAPI, React y Next.js. Actualmente me desempeño como programador junior en el Poder Judicial, enfocado en soluciones eficientes y escalables. Apasionado por la IA y la ciberseguridad.",
      cta: "Ver mi Trabajo",
      stack: "Stack Técnico",
      imageCaption: "Enfoque Centrado en el Usuario",
      imageSubCaption: "Arquitectura diseñada para las personas",
    },
    about: {
      heading: {
        part1: "La",
        highlight: "Filosofía",
        part2: "detrás del código",
      },
      paragraphs: [
        "La tecnología es una herramienta de conexión. Creo que cada línea de código debe tener un propósito: hacer los entornos digitales más intuitivos, accesibles y confiables para las personas que los usan.",
        "Con enfoque en el desarrollo empático, priorizo la arquitectura limpia no solo por excelencia técnica, sino para garantizar escalabilidad a largo plazo y facilidad de uso para desarrolladores y usuarios finales.",
      ],
      yearsLabel: "Años de Experiencia",
      projectsLabel: "Proyectos Entregados",
      skills: [
        "Construcción de interfaces modernas y responsivas con rendimiento en mente.",
        "Desarrollo de sistemas backend robustos y arquitecturas de API eficientes.",
        "APIs de alto rendimiento y servicios web escalables en producción.",
        "Integración de modelos de IA y prácticas de seguridad en aplicaciones web.",
      ],
    },
    projects: {
      sectionHeading: "Experiencia",
      sectionHighlight: "Seleccionada",
      sectionSubtitle:
        "Una muestra de productos digitales donde la excelencia técnica se une con el diseño propositivo.",
      portfolioLabel: "Portafolio [2026]",
      caseStudy: "Caso de Estudio",
      descriptions: [
        'Aplicación de gestión financiera personal construida con arquitectura limpia. Automatiza el cálculo de "Saldo Libre" priorizando metas de ahorro y gastos fijos temporales.',
        "Juego multijugador de dibujo en tiempo real con salas privadas, chat integrado y detección de palabras mediante websockets.",
        "Micro-SaaS que automatiza la creación de documentación técnica. El usuario pega la URL de su repositorio y la herramienta genera un archivo Markdown listo para usar.",
      ],
    },
    contact: {
      heading1: "Construyamos algo",
      headingHighlight: "juntos.",
      subtitle:
        "Actualmente busco nuevas oportunidades para participar en proyectos ambiciosos y aportar soluciones escalables. Me encantaría escuchar sobre tus metas.",
      nameLabel: "Nombre Completo",
      emailLabel: "Correo Electrónico",
      messageLabel: "Mensaje",
      namePlaceholder: "Juan Pérez",
      emailPlaceholder: "juan@ejemplo.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      sendButton: "Enviar Mensaje",
      successTitle: "¡Mensaje enviado!",
      successBody:
        "Tu cliente de correo se ha abierto. Me pondré en contacto contigo pronto.",
    },
    footer: {
      tagline: "Construido para la conexión humana.",
    },
  },
} as const;

type Stringify<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly string[]
      ? readonly string[]
      : Stringify<T[K]>;
};
export type Translations = Stringify<typeof translations.en>;
