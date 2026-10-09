export const perfil = {
  nombreCompleto: "César Yair Toledo Villarreal",
  nombreParaMostrar: "César Yair",
  tituloProfesional: "Software Developer & UX/UI Designer",
  tituloAlternativo: "Desarrollador de Software y Diseñador UX/UI",
  ubicacion: "Chiapas, México",
  presentacionCorta:
    "Soy estudiante de Ingeniería en Tecnología e Innovación Digital, apasionado por crear aplicaciones web modernas, funcionales y centradas en la experiencia del usuario.",
  sobreMi:
    "Soy César Yair Toledo Villarreal, estudiante de Ingeniería en Tecnología e Innovación Digital en la Universidad Politécnica de Chiapas. Me interesa el desarrollo de software, especialmente la creación de aplicaciones web que combinan funcionalidad, diseño y una buena experiencia de usuario. He participado en proyectos académicos y colaborativos relacionados con restaurantes, gestión de información, salud mental y tecnología agrícola. Disfruto transformar ideas en soluciones digitales, desde el diseño de interfaces hasta su implementación y la integración con servicios backend.",
  intereses: [
    "Desarrollo web",
    "Diseño UX/UI",
    "Desarrollo frontend",
    "Integración de APIs",
    "Bases de datos",
    "Computación en la nube",
    "Ciberseguridad",
  ],
  cvUrl:
    "https://drive.google.com/file/d/1ZF2ctT1S0u8npJId3U5ae9V4JJMphu61/view?usp=drive_link",
};

export const contacto = {
  correo: "ctoledovillarreal@gmail.com",
  github: "https://github.com/cesar160",
  linkedin: "https://www.linkedin.com/feed/",
  sitioWeb: null,
  telefonoPublico: null,
};

export const educacion = [
  {
    institucion: "Universidad Politécnica de Chiapas",
    carrera: "Ingeniería en Tecnología e Innovación Digital",
    estado: "En curso",
  },
];

export const habilidades = {
  lenguajes: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "Kotlin",
    "SQL",
  ],
  frontend: ["React", "Next.js", "Tailwind CSS", "Angular"],
  gestionEstado: [
    "Zustand",
    "TanStack Query",
    "React Hook Form",
    "Zod",
  ],
  apisYBackend: ["APIs REST", "Axios", "Kotlin backend"],
  basesDeDatos: ["PostgreSQL", "MySQL"],
  uxUi: [
    "Figma",
    "Diseño de interfaces",
    "Experiencia de usuario",
    "Prototipado",
    "Diseño responsive",
  ],
  herramientas: [
    "Git",
    "GitHub",
    "VS Code",
    "IntelliJ IDEA",
    "Linux",
    "Docker",
    "AWS",
  ],
};

export type Proyecto = {
  id: string;
  nombre: string;
  categoria: string;
  resumen: string;
  descripcion: string;
  rol: string;
  contribuciones: string[];
  funcionalidades: string[];
  tecnologias: string[];
  imagenes: string[];
  destacado: boolean;
};

export const proyectos: Proyecto[] = [
  {
    id: "restapp",
    nombre: "Restapp",
    categoria: "Gestión de restaurantes",
    resumen:
      "Sistema web tipo punto de venta para apoyar la gestión de mesas, pedidos, cuentas e inventario básico en restaurantes.",
    descripcion:
      "Proyecto de gestión para restaurantes, orientado a facilitar operaciones como la atención de mesas, el registro de pedidos y la administración de cuentas.",
    rol: "Diseño UX/UI e implementación de interfaces",
    contribuciones: [
      "Diseñé interfaces y flujos de usuario en Figma.",
      "Trabajé en la experiencia de navegación y la consistencia visual.",
      "Colaboré en trasladar los diseños a interfaces implementadas en código.",
    ],
    funcionalidades: [
      "Gestión de mesas",
      "Registro de pedidos",
      "Consulta y cierre de cuentas",
      "Control básico de inventario",
    ],
    tecnologias: ["Figma", "HTML", "CSS", "JavaScript"],
    imagenes: [
      "/projects/restap menu.png",
      "/projects/restapp comandas.png",
      "/projects/restapp cuenta.png",
    ],
    destacado: true,
  },
  {
    id: "biodex",
    nombre: "Biodex",
    categoria: "Gestión de información y solicitudes",
    resumen:
      "Aplicación para gestionar solicitudes de especímenes, con integración de frontend y API.",
    descripcion:
      "Sistema con operaciones de registro y seguimiento de solicitudes relacionadas con especímenes.",
    rol: "Diseño UX/UI, implementación de interfaces y aportaciones a la API",
    contribuciones: [
      "Colaboré en el diseño de las interfaces y su implementación en código.",
      "Realicé aportaciones en la API del sistema.",
      "Trabajé en la comunicación entre frontend y backend.",
    ],
    funcionalidades: [
      "Registro de solicitudes",
      "Consulta y gestión de solicitudes",
      "Integración con API",
    ],
    tecnologias: ["Angular", "Kotlin", "API REST"],
    imagenes: [
      "/projects/biodex login.png",
      "/projects/biodex menu.png",
      "/projects/biodex collections.png",
    ],
    destacado: true,
  },
  {
    id: "agrosoft",
    nombre: "Agrosoft",
    categoria: "Tecnología agrícola",
    resumen:
      "Sistema de monitoreo y gestión de cultivos con seguimiento de parámetros, alertas y análisis de riesgos.",
    descripcion:
      "Propuesta de solución digital para visualizar y administrar información sobre cultivos, ciclos agrícolas y condiciones de monitoreo.",
    rol: "Responsable del diseño UX completo",
    contribuciones: [
      "Me encargué del diseño de la experiencia de usuario de todo el sistema.",
      "Definí la organización y navegación de las interfaces.",
      "Diseñé flujos orientados a la consulta de información y al monitoreo de cultivos.",
    ],
    funcionalidades: [
      "Gestión de cultivos y ciclos agrícolas",
      "Monitoreo de parámetros",
      "Alertas",
      "Reportes",
      "Análisis inteligente",
    ],
    tecnologias: ["Figma", "UX Research", "React Native", "Java", "Spring Boot"],
    imagenes: [
      "/projects/agrosoft inicio.png",
      "/projects/agrosoft menu.png",
      "/projects/agrosoft cultivos.png",
    ],
    destacado: true,
  },
  {
    id: "mente-sana",
    nombre: "Mente Sana",
    categoria: "Plataforma de servicios de salud mental",
    resumen:
      "Plataforma web para conectar a usuarios con profesionales de psicología y gestionar registros, perfiles y disponibilidad.",
    descripcion:
      "Proyecto web con flujos de prerregistro y onboarding para psicólogos, así como interfaces relacionadas con perfiles, agenda y disponibilidad.",
    rol: "Colaboración en desarrollo frontend y diseño de interfaces",
    contribuciones: [
      "Trabajé en flujos e interfaces de prerregistro y onboarding de psicólogos.",
      "Colaboré en vistas de perfiles, agenda y disponibilidad.",
      "Trabajé con componentes y formularios del frontend.",
    ],
    funcionalidades: [
      "Prerregistro de psicólogos",
      "Onboarding",
      "Perfiles profesionales",
      "Agenda y horarios disponibles",
    ],
    tecnologias: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Axios",
    ],
    imagenes: [
      "/projects/Landing page mente sana.png",
      "/projects/Mente sana Psicologos.png",
      "/projects/Mente sana register.png",
    ],
    destacado: true,
  },
];

export const experiencia = {
  resumen:
    "Participación en proyectos académicos y colaborativos de desarrollo de software, diseño UX/UI e integración con APIs.",
};

export const estructuraNav = [
  { id: "inicio", titulo: "Inicio" },
  { id: "sobre-mi", titulo: "Sobre mí" },
  { id: "habilidades", titulo: "Habilidades" },
  { id: "proyectos", titulo: "Proyectos" },
  { id: "formacion", titulo: "Formación" },
  { id: "contacto", titulo: "Contacto" },
];
