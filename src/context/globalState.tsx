import { createGlobalState } from "react-hooks-global-state";

interface InitialStateProps {
  currentChapter: string;
  isDarkMode: boolean;
  showKeyBinds: boolean;
  showInfoDialog: boolean;
}

const initialState: InitialStateProps = {
  currentChapter: "",
  isDarkMode: false,
  showKeyBinds: false,
  showInfoDialog: false,
};

const { setGlobalState, useGlobalState } = createGlobalState(initialState);

export { setGlobalState, useGlobalState };
