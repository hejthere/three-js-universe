import { Sphere } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import EarthMap from "./Texture/earthmap1k.jpg";
import NormalMap from "./Texture/earthspec1k.jpg";

const Earth = () => {
  const ref = useRef<THREE.Mesh>(null!);

  const [colorMap, EarthNormalMap] = useLoader(TextureLoader, [
    EarthMap,
    NormalMap,
  ]);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <Sphere position={[1, 1, 2]} args={[15, 32, 32]} ref={ref}>
      <meshBasicMaterial attach="material" color="#4c7bd9" />
      <meshStandardMaterial map={colorMap} normalMap={EarthNormalMap} />
    </Sphere>
  );
};

export default Earth;
