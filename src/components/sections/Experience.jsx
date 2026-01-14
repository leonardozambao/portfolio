import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>

      <div className="space-y-10">
        {experience.map((job, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="font-medium">{job.role}</h3>
                <p className="text-sm text-neutral-400">{job.company}</p>
              </div>

              <span className="text-sm text-neutral-500">{job.period}</span>
            </div>

            <ul className="space-y-2 text-sm text-neutral-400">
              {job.description.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
