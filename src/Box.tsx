import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Box(props: any) {
  const ref = useRef();
  // Hold state for hovered and clicked events

  return (
    <mesh {...props} ref={ref} position={[0, 2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default Box;
