
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  technologies: string[];
  period: string;
  bullets: string[];
  link?: string;
}

export interface Publication {
  title: string;
  conference: string;
  year: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
