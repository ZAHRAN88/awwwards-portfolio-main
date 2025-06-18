'use client'
import React, { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface RevealTextProps {
  children: ReactNode | string;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  repeat?: boolean;
  dark?: boolean;
}

export const RevealText = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
  direction = 'up',
  repeat = false,
  dark = false,
}: RevealTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: !repeat, amount: threshold });
  
  // Calculate initial and animate values based on direction
  const getDirectionValues = () => {
    switch (direction) {
      case 'up':
        return { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'down':
        return { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'left':
        return { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 'right':
        return { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      default:
        return { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } };
    }
  };
  
  const { initial, animate } = getDirectionValues();

  return (
    <div 
      ref={textRef}
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        initial={initial}
        animate={isInView ? animate : initial}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier curve similar to ESE site
        }}
        className={`${dark ? 'text-white' : 'text-gray-900'}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealText; 