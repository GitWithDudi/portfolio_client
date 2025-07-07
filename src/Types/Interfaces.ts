import React from "react";


export interface Irecommend{
    id?: number;
    name: string;
    role: string;
    company: string;
    recommendation_date?: string;
    recommendation_file_path?: string;
}

export interface Iproject{
    id?: number;
    project_name: string;
    purpose: string;
    technologies?: string[];
    tech_ids: number[];
    description: string;
    image_filename: string;
    github_link?: string;
    docker_link?: string;
    link?: string;
}

export interface Itechnology {
    id?: number;
    name: string;
  }


  export interface ProtectedRouteProps {
    children: React.JSX.Element;
  } 