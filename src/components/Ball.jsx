import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

const Sphere = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [scale, setScale] = useState(2.75);

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 700) {
        setScale(2);
      } else if (screenWidth < 1200) {
        setScale(2.2);
      } else {
        setScale(2.75);
      }
    };

    updateScale();

    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <Float speed={0} rotationIntensity={0} floatIntensity={0}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 5, 0]} intensity={2} />
      <mesh castShadow receiveShadow scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ logo }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls enableZoom={false} />
      <Sphere imgUrl={logo.image} />
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
