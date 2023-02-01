import { useEffect } from "react";

/*

### Usage ###

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useDisableScroll(isModalOpen);

  ...
}

*/

const useDisableScroll = (disable = true) => {
  useEffect(() => {
    disable
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "visible");

    return () => {
      document.documentElement.style.overflow = "visible";
    };
  }, [disable]);
};

export default useDisableScroll;
