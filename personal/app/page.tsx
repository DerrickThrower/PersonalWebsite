import { Accordion } from "@/components/accordion";
import LandingP from "./landingpage/landingpage";
import AboutMe from "@/components/aboutme";
import Project_Section from "@/components/Projects/project_section";

export default function Home() {
  return (
    <>
      <LandingP/>

      <AboutMe/>

      
      
      <Accordion/>
    </>
  );
}