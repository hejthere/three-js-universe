import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Sphere(props: any) {
  const ref = useRef();
  // Hold state for hovered and clicked events

  return (
    <mesh {...props} ref={ref} position={[0, 4, 0]}>
      <sphereBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default Sphere;
