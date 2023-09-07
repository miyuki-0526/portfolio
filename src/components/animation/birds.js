import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

function Birds({ el }) {
  const myRef = useRef(null);

  useEffect(() => {
    const vantaEffect = BIRDS({
      el: myRef.current,
      color1: 0x3a6fd2,
      color2: 0xc882c8,
      THREE: THREE,
      touchControls: true,
      gyroControls: false,
      minHeight: 1000.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      colorMode: "variance",
      backgroundAlpha: 0.0,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={myRef}>{el}</div>;
}

export default Birds;
