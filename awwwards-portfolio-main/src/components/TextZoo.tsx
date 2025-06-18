import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface TextZooProps {
    text: string;
    className?: string;
    href?: string;
}

const TextZoo = ({ text, className = "", href = "#" }: TextZooProps) => {
    const containerRef = useRef<HTMLAnchorElement>(null);
    const topTextRef = useRef<HTMLSpanElement>(null);
    const bottomTextRef = useRef<HTMLSpanElement>(null);
    
    useEffect(() => {
        const container = containerRef.current;
        const topText = topTextRef.current;
        const bottomText = bottomTextRef.current;
        
        if (!container || !topText || !bottomText) return;
        
        gsap.set(bottomText, { y: '100%' });
        
        const tl = gsap.timeline({ paused: true });
        tl.to(topText, { y: '-100%', duration: 0.4  , ease: 'power2.inOut' }, 0)
          .to(bottomText, { y: '0%', duration: 0.4, ease: 'power2.inOut' }, 0);
        
        container.addEventListener('mouseenter', () => tl.play());
        container.addEventListener('mouseleave', () => tl.reverse());
        
        return () => {
            container.removeEventListener('mouseenter', () => tl.play());
            container.removeEventListener('mouseleave', () => tl.reverse());
        };
    }, []);
    
    return (
        <a 
            href={`${!href ? "javascript:void(0)" : href}`}
            className={`group relative overflow-hidden inline-block ${className}`}
            ref={containerRef}
        >
            <div className="flex flex-col font-bold">
                <span ref={topTextRef}>
                    {text}
                </span>
                <span ref={bottomTextRef} className="absolute top-0">
                    {text}
                </span>
            </div>
        </a>
    );
};

export default TextZoo;