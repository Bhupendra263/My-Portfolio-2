import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF(
    isMobile ? "./desktop_pc/scene_low_poly.gltf" : "./desktop_pc/scene.gltf"
  );

  return (
    <mesh>
      {/* Lighting */}
      <hemisphereLight intensity={1.2} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={isMobile ? 0.7 : 1}
        castShadow={isMobile ? false : true}
        shadow-mapSize={isMobile ? 512 : 1024}
      />
      <pointLight intensity={1} />

      {/* 3D Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3.5, -2.5] : [0, -4.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={!isMobile}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
