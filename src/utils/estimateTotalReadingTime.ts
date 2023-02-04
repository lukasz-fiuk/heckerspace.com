import { Modules } from "2_sections/ModuleRenderer/ModuleRenderer";

import { estimateReadingTimeInMinutes } from "./estimateReadingTime";

export const estimateTotalReadingTime = (modules: Modules): number => {
  let readingTime = 0;

  modules.forEach((module: { __typename: string; content?: string }) => {
    if (module.__typename === "Chapter" && module.content) {
      readingTime = readingTime + estimateReadingTimeInMinutes(module.content);
    }
  });

  return readingTime;
};
