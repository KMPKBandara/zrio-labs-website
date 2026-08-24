import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <>
      <SEO
        title="Our Work | Zrio Labs"
        description="Explore websites and digital products designed and developed by Zrio Labs."
      />

      <PageHero
        eyebrow="Our Work"
        title="Digital products built for real businesses."
        text="Explore selected websites and software projects completed by Zrio Labs."
      />

      <section className="section">
        <div className="container-pad">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}