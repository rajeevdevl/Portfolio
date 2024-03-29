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
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Email Template Designs",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: ux,
  },
  {
    title: "Video Editing",
    icon: prototyping,
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
    title: "Front-End Developer",
    company_name: "Innovative Buddies",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Jun 2020 - Aug 2021",
  },
  {
    title: "Web Designer",
    company_name: "Infosec Ventures",
    icon: microverse,
    iconBg: "#333333",
    date: "Aug 2021 - Present",
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
    name: "Email Auth",
    description: "This is a Landing page for the Email Auth",
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
    repo: "https://github.com/rajeevdevl/EmailAuthLanding",
    demo: "https://rajeevdevl.github.io/EmailAuthLanding/",
  },
  {
    id: "project-4",
    name: "Movie Metro",
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
    image: movie,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Nyeusi Fest Site",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
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
    image: nyeusi,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
];

export { services, technologies, experiences, projects };
