// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const ThreeModel = () => {
//   const containerRef = useRef(null);
//   const clockRef = useRef(new THREE.Clock());
//   const cameraRef = useRef(new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 100));
//   const sceneRef = useRef(new THREE.Scene());
//   const rendererRef = useRef(null);
//   const modelRef = useRef(null);
//   const mixerRef = useRef(null);

//   const api = { state: 'Wave' }; 

//   useEffect(() => {
//     init();
//     animate();

//     return () => {
//       // Clean up Three.js resources
//       rendererRef.current.dispose();
//     };
//   }, []);

//   const init = () => {
//     containerRef.current = document.createElement('div');
//     document.body.appendChild(containerRef.current);

//     cameraRef.current.position.set(-5, 3, 10);
//     cameraRef.current.lookAt(0, 2, 0);

//     sceneRef.current.background = new THREE.Color(0xe0e0e0);
//     sceneRef.current.fog = new THREE.Fog(0xe0e0e0, 20, 100);

//     const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
//     hemiLight.position.set(0, 20, 0);
//     sceneRef.current.add(hemiLight);

//     const dirLight = new THREE.DirectionalLight(0xffffff, 3);
//     dirLight.position.set(0, 20, 10);
//     sceneRef.current.add(dirLight);

//     const loader = new GLTFLoader();
//     loader.load('/RobotExpressive.glb', (gltf) => {
//       modelRef.current = gltf.scene;
//       sceneRef.current.add(modelRef.current);
//       mixerRef.current = new THREE.AnimationMixer(modelRef.current);
//       animateModel();
//     }, undefined, (error) => {
//       console.error(error);
//     });

//     rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
//     rendererRef.current.setPixelRatio(window.devicePixelRatio);
//     rendererRef.current.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(rendererRef.current.domElement);

//     window.addEventListener('resize', onWindowResize);
//   };

//   const animateModel = () => {
//     const clip = modelRef.current.animations.find((anim) => anim.name === 'Wave');
//     if (clip) {
//       const action = mixerRef.current.clipAction(clip);
//       action.setLoop(THREE.LoopRepeat, Infinity);
//       action.play();
//     }
//   };

//   const onWindowResize = () => {
//     cameraRef.current.aspect = window.innerWidth / window.innerHeight;
//     cameraRef.current.updateProjectionMatrix();
//     rendererRef.current.setSize(window.innerWidth, window.innerHeight);
//   };

//   const animate = () => {
//     const dt = clockRef.current.getDelta();
//     if (mixerRef.current) mixerRef.current.update(dt);

//     requestAnimationFrame(animate);
//     rendererRef.current.render(sceneRef.current, cameraRef.current);
//   };

//   return <div ref={containerRef} />;
// };

// export default ThreeModel;
