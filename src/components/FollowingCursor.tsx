'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function FollowingCursor() {
  const [isVisible, setIsVisible] = useState(false);


  const smoothX = useSpring(0, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });
  const smoothY = useSpring(0, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
    };


    setIsVisible(true);

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseenter', () => setIsVisible(true));
    window.addEventListener('mouseleave', () => setIsVisible(false));

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    smoothX.set(initialX);
    smoothY.set(initialY);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseenter', () => setIsVisible(true));
      window.removeEventListener('mouseleave', () => setIsVisible(false));
    };
  }, [smoothX, smoothY]);
  return (
    <motion.div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent ring-1 ring-white/75 mix-blend-color transition-opacity duration-200 ease-out mix-blend-difference ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        x: smoothX,
        y: smoothY,
      }}
    />
  );
} 