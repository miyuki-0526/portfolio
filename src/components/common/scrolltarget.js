import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const ScrollTarget = ({ id }) => {
  const myRef = useRef();
  const elementId = useSelector((state) => state.scroll.targetElement);

  useEffect(() => {
    console.log("useEffec");
    if (elementId == id) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [elementId]);

  return <div ref={myRef}>{id}</div>;
};

export default ScrollTarget;
