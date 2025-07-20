import { ComponentType } from "react";

import { EduShareDetails } from "@/components/projects/EduShare";
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
  body?: ComponentType;
}

export const projects: ProjectDetailedInfo[] = [
  {
    title: "Summit",
    description:
      "Discover trending research papers through a personalized feed powered by AI. View short-form summaries, read abstracts, save papers for later, and easily search for papers.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    className: "col-span-7",
  },
  {
    title: "DCHacks",
    description:
      "A hackathon for all middle and high schoolers coming to DC this fall. View the website for more details.",
    imageSrc: "/assets/dchacks.png",
    githubLink: "https://github.com/blairhacks/dchacks",
    websiteLink: "https://www.dchacks.org",
    className: "col-span-5",
  },
  {
    title: "Pomolist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "EduShare",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: EduShareDetails,
    className: "col-span-7",
  },
  {
    title: "Aora",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Playsorter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "MedVB",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "20Emojis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Wallops",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Wiki",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "Auctions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "50List",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "HubPortal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Quizlet Clone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "AI Visual Interpreter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "MBMT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    body: SummitDetails,
    className: "col-span-7",
  },
];
