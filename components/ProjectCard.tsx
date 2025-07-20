import { Button, Card, CardBody, Image } from "@heroui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiArrowsPointingOut, HiOutlineGlobeAlt } from "react-icons/hi2";
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
  return (
    <Card className={`${className} shadow-2xl shadow-white/20`} isFooterBlurred>
      <Image
        src={imageSrc}
        removeWrapper
        alt={title}
        className="h-full w-full object-cover"
      />
      <CardFooter className="bg-default/50 absolute bottom-0 z-10 w-full justify-between border-t-1 border-zinc-100/50">
        <div className="flex w-full flex-row items-center justify-between p-1">
          <p className="text-lg font-bold">{title}</p>
          <div className="flex items-center gap-2">
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
            <button
              className="hover:cursor-pointer"
              onClick={() => {
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
              <HiArrowsPointingOut />
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

/*
return (
    <div
      className={`relative flex justify-center transition-transform duration-500 hover:scale-102 ${
        className
      }`}
    >
      <div className="pointer-events-none absolute -top-5 left-1/2 z-10 w-[110%] -translate-x-1/2">
        <Image
          src={imageSrc}
          alt={title}
          className="h-auto w-full rounded-2xl border-4 border-white object-cover shadow-xl shadow-white/10"
        />
      </div>
      <Card className="relative border border-white/10 shadow-2xl shadow-white/10">
        <CardBody className="flex items-end justify-center px-4 pt-[calc(110%*0.53-32px)] pb-4">
          <div className="">
            <div className="mb-3 flex flex-row items-center justify-between">
              <p className="text-2xl font-bold hover:cursor-pointer hover:underline">
                {title}
              </p>
              <div className="flex items-center gap-2">
                {githubLink && (
                  <Button
                    isIconOnly
                    variant="ghost"
                    as={Link}
                    href={githubLink}
                    target="_blank"
                  >
                    <FaGithub />
                  </Button>
                )}
                {websiteLink && (
                  <Button
                    isIconOnly
                    variant="ghost"
                    as={Link}
                    href={websiteLink}
                    target="_blank"
                  >
                    <HiOutlineGlobeAlt />
                  </Button>
                )}
                <Button
                  isIconOnly
                  variant="ghost"
                  onPress={() => {
                    if (currProjectIdx !== undefined && projectIdx !== undefined && setCurrProjectIdx) {
                      setCurrProjectIdx?.(currProjectIdx === projectIdx ? -1 : projectIdx);
                    }
                  }}
                >
                  <HiArrowsPointingOut />
                </Button>
              </div>
            </div>
            <p className="">{description}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
*/
