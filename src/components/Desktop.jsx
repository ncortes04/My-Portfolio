import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import Loading from './Loading';

const Model = ({ model }) => {
  const modelGroup = useRef();
  const gltf = useLoader(GLTFLoader, model);
  const { camera, gl } = useThree();
  const renderer = gl.domElement;

  const controls = useRef();

  useEffect(() => {
    controls.current = new OrbitControls(camera, renderer);
    controls.current.enableDamping = true;
    controls.current.dampingFactor = 0.05;
    controls.current.rotateSpeed = 0.5;
    controls.current.minDistance = 15;
    controls.current.maxDistance = 70;
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

  const updateScale = () => {
    const screenWidth = window.innerWidth;
    let scaleFactor = 1;
    let cameraPosition = [20, 4, 4];

    if (screenWidth < 500) {
      scaleFactor = 0.4;
      cameraPosition = [9, 4, 1];
    } else if (screenWidth < 1200) {
      scaleFactor = 0.8;
      cameraPosition = [20, 4, 5];
    } else if (screenWidth < 1700) {
      scaleFactor = 0.7;
      cameraPosition = [20, 4, 5];
    }

    gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
    camera.position.set(...cameraPosition);
  };

  useEffect(() => {
    updateScale(); 

    window.addEventListener('resize', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, [gltf.scene, camera]);

  return (
    <group ref={modelGroup}>
      <primitive object={gltf.scene} />
    </group>
  );
};

const Three = ({ model, cameraPosition, fval }) => {
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
    <Canvas camera={{ position: [20, 4, 5], fov: 30 }}>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={100}
      />
      <pointLight intensity={1} />
      <Model model={model} />
    </Canvas>
  );
};

export default Three;
