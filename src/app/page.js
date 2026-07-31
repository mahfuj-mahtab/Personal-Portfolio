import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TechStackSection } from "@/components/tech-stack-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TechStackSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <SiteFooter />
    </>
  );
}
