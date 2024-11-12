import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Galaxy = () => {
  const mountRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  const autoRotation = useRef({ x: 0, y: 0 });
  const rendererRef = useRef(null);
  const frameIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const numStars = 2000;

    for (let i = 0; i < numStars; i++) {
      const x = THREE.MathUtils.randFloatSpread(2500);
      const y = THREE.MathUtils.randFloatSpread(1250);
      const z = THREE.MathUtils.randFloatSpread(2500);
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

    // Handler untuk mouse movement
    const handleMouseMove = (event) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      targetRotation.current.x = mousePosition.current.y * 0.5;
      targetRotation.current.y = mousePosition.current.x * 0.5;
    };

    // Handler untuk window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      // Update auto rotation
      autoRotation.current.x += 0.001;
      autoRotation.current.y += 0.001;

      // Lerp untuk mouse movement
      const lerpFactor = 0.02;
      currentRotation.current.x +=
        (targetRotation.current.x - currentRotation.current.x) * lerpFactor;
      currentRotation.current.y +=
        (targetRotation.current.y - currentRotation.current.y) * lerpFactor;

      // Kombinasikan auto rotation dengan mouse rotation
      stars.rotation.x = currentRotation.current.x + autoRotation.current.x;
      stars.rotation.y = currentRotation.current.y + autoRotation.current.y;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }

      geometry.dispose();
      material.dispose();

      if (rendererRef.current) {
        rendererRef.current.dispose();

        if (mountRef.current) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }

        rendererRef.current = null;
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full fixed -z-10" />;
};

export default Galaxy;
