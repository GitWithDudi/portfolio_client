export interface Irecommend{
    name: string;
    role: string;
    company: string;
    date: string;
    recommendation: string;
}

export interface Iproject{
    id?: number;
    project_name: string;
    purpose: string;
    technologies: string[];
    description: string;
    image_filename: string;
    github_link?: string;
    docker_link?: string;
    link?: string;
}

export interface Itechnology {
    id: number;
    name: string;
  }