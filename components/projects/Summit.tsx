import Image from "next/image";

import { ULink } from "../ULink";

export function SummitDetails() {
  return (
    <div className="h-max-screen my-24 flex-1 overflow-auto pr-12">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-bold">Summit</h1>
      </div>
      <div className="flex flex-row justify-center">
        <Image src="/assets/summit.png" alt="Summit" width={600} height={400} />
      </div>
      <div className="mt-8">
        <p>
          Created an app for discovering trending research papers in a
          personalized feed.
          <br />
          <br />
          <b>Poster</b>:{" "}
          <ULink href="https://www.azhao.dev/icdm25poster.pdf">
            azhao.dev/icdm25poster.pdf
          </ULink>
          <br />
        </p>
        <div className="flex flex-row items-center gap-2" />
      </div>
    </div>
  );
}
