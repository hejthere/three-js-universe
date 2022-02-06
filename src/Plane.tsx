import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { usePlane } from "@react-three/cannon";

function Plane(props: any) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="red" transparent opacity={0.4} />
    </mesh>
  );
}
export default Plane;
