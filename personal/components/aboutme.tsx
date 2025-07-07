"use client";
import SpotlightCard from "./reactbits/SpotlightCard";

function AboutMe() {
  return (
    <div className="hero min-h-screen relative bg-inherit">
      <div className="hero-content text-right z-10">
        <div className="max-w-lg">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 100, 255, 0.2)"
          >
            <div className="flex flex-col items-center p-6 text-center">
              <img 
                src="/University_of_California,_Irvine_seal.svg.png" 
                alt="UC Irvine seal" 
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">About Me</h3>
              <p className="text-gray-700">
                I am currently a Student at the University of California, Irvine pursuing a Computer Science Degree
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
