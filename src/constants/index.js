import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  next,
  postgresql,
  python,
  graphql,
  hfio,
  hflanding,
  emailauth,
  movie,
  omnifood,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  tb,
  iv,
  modlai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "",
    icon: reactjs,
  },
  {
    title: "",
    icon: frontend,
  },
  {
    title: "",
    icon: javascript,
  },
  {
    title: "",
    icon: nodejs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "graphql",
  //   icon: graphql,
  // },
  // {
  //   name: "postgresql",
  //   icon: postgresql,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "NextJs",
    icon: next,
  },
];

const experiences = [
  {
    title: "Web Designer",
    company_name: "Infosec Ventures",
    icon: iv,
    iconBg: "#333333",
    date: "Aug 2021 - Dec 2023",
  },
  {
    title: "Web Developer",
    company_name: "True Blue",
    icon: tb,
    iconBg: "#333333",
    date: "Jan 2024 - Present",
  },
  // {
  //   title: "Junior Software Engineer",
  //   company_name: "Kelhel",
  //   icon: kelhel,
  //   iconBg: "#333333",
  //   date: "May 2022 - Oct 2022",
  // },
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Diversity Cyber Council",
  //   icon: dcc,
  //   iconBg: "#333333",
  //   date: "Sep 2022 - Present",
  // },
];

const projects = [
  {
    id: "project-1",
    name: "Human Firewall Website",
    description:
      "A world-first security awareness platform that also works when real attacks strike.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hfio,
    repo: "https://humanfirewall.io/",
    demo: "https://humanfirewall.io/",
  },
  {
    id: "project-2",
    name: "HF Landing Page",
    description:
      "Human Firewall Landing Page to book a Demo to understand how it works",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: hflanding,
    repo: "https://github.com/rajeevdevl/LandingPage",
    demo: "https://rajeevdevl.github.io/LandingPage/",
  },
  {
    id: "project-3",
    name: "Security Rating",
    description:
      "Security monitoring across your entire vendor ecosystem and supply chain",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: emailauth,
    repo: "https://securityrating.com/",
    demo: "https://securityrating.com/",
  },
  {
    id: "project-4",
    name: "Modl ai",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: modlai,
    repo: "https://modl.ai/",
    demo: "https://modl.ai/",
  },
  {
    id: "project-5",
    name: "Omnifood Web App",
    description: "A healthy meal delivered to your door, every single day",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    repo: "https://github.com/rajeevdevl/Omnifood/tree/master/omnifood-app",
    demo: "https://omnifood-web-app.web.app/",
  },
];

export { services, technologies, experiences, projects };
