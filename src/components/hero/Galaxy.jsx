// src/components/hero/Galaxy.jsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

// ── Buat texture lingkaran dari canvas
const createStarTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  // Radial gradient → tengah putih penuh, tepi transparan
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0,    "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.3,  "rgba(255, 255, 255, 0.8)");
  gradient.addColorStop(0.7,  "rgba(255, 255, 255, 0.2)");
  gradient.addColorStop(1,    "rgba(255, 255, 255, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  return new THREE.CanvasTexture(canvas);
};

const Galaxy = () => {
  const mountRef = useRef(null);
  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });
  const autoRot = useRef({ x: 0, y: 0 });
  const rendererRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 3000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const starTexture = createStarTexture(); // ← satu texture, shared semua layer

    const makeStarsSphere = (count, rMin, rMax, color, size, opacity) => {
      const geo = new THREE.BufferGeometry();
      const verts = [];
      for (let i = 0; i < count; i++) {
        const r     = THREE.MathUtils.randFloat(rMin, rMax);
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos(2 * Math.random() - 1);
        verts.push(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        );
      }
      geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
      const mat = new THREE.PointsMaterial({
        color,
        size,
        map: starTexture,          // ← texture lingkaran
        transparent: true,
        opacity,
        alphaTest: 0.01,           // ← buang pixel transparan di tepi
        depthWrite: false,         // ← cegah z-fighting antar bintang
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending, // ← bintang overlap → tambah terang (glow)
      });
      return { points: new THREE.Points(geo, mat), geo, mat };
    };

    const far  = makeStarsSphere(6000, 700, 1500, 0xffffff, 1.8,  0.9);
    const mid  = makeStarsSphere(2000, 800, 600,  0xddeeff, 2.5,  0.7);
    const near = makeStarsSphere(500,  600,  200,  0xffffff, 3.5,  0.3);

    [far, mid, near].forEach(({ points }) => scene.add(points));

    camera.position.z = 0;

    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRot.current.x = y * 0.3;
      targetRot.current.y = x * 0.3;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      autoRot.current.x += 0.0003;
      autoRot.current.y += 0.0005;

      const lerp = 0.018;
      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * lerp;
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * lerp;

      const rx = currentRot.current.x + autoRot.current.x;
      const ry = currentRot.current.y + autoRot.current.y;

      far.points.rotation.x  = rx * 0.4;  far.points.rotation.y  = ry * 0.4;
      mid.points.rotation.x  = rx * 0.7;  mid.points.rotation.y  = ry * 0.7;
      near.points.rotation.x = rx * 1.1;  near.points.rotation.y = ry * 1.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      starTexture.dispose();
      [far, mid, near].forEach(({ geo, mat }) => { geo.dispose(); mat.dispose(); });
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (mountRef.current) mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current = null;
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full fixed -z-10" />;
};

export default Galaxy;
