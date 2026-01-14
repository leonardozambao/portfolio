import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-medium mb-4">{group.category}</h3>

            <ul className="space-y-2 text-sm text-neutral-400">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
