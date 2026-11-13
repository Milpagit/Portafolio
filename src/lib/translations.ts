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
        "Real-time drawing and guessing game for up to 8 players, with code-based rooms, a collaborative canvas, chat and dynamic scoring. FastAPI backend with WebSockets and Redis as shared state.",
        "Smart calendar (thesis project) to manage personal events, with user authentication and visibility of other users' events. React + Redux Toolkit frontend and a Node.js, Express and MongoDB backend.",
        "Micro-SaaS that automates technical documentation: paste your repository URL and get a ready-to-use Markdown file, powered by Google's generative AI. Built with Next.js and TypeScript.",
        "Multi-agent content agency: three agents (researcher, writer and editor) collaborate to write a blog article from a topic. Uses local LLMs, RAG with ChromaDB for writing style and SSE streaming. FastAPI + Next.js.",
        "Educational data mining tools for UAEH students: data preprocessing, K-means clustering and a regression model that predicts course approval.",
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
        "Juego de dibujo y adivinanzas en tiempo real para hasta 8 jugadores, con salas por código, canvas colaborativo, chat y puntuación dinámica. Backend en FastAPI con WebSockets y Redis como estado compartido.",
        "Calendario inteligente (proyecto de tesis) para gestionar eventos personales, con autenticación de usuarios y visualización de eventos de otros usuarios. Frontend en React con Redux Toolkit y backend en Node.js, Express y MongoDB.",
        "Micro-SaaS que automatiza la documentación técnica: pegas la URL de tu repositorio y obtienes un archivo Markdown listo para usar, apoyado en la IA generativa de Google. Construido con Next.js y TypeScript.",
        "Agencia de contenido con tres agentes (investigador, redactor y editor) que colaboran para escribir un artículo a partir de un tema. Usa LLMs locales, RAG con ChromaDB para el estilo de escritura y streaming SSE. FastAPI + Next.js.",
        "Herramientas de minería de datos educativos para estudiantes de la UAEH: preprocesamiento de datos, agrupación con K-means y un modelo de regresión que predice la aprobación.",
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
