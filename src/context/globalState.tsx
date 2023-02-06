import { createGlobalState } from "react-hooks-global-state";

interface InitialStateProps {
  currentChapter: string;
  isDarkMode: boolean;
  showKeyBinds: boolean;
}

const initialState: InitialStateProps = {
  currentChapter: "",
  isDarkMode: false,
  showKeyBinds: false,
};

const { setGlobalState, useGlobalState } = createGlobalState(initialState);

export { setGlobalState, useGlobalState };
