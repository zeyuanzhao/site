import { ComponentType } from "react";

import { SummitDetails } from "@/components/projects/Summit";

export interface ProjectCardInfo {
  title: string;
  description: string;
  className?: string;
  imageSrc?: string | undefined;
  githubLink?: string;
  websiteLink?: string;
}

export interface ProjectDetailedInfo extends ProjectCardInfo {
  body: ComponentType;
}

export const projects: ProjectDetailedInfo[] = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-5",
  },
];
