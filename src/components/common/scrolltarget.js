import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTargetElement } from "../../redux/slices/scrollSlise";

const ScrollTarget = ({ id }) => {
  const myRef = useRef();
  const elementId = useSelector((state) => state.scroll.targetElement);
  const dispatch = useDispatch();

  useEffect(() => {
    if (elementId == id) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
      dispatch(setTargetElement(null));
    }
  }, [elementId]);

  return <div ref={myRef}></div>;
};

export default ScrollTarget;
