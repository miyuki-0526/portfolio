import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTargetElement } from "../../redux/slices/scrollSlise";

const ScrollTarget = ({ id }) => {
  const myRef = useRef();
  const elementId = useSelector((state) => state.scroll.targetElement);
  const dispatch = useDispatch();

  useEffect(() => {
    if (elementId === id) {
      const yOffset = -100; // 30px上にオフセット
      const element = myRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      dispatch(setTargetElement(null));
    }
  }, [elementId]);

  return <div ref={myRef} id={id}></div>;
};

export default ScrollTarget;
