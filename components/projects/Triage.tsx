import Image from "next/image";
import {
  SiHuggingface,
  SiNvidia,
  SiOpenai,
  SiPandas,
  SiPython,
  SiPytorch,
} from "react-icons/si";

import { ULink } from "../ULink";

export function TriageDetails() {
  return (
    <div className="h-max-screen my-24 flex-1 overflow-auto pr-12">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-bold">Triage Predictor</h1>
      </div>
      <div className="flex flex-row justify-center">
        <Image src="/assets/triage.png" alt="ICDM" width={300} height={400} />
      </div>
      <div className="mt-8">
        <p>
          Independent AI research internship at the University of Maryland with
          Dr. Ang Li. Submitted first-author paper and was accepted to the IEEE
          International Conference on Data Mining, receiving a Rising Star
          Award.
          <br />
          <br />
          <b>Poster</b>:{" "}
          <ULink href="https://www.azhao.dev/icdm25poster.pdf">
            azhao.dev/icdm25poster.pdf
          </ULink>
          <br />
          <b>Presentation</b>:{" "}
          <ULink href="https://www.azhao.dev/icdm25presentation.pdf">
            azhao.dev/icdm25presentation.pdf
          </ULink>
          <br />
          <b>Paper</b>:{" "}
          <ULink href="https://www.azhao.dev/icdm25paper.pdf">
            azhao.dev/icdm25paper.pdf
          </ULink>
          <br />
          <b>Code</b>:{" "}
          <ULink href="https://github.com/zeyuanzhao/triagellm">
            github.com/zeyuanzhao/triagellm
          </ULink>
          <br />
        </p>
        <div className="my-4 flex flex-row items-center gap-2">
          <SiHuggingface />
          <SiPython />
          <SiOpenai />
          <SiNvidia />
          <SiPandas />
          <SiPytorch />
        </div>
        <h2 className="text-3xl font-bold">Summary</h2>
        <p>
          I trained a light open-weight large language model to predict
          Emergency Severity Index (ESI) triage levels for patients based on key
          data points, such as vitals, chief complaint, pain level, and a brief
          history.
        </p>
      </div>
    </div>
  );
}
