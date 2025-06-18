import React from "react";
import { toolsData } from "../constants";

const Tools = () => {
  return (
    <section id="tools" className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <p className="text-md mb-2 text-black font-light">• Tool Box</p>
            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-4">
              Tools shaping<br />our development
            </h2>
          </div>
          <div className="max-w-xl mt-8 md:mt-0 md:text-right">
            <p className="text-lg text-black/80 font-light mb-6">
              Our design process is powered by cutting-edge tools, including Figma for interactive design and prototyping, Miro for collaborative mood boarding and brainstorming sessions.
            </p>
            <button className="border border-black rounded-full px-6 py-3 font-semibold text-black hover:bg-black hover:text-white transition-all">
              Get Free Estimates Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-gray-300 bg-[#f5f5f5]">
          {toolsData.map((tool, idx) => (
            <div
              key={tool.name}
              className="flex flex-col items-center justify-center border-b border-r border-gray-300 py-16 min-h-[220px] relative bg-[#f5f5f5]"
            >
              <div className="absolute top-4 left-4 text-black text-sm font-light">• {tool.name}</div>
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-20 h-20 object-contain mt-8"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools; 