import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Page() {
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex flex-row items-center justify-center gap-6">
            <p>about</p>
            <p>projects</p>
            <p>violin</p>
            <p>contact</p>
          </div>
          <h1
            className={`before:animate-typewriter after:animate-caret relative w-[max-content] ${robotoMono.className} text-9xl before:absolute before:inset-0 before:bg-white after:absolute after:inset-0 after:w-[0.075em] after:bg-black`}
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
    </div>
  );
}
