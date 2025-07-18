"use client";

import { Roboto_Mono } from "next/font/google"; // eslint-disable-line camelcase
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
          <div className="mb-6 flex flex-row items-center justify-center gap-6">
            <p>about</p>
            <p>projects</p>
            <p>violin</p>
            <p>contact</p>
          </div>
          <h1
            className={`before:animate-typewriter after:animate-caret relative w-[max-content] ${robotoMono.className} before:bg-background after:bg-foreground text-9xl before:absolute before:inset-0 after:absolute after:inset-0 after:w-[0.075em]`}
          >
            alex zhao
          </h1>
          <div className="mt-8 flex flex-row items-center justify-center">
            <Button size="icon" asChild>
              <Link href="https://github.com/zeyuanzhao" target="_blank">
                <FaGithub />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="grid min-h-screen w-full max-w-[2000px] grid-cols-2 px-20">
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
      <div className="grid min-h-screen w-full max-w-[2000px] grid-cols-2 px-20">
        <div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className} bg-background sticky top-0 h-screen`}
        >
          projects
        </div>
        <div className="flex flex-1 flex-col items-start justify-start py-24">
          <div className="flex w-full flex-1 flex-col items-start justify-start space-y-8">
            <ProjectCard
              title="Project 1"
              description="Description for project 1"
              className="w-full"
            />
            <ProjectCard
              title="Project 2"
              description="Description for project 2"
              className="w-full"
            />
            <ProjectCard
              title="Project 3"
              description="Description for project 3"
              className="w-full"
            />
            <ProjectCard
              title="Project 4"
              description="Description for project 4"
              className="w-full"
            />
            <ProjectCard
              title="Project 5"
              description="Description for project 5"
              className="w-full"
            />
            <ProjectCard
              title="Project 6"
              description="Description for project 6"
              className="w-full"
            />
            <ProjectCard
              title="Project 7"
              description="Description for project 7"
              className="w-full"
            />
            <ProjectCard
              title="Project 8"
              description="Description for project 8"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
