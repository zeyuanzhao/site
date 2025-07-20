import { Card, Image } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

import { CardFooter } from "./ui/card";

export function ProjectCard({
  title = "Project Title",
  description = "Project Description",
  className = "",
  imageSrc = undefined,
  githubLink = "",
  websiteLink = "",
  currProjectIdx,
  setCurrProjectIdx,
  projectIdx,
}: {
  title: string;
  description: string;
  className?: string;
  imageSrc?: string | undefined;
  githubLink?: string;
  websiteLink?: string;
  currProjectIdx?: number;
  setCurrProjectIdx?: (idx: number) => void;
  projectIdx?: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      className={`${className} group relative overflow-hidden shadow-2xl shadow-white/20`}
      isFooterBlurred
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imageSrc}
        removeWrapper
        alt={title}
        className="h-full w-full object-cover"
      />
      <AnimatePresence>
        <motion.div
          initial={{ height: 40, opacity: 1 }}
          animate={
            hovered
              ? { height: "100%", opacity: 1 }
              : { height: 40, opacity: 1 }
          }
          exit={{ height: 40, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute bottom-0 left-0 z-10 w-full hover:cursor-pointer"
          style={{ pointerEvents: "none" }}
          onClick={(e) => {
            e.stopPropagation();
            if (
              currProjectIdx !== undefined &&
              projectIdx !== undefined &&
              setCurrProjectIdx
            ) {
              setCurrProjectIdx?.(
                currProjectIdx === projectIdx ? -1 : projectIdx,
              );
            }
          }}
        >
          <CardFooter
            className={`bg-default/80 flex h-full w-full flex-col justify-end p-0 ${
              hovered
                ? "justify-start pt-4"
                : "justify-center border-t-1 border-zinc-100/50"
            }`}
            style={{ pointerEvents: "auto" }}
          >
            <div className="flex w-full flex-row items-center justify-between px-4">
              <p className="text-lg font-bold">{title}</p>
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2"
                  >
                    {githubLink && (
                      <Link href={githubLink} target="_blank">
                        <FaGithub />
                      </Link>
                    )}
                    {websiteLink && (
                      <Link href={websiteLink} target="_blank">
                        <HiOutlineGlobeAlt />
                      </Link>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                  className="px-4 pt-1 pb-4"
                >
                  <p className="text-sm text-zinc-100/90">{description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </CardFooter>
        </motion.div>
      </AnimatePresence>
    </Card>
  );
}
