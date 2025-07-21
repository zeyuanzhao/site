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
      "A productivity app that helps you stay focused by assigining tasks to scheduled pomodoros.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/pomolist",
    websiteLink: "https://gopomolist.vercel.app/",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "EduShare",
    description:
      "An educational platform that allows students to share and create study resources, such as quizzes, flashcards, articles, and videos.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/goedushare/edushare",
    websiteLink: "https://goedushare.vercel.app/",
    body: EduShareDetails,
    className: "col-span-7",
  },
  {
    title: "Aora",
    description:
      "An Expo app built from a tutorial that allows users to share and browse videos.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/aora",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Playsorter",
    description:
      "A web app that integrates with Spotify to allow users to sort their playlists by various criteria.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/playsorter",
    websiteLink: "https://playsorter.vercel.app/auth",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "MedVB",
    description:
      "Web app that allows users to learn more about volleyball injuries and how to prevent and treat them.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/medvb",
    websiteLink: "https://medvb.vercel.app",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "20Emojis",
    description: "20 questions against an AI but with emojis only.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/20emojis",
    websiteLink: "https://20emojis.vercel.app/",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Wallops",
    description: "Website for MBHS Magnet Wallops trip project.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/wallops",
    websiteLink: "https://wallops.azhao.dev/",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Wiki",
    description:
      "A wikipedia clone built with Django that allows users to create and edit articles.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/cs50w/tree/main/project1",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "Auctions",
    description:
      "A Django app that allows users to create and bid on auctions.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/cs50w/tree/main/project2",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "50List",
    description: "A Flask todo list app with authentication.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/cs50x/tree/main/final-project",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Quizlet Clone",
    description:
      "A quizlet clone that allows users to create flashcards. Built for Dev Club.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/mbhsdev/quizlet",
    websiteLink: "https://mbhsdev.github.io/quizlet/",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "AI Visual Interpreter",
    description:
      "An app that helps visually impaired people understand their surroundings using AI. Built for Dev Club.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/ai-visual-interpreter",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "MBMT",
    description:
      "Managed the official website for the Montgomery Blair Math Tournament.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/mbhs/mbmt",
    websiteLink: "https://mbmt.mbhs.edu/",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Website",
    description: "This website.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/site",
    websiteLink: "https://www.azhao.dev/",
    body: SummitDetails,
    className: "col-span-7",
  },
];
