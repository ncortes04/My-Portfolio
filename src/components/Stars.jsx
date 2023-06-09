import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const sphere = inSphere(new Float32Array(5000), { radius: 10 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setIsMobile(innerWidth < 768 || innerHeight < 768);
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return null; // Render nothing on mobile devices
  }

  return (
    <div className="stars">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
