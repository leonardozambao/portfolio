import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-600 transition"
          >
            <h3 className="font-medium mb-2">{project.title}</h3>
            <p className="text-sm text-neutral-400 mb-4">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              className="text-sm underline"
            >
              Live demo
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
