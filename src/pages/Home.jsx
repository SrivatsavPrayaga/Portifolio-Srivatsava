import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const cameraRef = useRef();

  // Camera positions for each stage - smooth transitions
  const cameraPositions = {
    1: { pos: [0, 0, 20], target: [0, 0, 0], fov: 50 },
    2: { pos: [-15, 8, 15], target: [0, 0, 0], fov: 50 },
    3: { pos: [15, 8, 15], target: [0, 0, 0], fov: 50 },
    4: { pos: [0, 5, 25], target: [0, 0, 0], fov: 50 }
  };

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // Animate camera to new position when stage changes
  const animateCamera = (targetPos, targetFov) => {
    if (!cameraRef.current) return;

    const camera = cameraRef.current;
    const startPos = [camera.position.x, camera.position.y, camera.position.z];
    const startFov = camera.fov;
    const duration = 1000; // 1 second
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      camera.position.x = startPos[0] + (targetPos[0] - startPos[0]) * easeProgress;
      camera.position.y = startPos[1] + (targetPos[1] - startPos[1]) * easeProgress;
      camera.position.z = startPos[2] + (targetPos[2] - startPos[2]) * easeProgress;
      camera.fov = startFov + (targetFov - startFov) * easeProgress;
      camera.updateProjectionMatrix();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const handleStageChange = (stage) => {
    setCurrentStage(stage);
    const camConfig = cameraPositions[stage];
    animateCamera(camConfig.pos, camConfig.fov);
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* Interactive stage indicators */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex gap-4'>
        {[1, 2, 3, 4].map((stage) => (
          <button
            key={stage}
            onClick={() => handleStageChange(stage)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentStage === stage
                ? 'bg-blue-500 scale-125'
                : 'bg-gray-400 hover:bg-gray-300 cursor-pointer'
            }`}
            title={['Home', 'Skills', 'Projects', 'Contact'][stage - 1]}
          />
        ))}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ position: [0, 0, 20], near: 0.1, far: 1000, fov: 50 }}
        onCreated={({ camera }) => {
          cameraRef.current = camera;
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={handleStageChange}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />

          {/* Floating particles for visual effect */}
          <Particles />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>

      {/* Stage labels for desktop */}
      <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-sm text-gray-400 hidden md:block'>
        {currentStage === 1 && 'Drag to explore • Click indicators below'}
        {currentStage === 2 && '🤖 AI & Agentic Solutions'}
        {currentStage === 3 && '💻 Cloud & Enterprise Tech'}
        {currentStage === 4 && '✨ Connect & Collaborate'}
      </div>
    </section>
  );
};

// Simple particle effect component
const Particles = () => {
  const particlesRef = useRef();

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    const geometry = new THREE.BufferGeometry();
    const particleCount = 20;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 40;
      positions[i + 1] = Math.random() * 20;
      positions[i + 2] = (Math.random() - 0.5) * 40;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    particles.geometry = geometry;
  }, []);

  return null; // Particles added via canvas
};

export default Home;
