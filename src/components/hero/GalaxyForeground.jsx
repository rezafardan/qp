// src/components/hero/GalaxyForeground.jsx
import React, { useRef, useEffect } from "react";

const GalaxyForeground = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Generate bintang foreground — posisi random di layar
    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.2 + 0.4,
      opacity: Math.random() * 0.35 + 0.1,
      vx: (Math.random() - 0.5) * 0.25,  // gerak mandiri pelan
      vy: (Math.random() - 0.5) * 0.25,
    }));

    // Parallax offset
    let offsetX = 0, offsetY = 0;
    let targetX = 0, targetY = 0;

    const onMouseMove = (e) => {
      // Foreground bergerak lebih cepat dari background → efek depth
      targetX = (e.clientX / window.innerWidth  - 0.5) * 80;
      targetY = (e.clientY / window.innerHeight - 0.5) * 80;
    };

    const onResize = () => {
      resize();
      // Re-scatter stars sesuai ukuran baru
      stars.forEach(s => {
        s.x = Math.random() * window.innerWidth;
        s.y = Math.random() * window.innerHeight;
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    const drawStar = (x, y, size, opacity) => {
      const grd = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
      grd.addColorStop(0,   `rgba(255,255,255,${opacity})`);
      grd.addColorStop(0.4, `rgba(255,255,255,${opacity * 0.5})`);
      grd.addColorStop(1,   "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.fillStyle = grd;
      ctx.arc(x, y, size * 3, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Lerp parallax offset
      offsetX += (targetX - offsetX) * 0.06;
      offsetY += (targetY - offsetY) * 0.06;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // Gerak mandiri pelan
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around layar
        if (star.x < -10) star.x = canvas.width + 10;
        if (star.x > canvas.width + 10) star.x = -10;
        if (star.y < -10) star.y = canvas.height + 10;
        if (star.y > canvas.height + 10) star.y = -10;

        // Posisi final = posisi star + parallax offset
        const px = star.x + offsetX;
        const py = star.y + offsetY;

        drawStar(px, py, star.size, star.opacity);
      });
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
  <canvas
    ref={canvasRef}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 50,           // ← di atas Hero (10) dan Navbar
      pointerEvents: "none",
    }}
  />
);
};

export default GalaxyForeground;
