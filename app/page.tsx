import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/index/indexHero";
import AboutSection from "@/components/index/indexAboutMe";
import ProjectsSection from "@/components/index/indexProjects";

export default function Home() {
  return (
    <div className="bg-[#1F2937]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
