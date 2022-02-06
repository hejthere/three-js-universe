import { Sphere } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import MoonMap from "./Texture/moonmap2k.jpg";
import NormalMap from "./Texture/moonbump2k.jpg";
import { Physics, useBox } from "@react-three/cannon";

const Moon = () => {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [100, 100, 0],
  }));

  const [colorMap, MoonNormalMap] = useLoader(TextureLoader, [
    MoonMap,
    NormalMap,
  ]);

  return (
    <Sphere position={[100, 100, 0]} args={[8, 32, 32]} ref={ref}>
      <meshBasicMaterial attach="material" color="#4c7bd9" />
      <meshStandardMaterial map={colorMap} normalMap={MoonNormalMap} />
    </Sphere>
  );
};

export default Moon;
