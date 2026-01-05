
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Technical' | 'Management' | 'Soft Skills';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
