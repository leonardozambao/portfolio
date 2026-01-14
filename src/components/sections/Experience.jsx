import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import useTranslation from "../../hooks/useTranslation";
import { getTranslation } from "../../utils/getTranslation";
import { experience } from "../../data/experience";

export default function Experience() {
  const t = useTranslation();

  return (
    <Section id="experience">
      <SectionTitle>{t.experience.title}</SectionTitle>

      <div className="space-y-10">
        {experience.map((job) => (
          <div key={job.id}>
            <div className="flex justify-between mb-3">
              <div>
                <h3 className="font-medium">
                  {getTranslation(t, job.roleKey)}
                </h3>
                <p className="text-sm text-neutral-400">{job.company}</p>
              </div>
              <span className="text-sm text-neutral-500">{job.period}</span>
            </div>

            <ul className="space-y-2 text-sm text-neutral-400">
              {job.descriptionKeys.map((key) => (
                <li key={key}>• {getTranslation(t, key)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
