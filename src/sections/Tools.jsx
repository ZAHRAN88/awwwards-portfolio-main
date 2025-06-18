import React, { useEffect, useRef } from "react";
import { toolsData } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tools = () => {
  const sectionRef = useRef(null);
  const toolsRef = useRef([]);

  // Use data from constants directly
  const tools = toolsData;

  useEffect(() => {
    const section = sectionRef.current;
    const toolElements = toolsRef.current;

    // Animate section title and description
    gsap.fromTo(
      section.querySelectorAll("h2, p"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );

    // Animate tools grid
    gsap.fromTo(
      toolElements,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section.querySelector(".tools-grid"),
          start: "top 80%",
        },
      }
    );

    // Hover animations for each tool
    toolElements.forEach((tool) => {
      if (!tool) return;
      
      const icon = tool.querySelector(".tool-icon");
      const name = tool.querySelector(".tool-name");

      tool.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(name, {
          y: -5,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      tool.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(name, {
          y: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, [tools]); // Keep tools as dependency for consistency

  return (
    <section ref={sectionRef} id="tools" className="bg-[#E5E5E0] py-20 relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-4">
              Tools shaping<br />our development
            </h2>
          </div>
          <div className="max-w-xl mt-8 md:mt-0 md:text-right">
            <p className="text-lg text-black/80 font-light">
              Leveraging industry-leading tools and technologies to craft exceptional digital experiences. From design and development to deployment and collaboration, each tool is carefully chosen to enhance our workflow and deliver outstanding results.
            </p>
          </div>
        </div>
        
        <div className="tools-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 border-t border-l border-gray-300 bg-[#E5E5E0] overflow-hidden ">
          {tools.map((tool, index) => (
            <div
              key={tool.id || tool.name}
              ref={(el) => (toolsRef.current[index] = el)}
              className="group flex flex-col items-center justify-center border-b border-r border-gray-300 py-16 min-h-[220px] relative bg-[#E5E5E0] transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="tool-icon w-20 h-20 object-contain mt-8 filter group-hover:drop-shadow-lg transition-all duration-300"
                  draggable="false"
                />
              </div>
              <div className="tool-name absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-black/60 font-light opacity-0">
                {tool.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools; 