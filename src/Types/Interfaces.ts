export interface Irecommend{
    name: string;
    role: string;
    company: string;
    date: string;
    recommendation: string;
}

export interface Iproject{
    name: string;
    purpose: string;
    technologies: string[];
    description: string;
    image: string;
    link_git?: string;
    link_docker?: string;
    link?: string;
}

export interface Itechnology {
    id: number;
    name: string;
  }