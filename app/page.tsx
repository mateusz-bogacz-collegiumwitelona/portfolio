import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/index/index-hero";
import AboutSection from "@/components/index/index-aboutme";
import ProjectsSection from "@/components/index/index-projects";

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
