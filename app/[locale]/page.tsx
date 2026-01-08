import { HeroSection } from "./components/index/indexHero";
import AboutSection from "./components/index/indexAboutMe";
import ProjectsSection from "./components/projects";
import IndexContact from "./components/index/indexContact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <IndexContact />
    </main>
  );
}
