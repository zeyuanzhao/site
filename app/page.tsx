"use client";

import { Roboto_Mono } from "next/font/google"; // eslint-disable-line camelcase
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Page() {
  const pageContainerRef = useRef<HTMLDivElement | null>(null);

  function useSmoothScrollSnap(
    containerRef: React.RefObject<HTMLDivElement | null>,
    sectionClass = "snap-section",
    duration = 800,
  ) {
    useEffect(() => {
      const container = containerRef.current;
      if (!container) {
        return undefined;
      }

      let isAnimating = false;
      const scrollTimeout: NodeJS.Timeout | null = null;

      const SCROLL_SENSITIVITY = 0.6;
      const SCROLL_SMOOTHING = 0.12;
      const MAX_SCROLL_SPEED = 20;
      const DECAY = 0.75;

      let scrollVelocity = 0;
      let targetVelocity = 0;
      let lastScrollTime = 0;
      let scrollAnimationId: number | null = null;

      let activeScrollableContent: HTMLElement | null = null;

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
          const eased = 1 - (1 - t) ** 3;
          container.scrollTop = start + change * eased;
          if (t < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            isAnimating = false;
          }
        }
        requestAnimationFrame(animateScroll);
      }

      function startSmoothScrolling() {
        if (scrollAnimationId) return;

        function smoothScrollLoop() {
          if (!activeScrollableContent) {
            scrollAnimationId = null;
            return;
          }

          const velocityDiff = targetVelocity - scrollVelocity;
          scrollVelocity += velocityDiff * SCROLL_SMOOTHING;

          const now = performance.now();
          if (now - lastScrollTime > 25) {
            targetVelocity *= DECAY;
          }

          scrollVelocity = Math.max(
            -MAX_SCROLL_SPEED,
            Math.min(MAX_SCROLL_SPEED, scrollVelocity),
          );

          if (Math.abs(scrollVelocity) > 0.1) {
            const newScrollTop = Math.max(
              0,
              Math.min(
                activeScrollableContent.scrollHeight -
                  activeScrollableContent.clientHeight,
                activeScrollableContent.scrollTop + scrollVelocity,
              ),
            );
            activeScrollableContent.scrollTop = newScrollTop;

            scrollAnimationId = requestAnimationFrame(smoothScrollLoop);
          } else {
            scrollVelocity = 0;
            targetVelocity = 0;
            scrollAnimationId = null;
          }
        }

        scrollAnimationId = requestAnimationFrame(smoothScrollLoop);
      }

      function addScrollInput(delta: number) {
        lastScrollTime = performance.now();
        targetVelocity += delta * SCROLL_SENSITIVITY;

        targetVelocity = Math.max(
          -MAX_SCROLL_SPEED * 2,
          Math.min(MAX_SCROLL_SPEED * 2, targetVelocity),
        );

        if (!scrollAnimationId) {
          startSmoothScrolling();
        }
      }

      function getCurrentSection() {
        if (!container) return -1;
        const sections = getSections();
        const { scrollTop } = container;
        const viewportHeight = container.clientHeight;
        const scrollCenter = scrollTop + viewportHeight / 2;

        return sections.findIndex(
          (sec) =>
            sec.offsetTop <= scrollCenter &&
            sec.offsetTop + sec.offsetHeight > scrollCenter,
        );
      }

      function isAtSectionEnd(direction: "up" | "down") {
        if (!container) return false;
        const sections = getSections();
        const current = getCurrentSection();
        if (current === -1) return false;

        const section = sections[current];
        const scrollableContent = section.querySelector(
          ".scrollable-content",
        ) as HTMLElement;

        if (!scrollableContent) {
          const { scrollTop } = container;
          const viewportHeight = container.clientHeight;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (direction === "down") {
            return scrollTop + viewportHeight >= sectionBottom - 50;
          }
          return scrollTop <= sectionTop + 50;
        }

        if (direction === "down") {
          return (
            scrollableContent.scrollTop + scrollableContent.clientHeight >=
            scrollableContent.scrollHeight - 5
          );
        }
        return scrollableContent.scrollTop <= 5;
      }

      function handleSectionTransition(direction: "up" | "down") {
        const sections = getSections();
        const current = getCurrentSection();
        if (current === -1) return false;

        let next = current;
        if (direction === "down" && current < sections.length - 1) {
          next = current + 1;
        } else if (direction === "up" && current > 0) {
          next = current - 1;
        }

        if (next !== current) {
          scrollToSection(sections[next]);
          return true;
        }
        return false;
      }

      function onWheel(e: WheelEvent) {
        if (isAnimating) {
          e.preventDefault();
          return;
        }

        const sections = getSections();
        const current = getCurrentSection();
        if (current === -1) return;

        const currentSection = sections[current];
        const scrollableContent = currentSection.querySelector(
          ".scrollable-content",
        ) as HTMLElement;

        if (scrollableContent) {
          activeScrollableContent = scrollableContent;

          const direction = e.deltaY > 0 ? "down" : "up";
          const atEnd = isAtSectionEnd(direction);

          if (!atEnd) {
            e.preventDefault();

            let scrollDelta = e.deltaY;

            if (e.deltaMode === WheelEvent.DOM_DELTA_LINE) {
              scrollDelta *= 16;
            } else if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
              scrollDelta *= scrollableContent.clientHeight * 0.8;
            }

            addScrollInput(scrollDelta);
            return;
          }
          activeScrollableContent = null;
          const didTransition = handleSectionTransition(direction);
          if (didTransition) {
            e.preventDefault();
          }
        } else {
          activeScrollableContent = null;
          const direction = e.deltaY > 0 ? "down" : "up";
          const didTransition = handleSectionTransition(direction);
          if (didTransition) {
            e.preventDefault();
          }
        }
      }

      container.addEventListener("wheel", onWheel, { passive: false });

      return () => {
        container.removeEventListener("wheel", onWheel);
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        if (scrollAnimationId) {
          cancelAnimationFrame(scrollAnimationId);
        }
      };
    }, [containerRef, sectionClass, duration]);
  }
  useSmoothScrollSnap(pageContainerRef);

  return (
    <div
      ref={pageContainerRef}
      className="dark dark:bg-background dark:text-foreground hide-scrollbar h-screen overflow-y-auto"
    >
      <div className="snap-section mx-auto flex h-screen w-full max-w-[1800px] flex-col items-center justify-center">
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
      <div className="snap-section mx-auto flex h-screen w-full max-w-[1800px] flex-row">
        <div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className}`}
        >
          about
        </div>
        <div className="scrollable-content hide-scrollbar mr-48 flex max-h-screen flex-1 flex-col items-center justify-center overflow-y-auto py-24">
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
      <div className="snap-section mx-auto flex min-h-screen w-full max-w-[1800px] flex-row">
        <div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className}`}
        >
          projects
        </div>
        <div className="scrollable-content hide-scrollbar mr-18 flex max-h-screen flex-1 flex-col items-start justify-start overflow-y-auto py-24">
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
          </div>
        </div>
      </div>
    </div>
  );
}
