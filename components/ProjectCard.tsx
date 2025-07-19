import { Card, CardBody, CardFooter, Image } from "@heroui/react";

export function ProjectCard({
  title = "Project Title",
  description = "Project Description",
  className = "",
  imageSrc = undefined,
}: {
  title: string;
  description: string;
  className?: string;
  imageSrc?: string | undefined;
}) {
  return (
    <div className={"relative flex justify-center " + className}>
      <div className="pointer-events-none absolute -top-5 left-1/2 z-10 w-[110%] -translate-x-1/2">
        <Image
          src={imageSrc}
          alt={title}
          className="h-auto w-full rounded-2xl border-4 border-white object-cover shadow-xl shadow-white/10"
        />
      </div>
      <Card className="relative border border-white/10 shadow-2xl shadow-white/10">
        <CardBody className="h-1/3" />
        <CardFooter className="p-4">
          <div className="">
            <p className="mb-2 text-2xl font-bold">{title}</p>
            <p>{description}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
