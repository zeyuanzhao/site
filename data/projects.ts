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
      "Discover trending research papers through a personalized feed powered by AI. View short-form summaries, read abstracts, save papers for reading, and easily search for papers.",
    imageSrc: "/assets/summit.png",
    githubLink: "https://github.com/zeyuanzhao/summit",
    websiteLink: "https://summitapp.vercel.app",
    className: "col-span-7",
  },
  {
    title: "EduShare",
    description:
      "Create and share exam study materials with your classmates! Join classrooms and collaborate on modules to create quizzes, flashcards, articles, and videos. Ask questions and get help from a chatbot.",
    imageSrc: "/assets/edushare.png",
    githubLink: "https://github.com/goedushare/edushare",
    websiteLink: "https://goedushare.vercel.app/",
    body: EduShareDetails,
    className: "col-span-5",
  },
  {
    title: "DCHacks",
    description:
      "Hackathon for all middle and high schoolers coming to DC in March. Join us for a weekend of building on our website!",
    imageSrc: "/assets/dchacks.png",
    githubLink: "https://github.com/blairhacks/dchacks",
    websiteLink: "https://www.dchacks.org",
    className: "col-span-5",
  },
  {
    title: "MBMT",
    description: "Official website for the Montgomery Blair Math Tournament.",
    imageSrc: "/assets/mbmt.png",
    githubLink: "https://github.com/mbhs/mbmt",
    websiteLink: "https://mbmt.mbhs.edu/",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Pomolist",
    description:
      "A pomodoro-inspired productivity app that helps you stay focused. Create a daily task list and time-block your work sessions.",
    imageSrc: "/assets/pomolist.png",
    githubLink: "https://github.com/zeyuanzhao/pomolist",
    websiteLink: "https://gopomolist.vercel.app/",
    className: "col-span-7",
  },
  {
    title: "Aora",
    description: "Expo app tutorial. Share and browse videos.",
    imageSrc: "/assets/exp.png",
    githubLink: "https://github.com/zeyuanzhao/aora",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "Playsorter",
    description:
      "Sort your Spotify playlist with combined custom features like energy, danceability, and more. Built for Hack Club.",
    imageSrc: "/assets/playsorter.png",
    githubLink: "https://github.com/zeyuanzhao/playsorter",
    websiteLink: "https://playsorter.vercel.app/auth",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "MedVB",
    description:
      "Learn more about volleyball injuries. Look up how to prevent and treat them. Built for Hack Club.",
    imageSrc: "/assets/medvb.png",
    githubLink: "https://github.com/zeyuanzhao/medvb",
    websiteLink: "https://medvb.vercel.app",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "20Emojis",
    description:
      "20 questions against an AI but with emojis only. Built for Hack Club.",
    imageSrc: "/assets/20emojis.png",
    githubLink: "https://github.com/zeyuanzhao/20emojis",
    websiteLink: "https://20emojis.vercel.app/",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Wallops",
    description: "Website for MBHS Magnet Wallops trip project.",
    imageSrc: "/assets/wallops.png",
    githubLink: "https://github.com/zeyuanzhao/wallops",
    websiteLink: "https://wallops.azhao.dev/",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "Wiki",
    description:
      "A wikipedia clone built with Django that allows users to create and edit articles.",
    imageSrc: undefined,
    githubLink: "https://github.com/zeyuanzhao/cs50w/tree/main/project1",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "Auctions",
    description:
      "A Django app that allows users to create and bid on auctions.",
    imageSrc: undefined,
    githubLink: "https://github.com/zeyuanzhao/cs50w/tree/main/project2",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "50List",
    description: "A Flask todo list app with authentication.",
    imageSrc: undefined,
    githubLink: "https://github.com/zeyuanzhao/cs50x/tree/main/final-project",
    body: SummitDetails,
    className: "col-span-7",
  },
  {
    title: "Quizlet Clone",
    description:
      "A quizlet clone that allows users to create flashcards. Built for Hack Club.",
    imageSrc: "/assets/quizlet.png",
    githubLink: "https://github.com/mbhsdev/quizlet",
    websiteLink: "https://mbhsdev.github.io/quizlet/",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "AI Visual Interpreter",
    description:
      "An app that helps visually impaired people understand their surroundings using AI. Built for Hack Club.",
    imageSrc: undefined,
    githubLink: "https://github.com/zeyuanzhao/ai-visual-interpreter",
    body: SummitDetails,
    className: "col-span-5",
  },
  {
    title: "Website",
    description: "This website. Built for Hack Club.",
    imageSrc: "/assets/website.png",
    githubLink: "https://github.com/zeyuanzhao/site",
    websiteLink: "https://www.azhao.dev/",
    body: SummitDetails,
    className: "col-span-7",
  },
];
