import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTargetElement } from "../../redux/slices/scrollSlise";

const ScrollTarget = ({ id }) => {
  const myRef = useRef();
  const elementId = useSelector((state) => state.scroll.targetElement);
  const headerHeight = useSelector((state) => state.headerHeght.headerHeght);
  const dispatch = useDispatch();

  useEffect(() => {
    if (elementId === id) {
      const yOffset = -headerHeight;
      const element = myRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      dispatch(setTargetElement(null));
    }
  }, [elementId]);

  return <div ref={myRef} id={id}></div>;
};

export default ScrollTarget;
