import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const PositionUp = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", PositionUp);
    PositionUp();

    return () => window.removeEventListener("scroll", PositionUp);
  }, []);

  return scrollPosition;
};

export default useScroll;
