import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import useTranslation from "../../hooks/useTranslation";
import { getTranslation } from "../../utils/getTranslation";
import { projects } from "../../data/projects";

export default function Projects() {
  const t = useTranslation();

  return (
    <Section id="projects">
      <SectionTitle>{t.projects.title}</SectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-200 dark:border-neutral-800 p-5 rounded-lg hover:border-neutral-400 transition"
          >
            <h3 className="font-medium mb-2">
              {getTranslation(t, project.titleKey)}
            </h3>
            <p className="text-sm text-neutral-400 mb-3">
              {getTranslation(t, project.descriptionKey)}
            </p>
            <p className="text-xs text-neutral-500">
              {project.tech.join(" • ")}
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
}
