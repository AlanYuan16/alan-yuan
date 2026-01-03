
import { Experience, Project, Publication, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Alan Yuan",
  title: "Researcher & Software Engineer",
  email: "ayuan01@nyit.edu",
  linkedin: "linkedin.com/in/alan-yuan-nyit/",
  github: "github.com/AlanYuan16",
  website: "alan-yuan.web.app",
  location: "New York, NY",
  education: {
    school: "New York Institute of Technology",
    degree: "Bachelor of Science in Computer Science",
    gpa: "3.8/4.0",
    expected: "Dec 2025",
    awards: ["NSF FASTRAC Scholarship", "Presidential Honor List", "Dean's Honor List"]
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "PHP", "Dart"]
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Next.js", "Flask", "React Native", "Angular", "Flutter"]
  },
  {
    name: "Tools & Methods",
    skills: ["Git/GitHub", "Firebase", "CI/CD", "REST APIs", "Pandas", "NoSQL", "Agile/Scrum", "TDD"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Research Assistant",
    company: "New York Institute of Technology",
    location: "Manhattan, NY",
    period: "July 2024 – Present",
    bullets: [
      "Co-authored peer-reviewed research papers published in IEEE conferences, contributing to data analysis, ML methodology, and visualization tooling.",
      "Processed and analyzed 500+ CSV datasets using Python (pandas) for statistical analysis and data visualization.",
      "Developed interactive dashboards and research visualizations to communicate findings to academic and non-technical audiences.",
      "Collaborated in an Agile research environment through daily stand-ups, sprint planning, and iterative development cycles."
    ]
  },
  {
    role: "Full-Stack Developer (Research Lab Portfolio)",
    company: "New York Institute of Technology",
    location: "Manhattan, NY",
    period: "Aug 2024 – Present",
    bullets: [
      "Architected and developed a full-stack research lab portfolio website using Next.js, TypeScript, and Supabase to showcase publications, projects, and team profiles.",
      "Implemented dynamic content management, authentication, and database-backed components to support scalable research content updates.",
      "Deployed and hosted the application on Vercel with CI/CD pipelines, achieving reliable production delivery and high availability.",
      "Applied modern UI/UX principles and responsive design to improve accessibility and cross-device compatibility.",
      "Worked in an Agile workflow with iterative feature development, code reviews, and continuous feedback from stakeholders."
    ]
  },
  {
    role: "Undergraduate Researcher (UREP)",
    company: "New York Institute of Technology",
    location: "Manhattan, NY",
    period: "Oct 2023 – May 2024",
    bullets: [
      "Designed and implemented responsive front-end UI components using React.js in an Agile development environment.",
      "Improved usability and accessibility by following WCAG-aligned best practices and conducting systematic code reviews.",
      "Performed technical literature reviews to extract system requirements and inform design decisions.",
      "Participated in pair programming and peer code reviews to improve code quality and reduce defects."
    ]
  },
  {
    role: "Summer Researcher",
    company: "New York Institute of Technology",
    location: "Manhattan, NY",
    period: "June 2023 – Aug 2023",
    bullets: [
      "Analyzed energy consumption patterns across NYC e-commerce services, including food delivery, ride-sharing, and online shopping platforms.",
      "Processed and cleaned large datasets to identify trends and correlations related to urban sustainability.",
      "Collaborated with a multidisciplinary research team to validate findings and produce data-driven recommendations.",
      "Presented analytical insights and visualizations to faculty mentors and research peers."
    ]
  }
];


export const PROJECTS: Project[] = [
  {
    title: "Imitation Game Bot",
    link: "https://github.com/AlanYuan16/ImitationGameBot",
    technologies: ["Python"],
    period: "Dec 2025",
    bullets: [
      "Built an automated Python bot to play and learn the Imitation Game via simple heuristics.",
      "Explored input–output handling and basic logic loops for AI-like decision behavior.",
      "Emphasized clean structure to support future expansions like reinforcement learning."
    ]
  },
  {
    title: "Binary Insertion Sort Visualizer",
    link: "https://github.com/AlanYuan16/BinaryInsertionSort",
    technologies: ["Java", "Swing", "Algorithms"],
    period: "Nov 2025",
    bullets: [
      "Implemented binary insertion sort algorithm with animated visual feedback for educational use.",
      "Designed responsive UI using Java Swing to visualize comparisons and element movements.",
      "Enhanced understanding of algorithmic time/space complexity and UI–algorithm interactions."
    ]
  },
  {
    title: "A* 8-Puzzle Solver",
    link: "https://github.com/AlanYuan16/8-puzzle-solver",
    technologies: ["Python", "Flask", "A*", "REST API", "JavaScript"],
    period: "Oct 2025",
    bullets: [
      "Developed full-stack web app implementing the A* search algorithm with configurable heuristics.",
      "Built Flask REST endpoints to generate move sequences and serve solution paths to the frontend.",
      "Created interactive UI to step through solution paths and explain heuristic choices."
    ]
  },
  {
    title: "AI-Powered Discord Bot Platform",
    link: "https://github.com/AlanYuan16/ai-discord-bot",
    technologies: ["Python", "Discord.py", "AI Integration", "OOP"],
    period: "Sept 2025",
    bullets: [
      "Built an AI-powered Discord bot utilizing Google Gemini for dynamic conversational responses.",
      "Architected OOP-based command handling and event workflows for modular feature addition.",
      "Integrated robust error logging and command testing frameworks to support evolution."
    ]
  },
  {
    title: "Focus Flow – Productivity App",
    link: "https://github.com/AlanYuan16/focus-flow",
    technologies: ["TypeScript", "React Native", "Firebase"],
    period: "Jan 2025 – May 2025",
    bullets: [
      "Architected a cross-platform productivity app using Pomodoro methodology and real-time task sync.",
      "Developed Firebase backend with secure authentication and optimized CRUD operations.",
      "Focused on clean UX with responsive navigation and state management for seamless user flow."
    ]
  },
  {
    title: "Expense Tracker",
    link: "https://github.com/AlanYuan16/expense_tracker",
    technologies: ["C++", "STL"],
    period: "2024",
    bullets: [
      "Designed a budget management CLI tool using C++ to track expenses and categorize spending.",
      "Used modern C++ data structures (maps, vectors) and file I/O to persist transactions.",
      "Improved debugging and design skills by iterating on data models and tool workflows."
    ]
  },
  {
    title: "Quiz Website",
    link: "https://github.com/AlanYuan16/ITEC305QuizWebsite",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    period: "2024",
    bullets: [
      "Developed a full-stack quiz web app with database-backed question management.",
      "Handled admin CRUD interfaces for quizzes and integrated client-side validation.",
      "Collaborated with classmates to build features, test flows, and refine UX."
    ]
  },
  
];


export const PUBLICATIONS: Publication[] = [
  {
    title: "Visualization Tool for NYC Open Data – A Time Lapse Analysis",
    conference: "IEEE SusTech 2025",
    year: "2025",
    description: "Impact analysis of NYC flash floods with machine learning."
  },
  {
    title: "Evaluation Tool for Cybersickness Mitigation Techniques in VR Environment",
    conference: "Springer Nature Publication",
    year: "2024",
    description: "Methodology development for mitigating motion sickness in virtual reality."
  }
];
