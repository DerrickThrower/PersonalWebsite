"use client";

import React from "react";
import Threads from "@/components/reactbits/Threads";
import GradientText from "@/components/reactbits/GradientText";

function Introhero() {
  return (
    <div className="hero min-h-screen relative">
      <div className="hero-content text-center z-10">
        <div className="max-w-md">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl md:text-8=2xl lg:text-6xl font-bold "
          >
            Hi! I'm Derrick Thrower
          </GradientText>
          
          <div className="mt-1 text-lg text-gray-600 italic">
           
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: "600px", position: "absolute", top: 0, left: 0 }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
    </div>
  );
}

export default Introhero;
