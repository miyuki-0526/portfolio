import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

const Birds = ({ el }) => {
  const myRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!vantaEffect.current) {
        vantaEffect.current = BIRDS({
          el: myRef.current,
          color1: 0x3a6fd2,
          color2: 0xc882c8,
          THREE: THREE,
          touchControls: true,
          gyroControls: false,
          minHeight: window.innerHeight + 30,
          minWidth: window.innerWidth,
          scale: 1.0,
          scaleMobile: 1.0,
          colorMode: "variance",
          backgroundAlpha: 0.0,
        });
      }
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return <div ref={myRef}>{el}</div>;
};

export default Birds;
