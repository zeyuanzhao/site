"use client";

import "lenis/dist/lenis.css";

import { Button } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { Roboto_Mono } from "next/font/google"; // eslint-disable-line camelcase
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

import { ProjectCard } from "@/components/ProjectCard";
import { ViolinCard } from "@/components/ViolinCard";
import { ProjectCardInfo, projects } from "@/data/projects";

const socialsVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const jumpToSectionVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Page() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const violinRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [currProjectIdx, setCurrProjectIdx] = useState<number>(-1);

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      // allowNestedScroll: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const jumpToButtons = [
    { label: "about", ref: aboutRef },
    { label: "projects", ref: projectsRef },
    { label: "violin", ref: violinRef },
    { label: "contact", ref: contactRef },
  ];

  return (
    <div className="dark dark:bg-background dark:text-foreground flex min-h-screen flex-col items-center">
      <div className="flex min-h-screen w-full max-w-[2000px] flex-col items-center justify-center px-20">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="mb-6 flex flex-row items-center justify-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  delayChildren: 2.5,
                  staggerChildren: 0.1,
                },
              },
              hidden: {},
            }}
          >
            {jumpToButtons.map((button) => (
              <motion.button
                key={button.label}
                type="button"
                onClick={() => handleScrollTo(button.ref)}
                className="hover:cursor-pointer hover:underline focus:outline-none"
                variants={jumpToSectionVariants}
              >
                {button.label}
              </motion.button>
            ))}
          </motion.div>
          <h1
            className={`before:animate-typewriter after:animate-caret relative w-[max-content] ${robotoMono.className} before:bg-background after:bg-foreground text-9xl before:absolute before:inset-0 after:absolute after:inset-0 after:w-[0.075em]`}
          >
            alex zhao
          </h1>
          <motion.div
            className="mt-8 flex flex-row items-center justify-center gap-x-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  delayChildren: 3,
                  staggerChildren: 0.15,
                },
              },
              hidden: {},
            }}
          >
            <motion.div variants={socialsVariants}>
              <Button
                isIconOnly
                variant="ghost"
                className="shadow-xl shadow-white/10"
                href="https://github.com/zeyuanzhao"
                target="_blank"
                as={Link}
              >
                <FaGithub />
              </Button>
            </motion.div>
            <motion.div variants={socialsVariants}>
              <Button
                isIconOnly
                variant="ghost"
                className="shadow-xl shadow-white/10"
                href="mailto:contact@azhao.dev"
                target="_blank"
                as={Link}
              >
                <HiEnvelope />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div
        ref={aboutRef}
        className="grid min-h-screen w-full max-w-[2000px] grid-cols-2 px-20"
      >
        <motion.div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className} bg-background sticky top-0 h-screen`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          about
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col items-center justify-center py-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <br />
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </motion.div>
      </div>
      <div
        ref={projectsRef}
        className="grid min-h-screen w-full max-w-[2000px] grid-cols-2 px-20"
      >
        <motion.div
          className="sticky top-0 flex h-screen"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            {currProjectIdx === -1 ? (
              <motion.div
                key="header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className}`}
                layoutId="project-header"
              >
                projects
              </motion.div>
            ) : (
              <motion.div
                key={currProjectIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-1"
                layoutId={`project-details-${currProjectIdx}`}
              >
                {(() => {
                  const ProjectDetails = projects[currProjectIdx].body;
                  if (!ProjectDetails) {
                    return (
                      <div className="flex flex-1 items-center justify-center">
                        Project details not available
                      </div>
                    );
                  }
                  return <ProjectDetails />;
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col items-start justify-start py-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid w-full grid-cols-12 gap-4">
            {projects.map((project: ProjectCardInfo, index: number) => (
              <motion.div
                key={project.title + String(index)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`h-52 ${project.className || ""}`}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  githubLink={project.githubLink}
                  websiteLink={project.websiteLink}
                  projectIdx={index}
                  currProjectIdx={currProjectIdx}
                  setCurrProjectIdx={setCurrProjectIdx}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div
        ref={violinRef}
        className="grid min-h-screen w-full max-w-[2000px] grid-cols-2 px-20"
      >
        <motion.div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className} bg-background sticky top-0 h-screen`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          violin
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col items-center justify-center py-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex w-full flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <ViolinCard
                src="https://www.youtube.com/embed/H_k0UrGZF8Y?si=HnB05VqbgiV2Y-YQ"
                className="h-64 w-128"
                title="National Symphony Orchestra Summer Music Institute 2023"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className=""
            >
              <ViolinCard
                src="https://www.youtube.com/embed/9bvil3zuHy8?si=xZbYBQ6wZJiAUbFo"
                className="h-64 w-128"
                title="Maryland Classic Youth Orchestras 2023"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div
        ref={contactRef}
        className="grid min-h-screen w-full max-w-[2000px] grid-cols-2 px-20"
      >
        <motion.div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className} bg-background sticky top-0`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          contact
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col items-center justify-center py-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
