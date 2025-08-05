export const DATA = {
  home: {
    hero: {
      name: "Pratik Poojary",
      title: "Full stack developer",
      subtitle:
        "I build fast, accessible and visually engaging web experiences.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        " Specialized in creating modern digital experiences with cutting-edge technologies",
      overview: [
        {
          name: "Python",
          level: 85,
          icon: "mdi:language-python",
          color: "primary",
        },
        {
          name: "TypeScript",
          level: 70,
          icon: "simple-icons:typescript",
          color: "secondary",
        },
        {
          name: "Node JS",
          level: 70,
          icon: "mdi:nodejs",
          color: "success",
        },
        {
          name: "React",
          level: 88,
          icon: "mdi:react",
          color: "default",
        },
      ],
    },
    testimonials: {
      sectionTitle: "Certifications",
      sectionDescription: "What clients say about working together",
      items: [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "Product Manager at TechNova",
          content:
            "The design system created for our SaaS platform reduced our development time by 40% while improving consistency across all our products. The attention to accessibility standards was particularly impressive.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "CTO at StartUpGrid",
          content:
            "Working with this team transformed our mobile app's user retention by 35% in just three months. Their data-driven design approach helped us identify pain points we didn't even know existed.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
        },
        {
          id: 3,
          name: "David Rodriguez",
          role: "UX Director at FinTech Global",
          content:
            "The dashboard redesign resulted in a 50% reduction in support tickets. Their ability to balance complex financial data with clean visualization is unmatched in the industry.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=3",
        },
        {
          id: 4,
          name: "Priya Patel",
          role: "E-commerce Manager at StyleHub",
          content:
            "Our conversion rate increased by 28% after implementing their checkout flow redesign. They understood our international user base better than our internal team.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=4",
        },
        {
          id: 5,
          name: "James Wilson",
          role: "Head of Product at HealthTrack",
          content:
            "The healthcare app we built together received FDA approval largely due to its intuitive patient interface. Their understanding of regulatory requirements saved us months of rework.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=5",
        },
        {
          id: 6,
          name: "Lisa Nguyen",
          role: "Marketing Director at EduTech Solutions",
          content:
            "Our user onboarding completion rate went from 65% to 92% after their redesign. The way they simplified complex educational concepts into clear interfaces was remarkable.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=6",
        },
        {
          id: 7,
          name: "Thomas Okafor",
          role: "Founder at AgriTech Africa",
          content:
            "They designed an agricultural monitoring app that works perfectly even in low-connectivity rural areas. Cultural sensitivity and technical innovation in perfect balance.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=7",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Pratik Poojary",
      title: "Full Stack Developer",
      image:
        "https://res.cloudinary.com/dt4hqvqlx/image/upload/v1754122232/pratik_crop_xc6u7q.jpg",
      description: [
        "I'm a full-stack developer I focus on building beautiful, functional, and high-performance websites and web apps.",
        "My approach is both technical and aesthetic — I enjoy turning complex problems into elegant user experiences. I work primarily with modern technologies like React, Typescript, and Nodejs.",
        "Outside of code, I enjoy Playing chess, learning stuff from different domains, and always pushing the boundaries to get better then yesterday.",
      ],
    },
    education: [
      {
        title: "High Secondary Education",
        date: "2015 - 2017",
        icon: "mdi:palette",
        description: "Science (Electronics)",
      },
      {
        title: "University of Mumbai",
        date: "2017 - 2021",
        icon: "mdi:school",
        description: "B.Tech (Electronics and Telecommunication)",
      },
    ],
    experience: [
      {
        company: "Upstream",
        title: "Full Stack Developer",
        date: "Jul 2025 - present",
        icon: "mdi:code-tags",
        description: `Working on developing Custom Backend features using Node js/ Typescript for Monday.com platform.`,
      },
      {
        company: "Taurus Technologies",
        title: "Full Stack Developer",
        date: "Feb 2024 - Jun 2025",
        icon: "mdi:monitor-dashboard",
        description: `Developed backend APIs in Laravel for Star Insurance Company to optimize workflows. 
            Led a team to build dynamic reporting dashboards using Python, FastAPI, React, AG-Grid, and AG-Charts for visualizing claims and policy data. 
            Also designed a Domain-Specific Query Language (DSL) using Lark to interpret user queries and auto-generate dashboards.`,
      },
      {
        company: "WonderBiz Technologies",
        title: "Software Developer",
        date: "July 2021 - Sept 2023",
        icon: "mdi:briefcase",
        description: `Engineered full-stack features in C# and ReactJS for Schneider Electric's EcoStruxure Automation Expert platform, enabling customizable automation blocks. 
          Revamped the Bulk Engineering plugin with a cost-effective hierarchical table design, 
          replacing AG-Grid Enterprise and improving performance. Delivered a React-based POC for rendering Excel/XML data as editable tables, 
          later adopted in production, and resolved critical UI and functional bugs to enhance platform stability.`,
      },
    ],
    technologies: {
      frontend: {
        description:
          "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
        ],
      },
      backend: {
        description:
          "I build fast APIs and scalable backends using Node.js, GraphQl, and Python.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "GraphQL", icon: "logos:graphql" },
          { name: "Python", icon: "logos:python" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "OpenAI", icon: "simple-icons:openai" },
        ],
      }
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of my recent projects showcasing UI/UX design and development expertise",
    work: [
      {
        id: 1,
        title: "Notes App",
        description:
          "Simple Notes App with the ability to add, edit, and delete notes built using React.",
        image: "https://res.cloudinary.com/dt4hqvqlx/image/upload/v1754136648/notes_hbzd7b.png",
        gallery: [
          "https://res.cloudinary.com/dt4hqvqlx/image/upload/v1754136648/notes_hbzd7b.png",
        ],
        category: "Web Development",
        details:
          "Simple Notes App with the ability to add, edit, and delete notes built using React.",
        github: "https://github.com/pratik-99/notes-app",
        live: "https://notes-app-psi-one.vercel.app/",
        tech: [
          { name: "React", icon: "logos:react" },
        ],
      },
      {
        id: 2,
        title: "Vans App",
        description:
          "A simple Routing App designed for Showcasing different Vans and their Features, built using React.",
        image: "https://res.cloudinary.com/dt4hqvqlx/image/upload/v1754134138/vans-app_kwgwqv.png",
        gallery: [
          "https://res.cloudinary.com/dt4hqvqlx/image/upload/v1754134138/vans-app_kwgwqv.png",
          "https://res.cloudinary.com/dt4hqvqlx/image/upload/v1754134356/van-explorer_bitzpk.png",
        ],
        category: "Web Development",
        details:
          "A simple Routing App designed for Showcasing different Vans and their Features, built using React. ",
        github: "https://github.com/pratik-99/routing-project",
        live: "https://routing-project-zeta.vercel.app/",
        tech: [
          { name: "React", icon: "logos:react" },
        ],
      },      
      {
        id: 3,
        title: "Tenzies Game",
        description:
          "A Dice Rolling Game built using React.",
        image: "https://res.cloudinary.com/dt4hqvqlx/image/upload/v1754140058/Tenzies_qlsw4h.png",
        gallery: [
          "https://res.cloudinary.com/dt4hqvqlx/image/upload/v1754140058/Tenzies_qlsw4h.png",
        ],
        category: "Web Development",
        details:
          "A Dice Rolling Game built using React.",
        github: "https://github.com/pratik-99/tenzies",
        live: "https://tenzies-gamma-ecru.vercel.app/",
        tech: [
          { name: "React", icon: "logos:react" },
        ],
      },
      {
        id: 4,
        title: "Bone-Age-Prediction ",
        description:
          "Smart customer support assistant with contextual awareness and real-time replies.",
        image: "https://res.cloudinary.com/dt4hqvqlx/image/upload/v1754144216/Bone-age_uhddwf.png",
        gallery: [
          "https://res.cloudinary.com/dt4hqvqlx/image/upload/v1754144216/Bone-age_uhddwf.png"
        ],
        category: "Machine-learning",
        details:
          "A software based solution using deep learning to predict the age of a person below 18 years, using the X-ray image of a hand not requiring any medical expertise.",
        github: "https://github.com/pratik-99/Bone-Age-Prediction",
        live: "https://github.com/pratik-99/Bone-Age-Prediction",
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "TensorFlow", icon: "simple-icons:tensorflow" },
          { name: "Numpy", icon: "simple-icons:numpy" },
        ],
      },
    ],
  },
  contact: {
    heading:
      "Have a project in mind? Get in touch and let's create something amazing.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609946407!2d72.74109984889887!3d19.0821978395088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c003f8a09%3A0x2b0a8b7b8b0e5c29!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin",
      address: "Mumbai, India",
    },
  },
  morphingTexts: {
    about: ["Creative", "Passionate", "Developer"] as const,
    projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Pratik Poojary",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "ppoojary393@gmail.com",
      phone: "+91 9167439226",
      location: "Mumbai, India",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/pratik-99", icon: "mdi:github" },
      {
        platform: "LinkedIn",
        url: "www.linkedin.com/in/poojarypratik",
        icon: "mdi:linkedin",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/pratik.poojary/",
        icon: "mdi:instagram",
      },
    ],
    services: ["Web Development", "Back-End Development", "Consulting"],
  },
} as const;
