// src\resources\content.tsx
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, SmartLink, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "MD.",
  lastName: "Ratul",
  name: `MD. Ratul`,
  role: "ERP Software Engineer",
  avatar: "/images/gallery/avatar.jpg",
  email: "mdratul47782@gmail.com",
  location: "Asia/Dhaka", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bengali"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  // Set to true once you have a real newsletter provider configured in once-ui.config.ts
  display: false,
  title: <>Subscribe to {person.firstName} Ratul's Newsletter</>,
  description: <>Occasional notes on ERP systems, manufacturing software, and full-stack engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ratuldev47782",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/md-ratul-4a8394418/",
    essential: true,
  },
  {
    name: "Portfolio",
    icon: "openLink",
    link: "https://md-ratul.me",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  // Generated on the fly so the share card never shows the template's placeholder persona
  image: `/api/og/generate?title=${encodeURIComponent(`${person.name}'s Portfolio`)}`,
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning manufacturing operations into reliable software</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">FG Warehouse MS</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Live in production
        </Text>
      </Row>
    ),
    href: "/work/fg-warehouse-management-system",
  },
  subline: (
    <>
      I'm {person.firstName} Ratul, an {person.role} at{" "}
      <Text as="span" size="xl" weight="strong">
        HKD Outdoor Innovations
      </Text>
      , where I build the ERP systems that run a garment factory's shop floor — production, quality,
      maintenance and finished-goods warehouse. <br /> After hours, I work on research and side projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Dhaka, Bangladesh`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    // Point this at your own booking page, then set display to true
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.name} is an {person.role} based in Dhaka, Bangladesh, focused on building
        scalable, high-performance applications that make business operations simpler. My work spans the
        full stack — Next.js and React on the front end, Node.js and Express with MongoDB and PostgreSQL
        underneath — applied to production, quality, maintenance, warehouse and industrial engineering
        systems. I also published research on deep-learning-based plant disease detection for mobile
        apps, presented at IEEE QPAIN 2025.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "HKD Outdoor Innovations Limited",
        timeframe: "Nov 2025 - Present",
        role: "Executive – ERP",
        achievements: [
          <>
            Designed and developed ERP software modules for Quality, Production, Maintenance, HR and FG
            Warehouse operations.
          </>,
          <>
            Built and customized system workflows to streamline business processes and improve
            operational efficiency.
          </>,
          <>
            Integrated ERP functionality across multiple departments to ensure accurate data flow and
            process coordination.
          </>,
          <>
            Supported automation and reporting features that enhance decision-making and day-to-day
            productivity.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Screenshot_31.png",
            alt: "FG Warehouse MS dashboard on the warehouse display",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Battery Low Interactive Ltd.",
        timeframe: "Jul 2024 - Oct 2024",
        role: "Web Developer (Intern)",
        achievements: [
          <>
            Developed and maintained responsive websites, improving the experience across devices.
          </>,
          <>
            Utilized React, JavaScript and CSS to enhance web performance and interactivity.
          </>,
          <>
            Conducted code reviews and debugging to ensure high-quality deliverables.
          </>,
          <>Led a project group, fostering effective teamwork and delivering projects on time.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Green University of Bangladesh",
        description: <>B.Sc. in Computer Science and Engineering — Dhaka, 2020 - 2024.</>,
      },
      {
        name: "React Accelerator Course — Learn With Shumit",
        description: (
          <>
            Five-month program covering React and Next.js fundamentals, state management, advanced
            patterns and ecosystem tools, with 15+ projects including a learning management platform.{" "}
            <SmartLink
              href="https://learnwithsumit.com/certificates/verify/LWSCTXN-0QZ498H3"
              suffixIcon="openLink"
              unstyled
            >
              Verify certificate
            </SmartLink>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "ERP & manufacturing systems",
        description: (
          <>
            Production, quality, maintenance, warehouse and IE modules for garment manufacturing — from
            hourly shop-floor targets to finished-goods dispatch.
          </>
        ),
        tags: [
          {
            name: "ERP Systems",
            icon: "erp",
          },
          {
            name: "Manufacturing",
            icon: "manufacturing",
          },
          {
            name: "Shop-floor dashboards",
            icon: "modules",
          },
          {
            name: "Barcode & label printing",
            icon: "barcode",
          },
        ],
        images: [
          {
            src: "/images/gallery/ERP-1.jpeg",
            alt: "HKD production and quality ERP dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/ERP-2.jpeg",
            alt: "FG Warehouse MS carton allocation view",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/ERP-3.jpeg",
            alt: "HKD production and quality ERP dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/ERP-4.jpeg",
            alt: "FG Warehouse MS carton allocation view",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Full-stack development",
        description: (
          <>
            End-to-end web applications with Next.js App Router and React on the front end, Node.js and
            Express APIs behind them.
          </>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express.js",
            icon: "express",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/Screenshot_32.png",
            alt: "FG Warehouse MS shipment and barcode printing screen",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Databases & data modeling",
        description: (
          <>
            Modeling operational data — cartons, shipments, machines, hourly production and defect logs —
            across document and relational stores.
          </>
        ),
        tags: [
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Mongoose",
            icon: "mongoose",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Prisma",
            icon: "prisma",
          },
          {
            name: "Drizzle ORM",
            icon: "drizzle",
          },
        ],
        images: [],
      },
      {
        title: "Real-time, auth & integrations",
        description: (
          <>
            Live shop-floor updates, role-based access control with building-level data isolation, and
            third-party service integration.
          </>
        ),
        tags: [
          {
            name: "Socket.IO",
            icon: "socketio",
          },
          {
            name: "JWT",
            icon: "jwt",
          },
          {
            name: "NextAuth",
            icon: "nextauth",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
          {
            name: "Cloudinary",
            icon: "cloudinary",
          },
          {
            name: "Axios / API integration",
            icon: "axios",
          },
        ],
        images: [],
      },
      {
        title: "UI & data visualization",
        description: (
          <>
            Operator interfaces built for shop-floor TVs and kiosks, with charts that make targets,
            efficiency and defects readable at a glance.
          </>
        ),
        tags: [
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
          {
            name: "DaisyUI",
            icon: "daisyui",
          },
          {
            name: "TanStack Query",
            icon: "reactquery",
          },
          {
            name: "Recharts",
            icon: "recharts",
          },
          {
            name: "Framer Motion",
            icon: "framer",
          },
          {
            name: "Git / GitHub",
            icon: "git",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about ERP and web engineering...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
  // Note: the /blog route is switched off in once-ui.config.ts until there are posts to publish
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `ERP systems, warehouse software and research by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `Photos from work and life by ${person.name}`,
  images: [
    {
      src: "/images/gallery/ERP-1.jpeg",
      alt: "Presenting the FG warehouse dashboard on the aisle display",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ERP-4.jpeg",
      alt: "HKD warehouse system on a shop-floor display, an office PC and the carton storage aisle",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ERP-3.jpeg",
      alt: "Presenting the ERP system overview to the HKD team",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Building-Image.jpg",
      alt: "HKD Outdoor Innovations Limited at Karnaphuli EPZ, Chattogram",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ERP-2.jpeg",
      alt: "Shop-floor display and sewing lines at HKD",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Battery-Low-Interactive-Ltd.png",
      alt: "Battery Low Interactive Ltd. team at the office",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
