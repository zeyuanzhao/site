"use client";

import { Roboto_Mono } from "next/font/google"; // eslint-disable-line camelcase
import Link from "next/link";
import { useEffect, useRef, useLayoutEffect } from "react";
import { FaGithub } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Page() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  function useSmoothScrollSnap(
    containerRef: React.RefObject<HTMLDivElement | null>,
    sectionClass = "snap-section",
    duration = 600,
  ) {
    useEffect(() => {
      const container = containerRef.current;
      if (!container) {
        return undefined;
      }

      let isAnimating = false;

      const getSections = () =>
        Array.from(container.querySelectorAll<HTMLElement>(`.${sectionClass}`));

      function scrollToSection(target: HTMLElement) {
        if (!target || !container) return;
        isAnimating = true;
        const start = container.scrollTop;
        const end = target.offsetTop;
        const change = end - start;
        const startTime = performance.now();

        function animateScroll(now: number) {
          if (!container) return;
          const elapsed = now - startTime;
          const t = Math.min(elapsed / duration, 1);
          const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          container.scrollTop = start + change * eased;
          if (t < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            isAnimating = false;
          }
        }
        requestAnimationFrame(animateScroll);
      }

      function onWheel(e: WheelEvent) {
        if (isAnimating || !container) {
          e.preventDefault();
          return;
        }
        const sections = getSections();
        const current = sections.findIndex(
          (sec) =>
            sec.offsetTop <= container.scrollTop + 10 &&
            sec.offsetTop + sec.offsetHeight > container.scrollTop + 10,
        );
        if (current === -1) return;
        let next = current;
        if (e.deltaY > 0 && current < sections.length - 1) next = current + 1;
        else if (e.deltaY < 0 && current > 0) next = current - 1;
        if (next !== current) {
          e.preventDefault();
          scrollToSection(sections[next]);
        }
      }

      container.addEventListener("wheel", onWheel, { passive: false });
      return () => {
        container.removeEventListener("wheel", onWheel);
      };
    }, [containerRef, sectionClass, duration]);
  }

  useSmoothScrollSnap(scrollRef);

  return (
    <div
      ref={scrollRef}
      className="dark dark:bg-background dark:text-foreground h-screen overflow-y-auto"
    >
      <div className="snap-section flex h-screen w-full flex-col items-center justify-center">
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
      <div className="snap-section flex h-screen w-full flex-row">
        <div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className}`}
        >
          about
        </div>
        <div className="flex flex-1 flex-col items-center justify-center py-24 pr-48">
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
      <div className="snap-section flex h-screen w-full flex-row">
        <div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className}`}
        >
          projects
        </div>
        <div className="h- flex h-[200lvh] flex-1 flex-col items-center justify-center border py-24 pr-48"></div>
      </div>
    </div>
  );
}
