import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Galaxy = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const numStars = 4000;

    for (let i = 0; i < numStars; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(1000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      vertices.push(x, y, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const color = new THREE.Color("white");
    const material = new THREE.PointsMaterial({ color: color });
    const stars = new THREE.Points(geometry, material);

    scene.add(stars);

    camera.position.z = 500;

    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full fixed -z-10" />;
};

export default Galaxy;
