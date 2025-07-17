import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-6 mb-6">
            <p>about</p>
            <p>projects</p>
            <p>violin</p>
            <p>contact</p>
          </div>
          <h1 className="text-9xl">alex zhao</h1>
          <div className="flex flex-row justify-center items-center mt-8">
            <Button size="icon" asChild>
              <Link href="https://github.com/zeyuanzhao" target="_blank">
                <FaGithub />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
