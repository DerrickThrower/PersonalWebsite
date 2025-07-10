"use client";
import SpotlightCard from "./reactbits/SpotlightCard";

function AboutMe() {
  return (
    <div className="  relative bg-inherit ">
      <div className=" flex p-5 gap-5 m-5">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 100, 255, 0.2)"
        >
          <div className="flex flex-col items-center  text-center">
            <img
              src="/University_of_California,_Irvine_seal.svg.png"
              alt="UC Irvine seal"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">About Me</h3>
            <p className="text-gray-700">
              I am currently a Student at the University of California, Irvine
              pursuing a Computer Science Degree
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 100, 255, 0.2)"
        >
          <div className="flex flex-col items-center  text-center">
            <img
              src="/DerrickFlexing.jpeg"
              alt="Me flexing"
              className="w-40  mb-4"
            />
            <h3 className="text-xl font-bold mb-2">What I Love</h3>
            <p className="text-gray-700">
              I love building out any ideas that I can think of, Going to hackthathons, and building community wherever I go! 
              
            </p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default AboutMe;
