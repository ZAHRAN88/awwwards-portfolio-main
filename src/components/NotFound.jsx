import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Magnet from './Animations/Magnet/Magnet';

gsap.registerPlugin(TextPlugin);

const NotFound = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef([]);
  const decorativeElementsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;

    // Set initial states
    gsap.set([title, subtitle, description, button], {
      opacity: 0,
      y: 80,
    });

    gsap.set(container, {
      opacity: 0,
    });

    // Create floating organic particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 6 + 2;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(207, 163, 85, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        pointer-events: none;
        filter: blur(${Math.random() * 2}px);
      `;
      container.appendChild(particle);
      particlesRef.current.push(particle);

      // Animate particles with organic movement
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(particle, {
        x: `+=${Math.random() * 300 - 150}`,
        y: `+=${Math.random() * 300 - 150}`,
        duration: Math.random() * 25 + 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(particle, {
        opacity: Math.random() * 0.4 + 0.2,
        duration: Math.random() * 4 + 2,
        repeat: -1,
        yoyo: true,
      });
    }

    // Create decorative geometric elements
    for (let i = 0; i < 8; i++) {
      const element = document.createElement('div');
      element.className = 'decorative-element';
      const size = Math.random() * 60 + 20;
      element.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: transparent;
        border: 1px solid rgba(139, 139, 115, ${Math.random() * 0.2 + 0.1});
        transform: rotate(${Math.random() * 45}deg);
        pointer-events: none;
      `;
      container.appendChild(element);
      decorativeElementsRef.current.push(element);

      gsap.set(element, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(element, {
        rotation: `+=${Math.random() * 360}`,
        duration: Math.random() * 30 + 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(element, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: Math.random() * 40 + 30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Main animation timeline with sophisticated easing
    const tl = gsap.timeline();

    tl.to(container, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    })
    .to(title, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    }, "-=0.3")
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
    }, "-=1")
    .to(description, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    }, "-=0.8")
    .to(button, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
    }, "-=0.6");

    // Subtle breathing animation for 404
    gsap.to(title, {
      scale: 1.02,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Mouse move parallax effect (subtle)
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) * 0.01;
      const moveY = (clientY - centerY) * 0.01;

      gsap.to(title, {
        x: moveX * 2,
        y: moveY * 2,
        duration: 2,
        ease: "power2.out",
      });

      gsap.to([subtitle, description], {
        x: moveX,
        y: moveY,
        duration: 2,
        ease: "power2.out",
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up particles and decorative elements
      [...particlesRef.current, ...decorativeElementsRef.current].forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      particlesRef.current = [];
      decorativeElementsRef.current = [];
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-primary text-DarkLava overflow-hidden relative font-amiamie"
      style={{ backgroundColor: '#e5e5e0' }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-SageGray/5 via-transparent to-gold/5"></div>
      
      {/* Main content */}
      <div className="text-center z-10 relative max-w-4xl mx-auto px-6">
        {/* 404 Number */}
        <h1 
          ref={titleRef}
          className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none mb-4"
          style={{ 
            fontFamily: ' "Rowdies", sans-serif',
            color: '#393632',
            textShadow: '0 4px 20px rgba(57, 54, 50, 0.1)'
          }}
        >
          4<span className='text-[#cfa355]'>0</span>4
        </h1>

        {/* Subtitle */}
        <h2 
          ref={subtitleRef}
          className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 tracking-wide"
          style={{ 
            fontFamily: ' "Rowdies", sans-serif',
            color: '#8b8b73'
          }}
        >
          Page Not Found
        </h2>

        {/* Description */}
        <p 
          ref={descriptionRef}
          className="text-lg md:text-xl lg:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed font-light"
          style={{ 
            fontFamily: ' "Rowdies", sans-serif',
            color: '#cfa355',
            opacity: 0.7
          }}
        >
          The page you're looking for seems to have wandered off into the digital wilderness. 
          Let's guide you back to familiar territory.
        </p>

        {/* CTA Button with Magnet effect */}
        <div ref={buttonRef}>
          <Magnet padding={100} disabled={false} magnetStrength={3}>
            <Link 
              to="/" 
              className="inline-block group relative overflow-hidden transition-all duration-500 rounded-lg"
            >
              <div 
                className="px-12 py-4 font-medium tracking-wide transition-all duration-300 hover:shadow-xl border-2 relative z-10"
                style={{
                  fontFamily: ' "Rowdies", sans-serif',
                  backgroundColor: '#393632',
                  color: '#e5e5e0',
                  borderColor: '#393632'
                }}
              >
                <span className="relative z-10">Return Home</span>
                <div 
                  className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md"
                  style={{ backgroundColor: '#cfa355' }}
                ></div>
              </div>
            </Link>
          </Magnet>
        </div>
      </div>

      {/* Subtle corner decorations */}
      <div 
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 opacity-20"
        style={{ borderColor: '#8b8b73' }}
      ></div>
      <div 
        className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 opacity-20"
        style={{ borderColor: '#8b8b73' }}
      ></div>
      <div 
        className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 opacity-20"
        style={{ borderColor: '#8b8b73' }}
      ></div>
      <div 
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 opacity-20"
        style={{ borderColor: '#8b8b73' }}
      ></div>
    </div>
  );
};

export default NotFound; 