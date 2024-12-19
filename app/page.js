import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import ProjectSection from "@/components/ProjectSection";
import PublicationsSection from "@/components/SelectedPublicationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import bibtex from "@/data/bib/Publications.bib";
import { homepageSection } from "@/website.config";

export default function Page() {
  return (
    <main className="md:w-[50rem] m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      {homepageSection.AboutSection && <AboutSection />}
      {homepageSection.NewsSection && <NewsSection />}
      {homepageSection.ExperienceSection && (
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Research Experiences</h1>
          <ExperienceSection />
        </div>
      )}
      {homepageSection.SelectedPublicationsSection && (
        <PublicationsSection bibtex={bibtex} />
      )}
      {homepageSection.ProjectSection && (
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <ProjectSection />
        </div>
      )}
    </main>
  );
}