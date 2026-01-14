import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import useTranslation from "../../hooks/useTranslation";
import { getTranslation } from "../../utils/getTranslation";
import { skills } from "../../data/skills";

export default function Skills() {
  const t = useTranslation();

  return (
    <Section id="skills">
      <SectionTitle>{t.skills.title}</SectionTitle>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div key={group.categoryKey}>
            <h3 className="font-medium mb-3">
              {getTranslation(t, group.categoryKey)}
            </h3>
            <ul className="text-sm text-neutral-400 space-y-2">
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
