import { ExternalLink } from "lucide-react";
import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-panel/80 shadow-glow">
      {/* Project screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={`${project.title} website preview`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur">
            {project.status}
          </span>
        </div>
      </div>

      {/* Project information */}
      <div className="p-6 sm:p-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan">
          {project.category}
        </p>

        <h2 className="mb-2 text-2xl font-bold text-white">
          {project.title}
        </h2>

        <p className="mb-5 text-sm text-slate-500">
          Client: {project.client}
        </p>

        <p className="muted mb-6">
          {project.description}
        </p>

        {/* Services */}
        <ul
          className="mb-7 flex flex-wrap gap-2"
          aria-label="Services provided"
        >
          {project.services.map((service) => (
            <li
              key={service}
              className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-300"
            >
              {service}
            </li>
          ))}
        </ul>

        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label={`Visit the ${project.title} live website`}
        >
          Visit Live Website
          <ExternalLink size={17} />
        </a>
      </div>
    </article>
  );
}