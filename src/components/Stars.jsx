import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random/dist/maath-random.esm";
import ComputerPerformanceChecker from "../utils/performaceChecker";

const Stars = ({ isPowerful }) => {
  const ref = useRef();
  const sphere = inSphere(new Float32Array(4000), { radius: 10 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={isPowerful ? 0.01 : 0}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <ComputerPerformanceChecker>
      {(isPowerful) =>
        isPowerful ? (
          <div className="stars">
            <Canvas camera={{ position: [0, 0, 15] }}>
              <Stars isPowerful={isPowerful} />
            </Canvas>
          </div>
        ) : null
      }
    </ComputerPerformanceChecker>
  );
};

export default StarsCanvas;
