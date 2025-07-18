"use client";

import { Roboto_Mono } from "next/font/google"; // eslint-disable-line camelcase
import Link from "next/link";
import { useEffect, useRef, useLayoutEffect } from "react";
import { FaGithub } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

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
      let lastScrollTime = 0;
      let scrollTimeout: NodeJS.Timeout | null = null;

      const SCROLL_SPEED = 400;
      const SCROLL_DURATION = 1000;

      let isContentAnimating = false;
      let contentAnimationId: number | null = null;

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
          const eased = 1 - Math.pow(1 - t, 3);
          container.scrollTop = start + change * eased;
          if (t < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            isAnimating = false;
          }
        }
        requestAnimationFrame(animateScroll);
      }

      function smoothScrollContent(
        element: HTMLElement,
        direction: "up" | "down",
      ) {
        if (contentAnimationId) {
          cancelAnimationFrame(contentAnimationId);
        }

        isContentAnimating = true;
        const start = element.scrollTop;
        const scrollDistance = SCROLL_SPEED * (direction === "down" ? 1 : -1);
        const end = Math.max(
          0,
          Math.min(
            element.scrollHeight - element.clientHeight,
            start + scrollDistance,
          ),
        );
        const change = end - start;

        if (Math.abs(change) < 1) {
          isContentAnimating = false;
          return;
        }

        const startTime = performance.now();

        function animateContentScroll(now: number) {
          const elapsed = now - startTime;
          const t = Math.min(elapsed / SCROLL_DURATION, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          element.scrollTop = start + change * eased;

          if (t < 1) {
            contentAnimationId = requestAnimationFrame(animateContentScroll);
          } else {
            isContentAnimating = false;
            contentAnimationId = null;
          }
        }

        contentAnimationId = requestAnimationFrame(animateContentScroll);
      }

      function getCurrentSection() {
        if (!container) return -1;
        const sections = getSections();
        const scrollTop = container.scrollTop;
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
          const scrollTop = container.scrollTop;
          const viewportHeight = container.clientHeight;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (direction === "down") {
            return scrollTop + viewportHeight >= sectionBottom - 50;
          } else {
            return scrollTop <= sectionTop + 50;
          }
        }

        if (direction === "down") {
          return (
            scrollableContent.scrollTop + scrollableContent.clientHeight >=
            scrollableContent.scrollHeight - 5
          );
        } else {
          return scrollableContent.scrollTop <= 5;
        }
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
        const direction = e.deltaY > 0 ? "down" : "up";

        if (scrollableContent) {
          const atEnd = isAtSectionEnd(direction);

          if (!atEnd) {
            e.preventDefault();
            smoothScrollContent(scrollableContent, direction);
            return;
          }
          const didTransition = handleSectionTransition(direction);
          if (didTransition) {
            e.preventDefault();
            return;
          }
        } else {
          const didTransition = handleSectionTransition(direction);
          if (didTransition) {
            e.preventDefault();
            return;
          }
        }
      }

      container.addEventListener("wheel", onWheel, { passive: false });

      return () => {
        container.removeEventListener("wheel", onWheel);
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        if (contentAnimationId) {
          cancelAnimationFrame(contentAnimationId);
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
        <div className="scrollable-content hide-scrollbar flex max-h-screen flex-1 flex-col items-center justify-center overflow-y-auto py-24 pr-48">
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
      <div className="snap-section flex min-h-screen w-full flex-row">
        <div
          className={`flex flex-1 flex-col items-center justify-center text-7xl ${robotoMono.className}`}
        >
          projects
        </div>
        <div className="scrollable-content hide-scrollbar flex max-h-screen flex-1 flex-col items-start justify-start overflow-y-auto py-24 pr-48">
          <div className="space-y-8">
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 1</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 2</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 3</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 4</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 5</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. At
                vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 6</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 6</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 6</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 6</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 6</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 6</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-2xl font-bold">Project 6</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
