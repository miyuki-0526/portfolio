import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

const Birds = ({ el }) => {
  const myRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (!vantaEffect.current) {
        vantaEffect.current = BIRDS({
          el: myRef.current,
          color1: 0x3a6fd2,
          color2: 0xc882c8,
          THREE: THREE,
          touchControls: true,
          gyroControls: false,
          minHeight: window.innerHeight,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          colorMode: "variance",
          backgroundAlpha: 0.0,
        });
      }
      return () => {
        if (vantaEffect.current) vantaEffect.current.destroy();
      };
    }, 4000);
  }, []);

  return <div ref={myRef}>{el}</div>;
};

export default Birds;
