import { createGlobalState } from "react-hooks-global-state";

interface InitialStateProps {
  currentChapter: string;
  isDarkMode: boolean;
}

const initialState: InitialStateProps = {
  currentChapter: "",
  isDarkMode: false,
};

const { setGlobalState, useGlobalState } = createGlobalState(initialState);

export { setGlobalState, useGlobalState };
