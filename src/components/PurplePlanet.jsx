import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import Loading from './Loading';

const Model = ({ model }) => {
  const modelGroup = useRef();
  const gltf = useLoader(GLTFLoader, model);
  const { camera, gl } = useThree();
  const renderer = gl.domElement;
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let scaleFactor;
    
      if (width >= 1500) {
        scaleFactor = 1.5;
      } else if (width >= 950) {
        scaleFactor = 1.2;
      } else if (width >= 700) {
        scaleFactor = 1;
      } else {
        scaleFactor = 1; // Default scale factor for widths below 700px
      }
    
      setScaleFactor(scaleFactor);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const sceneNames = gltf.scene.children.map((child) => child.name);
    console.log(sceneNames); // Log the scene names to the console
  }, [gltf.scene]);

  const controls = useRef();

  useEffect(() => {
    controls.current = new OrbitControls(camera, renderer);
    controls.current.enableDamping = true;
    controls.current.dampingFactor = 0.05;
    controls.current.rotateSpeed = 0.1;
    controls.current.minDistance = 5;
    controls.current.maxDistance = 20;
    controls.current.enableZoom = false;

    return () => {
      controls.current.dispose();
    };
  }, [camera, renderer]);

  const animate = () => {
    controls.current.update();
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
  }, []);

  useFrame(() => {
    modelGroup.current.rotation.y += 0.005;
  });

  return (
    <group ref={modelGroup} scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <primitive object={gltf.scene} />
    </group>
  );
};

const Three = ({ model }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      model,
      (gltf) => {
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
        setLoading(false);
      }
    );
  }, [model]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Canvas camera={{ position: [3, 10, 15], fov: 11 }}>
      <hemisphereLight intensity={.6} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={100}
      />
      <pointLight intensity={.6} />
      <Model model={model} />
    </Canvas>
  );
};

export default Three;
