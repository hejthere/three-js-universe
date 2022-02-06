import React, { Suspense, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./Box";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sky, Sphere, Stars } from "@react-three/drei";
import Plane from "./Plane";
import Earth from "./Earth";
import Moon from "./Moon";
import { Physics, usePlane } from "@react-three/cannon";

function App() {
  return (
    <Canvas
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: "black",
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls zoomSpeed={0.5} minZoom={1} />
        <Stars radius={300} depth={60} fade={true} count={20000} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Box />
          <Earth />
          <Moon />
          <Plane />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default App;
