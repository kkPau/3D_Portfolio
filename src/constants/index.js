import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  flutter,
  dart,
  dotnet,
  csharp,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  stanbic,
  acs,
  threejs,
  docbook,
  port,
  frca,
  foodmenu,
  shareme,
  threedport,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Stanbic Bank Ghana",
    icon: stanbic,
    iconBg: "#FFFFFF",
    date: "October 2023 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Integrating institution APIs into the banking system.",
      "Participating in code reviews and providing constructive feedback.",
      "Undertaking networking lessons with CiscoAnyConnect.",
    ],
  },
  {
    title: "Developer",
    company_name: "Adaptive Computer Solutions",
    icon: acs,
    iconBg: "#FF0000",
    date: "October 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kenneth brings passion and skill to his work. His attention to detail and the quality of his work is up there with the best.",
    name: "Samuel Kankam",
    designation: "NSP",
    company: "NCA",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "From concept to delivery, Kenneth was a pleasure to work with. He is responsive, knowledgeable, and possess a keen eye for design that perfectly aligns with user needs. Can't wait for our next project together!",
    name: "Vigilant Kwao",
    designation: "Final Year Project Partner",
    company: "KNUST",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Doctor Appointment",
    description:
      "A web-based application that allows individuals to book and make payments for a doctor's appointment only if the doctor accepts the appointment on his or her own dashboard.",
    tags: [
      {
        name: "reactjs",
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
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
    ],
    image: docbook,
    source_code_link: "https://github.com/",
  },
  {
    name: "Image Blog",
    description:
      "A web-based platform that allows users to share images and also like, share and save or bookmark the images they find interesting just like Pinterest.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shareme,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio",
    description:
      "A 3D portfolio website that takes adavantage of ThreeJs to inculcate some amazing models while achieving the purpose of displaying my expertise.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threedport,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description:
      "A portfolio website that showcases my skills, also achievements and allows interested individuals to contact me.",
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
    image: port,
    source_code_link: "https://github.com/",
  },
  {
    name: "Attendance System",
    description:
      "A cross-platform application originally built for the schoolsystem that allows students to scan and mark class attendance only when present in class and within the period of the class.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: frca,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Menu",
    description:
      "A web based platform that showcases a menu of foods and also ingredients that were used in preparing such food.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Core",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "sqlserver",
        color: "blue-text-gradient",
      },
    ],
    image: foodmenu,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
