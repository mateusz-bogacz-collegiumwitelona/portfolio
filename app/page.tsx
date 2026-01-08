import { HeroSection } from "./components/index/indexHero";
import AboutSection from "./components/index/indexAboutMe";
import ProjectsSection from "./components/index/indexProjects";
import IndexContact from "./components/index/indexContact";

export default function Home() {
  return (
    <div className="bg-[#1F2937]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <IndexContact />
    </div>
  );
}
