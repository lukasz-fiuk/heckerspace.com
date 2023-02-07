import { Modules } from "2_sections/ModuleRenderer/ModuleRenderer";

export const extractChapterNames = (modules: Modules) => {
  const chapterNames: Array<string> = [];
  modules.forEach((module) => {
    if (module.__typename === "Chapter") {
      chapterNames.push(module.chapterName);
    }
  });
  return chapterNames;
};
