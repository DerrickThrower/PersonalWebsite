"use client";

import React from "react";
import Threads from "@/reactbits/Threads";
import GradientText from "@/reactbits/GradientText";

function Introhero() {
  return (
    <div className="hero  min-h-screen ">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="text-3xl md:text-8=2xl lg:text-6xl font-bold"
      >
        Hi! I'm Derrick Thrower
      </GradientText>

      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
    </div>
  );
}

export default Introhero;
