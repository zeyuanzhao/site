"use client";

import "lenis/dist/lenis.css";

import Lenis from "lenis";
import { Roboto_Mono } from "next/font/google"; // eslint-disable-line camelcase
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

import { ProjectCard } from "@/components/ProjectCard";
import { HiEnvelope } from "react-icons/hi2";
import { Button } from "@heroui/react";

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
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="dark dark:bg-background dark:text-foreground flex min-h-screen flex-col items-center">
      <div className="flex min-h-screen w-full max-w-[2000px] flex-col items-center justify-center px-20">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="mb-6 flex flex-row items-center justify-center gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  delayChildren: 3,
                  staggerChildren: 0.1,
                },
              },
              hidden: {},
            }}
          >
            <motion.button
              type="button"
              onClick={() => handleScrollTo(aboutRef)}
              className="hover:cursor-pointer hover:underline focus:outline-none"
              variants={jumpToSectionVariants}
            >
              about
            </motion.button>
            <motion.button
              type="button"
              onClick={() => handleScrollTo(projectsRef)}
              className="hover:cursor-pointer hover:underline focus:outline-none"
              variants={jumpToSectionVariants}
            >
              projects
            </motion.button>
            <motion.button
              type="button"
              onClick={() => handleScrollTo(violinRef)}
              className="hover:cursor-pointer hover:underline focus:outline-none"
              variants={jumpToSectionVariants}
            >
              violin
            </motion.button>
            <motion.button
              type="button"
              onClick={() => handleScrollTo(contactRef)}
              className="hover:cursor-pointer hover:underline focus:outline-none"
              variants={jumpToSectionVariants}
            >
              contact
            </motion.button>
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
                  delayChildren: 4,
                  staggerChildren: 0.15,
                },
              },
              hidden: {},
            }}
          >
            <motion.div variants={socialsVariants}>
              <Button isIconOnly variant="ghost">
                <Link href="https://github.com/zeyuanzhao" target="_blank">
                  <FaGithub />
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={socialsVariants}>
              <Button isIconOnly variant="ghost">
                <Link href="mailto:contact@azhao.dev" target="_blank">
                  <HiEnvelope />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div
        ref={aboutRef}
        className="grid min-h-screen w-full max-w-[2000px] grid-cols-2 px-20"
      >
        <div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className} bg-background sticky top-0 h-screen`}
        >
          about
        </div>
        <div className="flex flex-1 flex-col items-center justify-center py-24">
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
        </div>
      </div>
      <div
        ref={projectsRef}
        className="grid min-h-screen w-full max-w-[2000px] grid-cols-2 px-20"
      >
        <div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className} bg-background sticky top-0 h-screen`}
        >
          projects
        </div>
        <div className="flex flex-1 flex-col items-start justify-start py-24">
          <div className="grid w-full grid-cols-12 gap-16">
            <ProjectCard
              title="Project 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
              className="col-span-6 min-h-80"
              imageSrc={"/assets/summit.png"}
              githubLink="https://github.com/zeyuanzhao/summit"
              websiteLink="https://summitapp.azhao.dev"
            />
            <ProjectCard
              title="Project 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
              className="col-span-6 min-h-80"
              imageSrc={"/assets/summit.png"}
            />
            <ProjectCard
              title="Project 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
              className="col-span-6 min-h-80"
              imageSrc={"/assets/summit.png"}
            />
          </div>
        </div>
      </div>
      <div
        ref={violinRef}
        className="grid min-h-screen w-full max-w-[2000px] grid-cols-2 px-20"
      >
        <div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className} bg-background sticky top-0 h-screen`}
        >
          violin
        </div>
        <div className="flex flex-1 flex-col items-center justify-center py-24">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      {/* Contact section placeholder */}
      <div
        ref={contactRef}
        className="grid min-h-screen w-full max-w-[2000px] grid-cols-2 px-20"
      >
        <div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className} bg-background sticky top-0`}
        >
          contact
        </div>
        <div className="flex flex-1 flex-col items-center justify-center py-24">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
