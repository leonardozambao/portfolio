import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import useTranslation from "../../hooks/useTranslation";
import { getTranslation } from "../../utils/getTranslation";

export default function Contact() {
  const t = useTranslation();

  return (
    <Section id="contact">
      <SectionTitle>{t.contact.title}</SectionTitle>

      <div className="max-w-xl space-y-6 text-neutral-400">
        <p>{t.contact.text}</p>

        <div className="space-y-3">
          <a
            href="mailto:leonardozambao1998@gmail.com"
            className="block hover:underline  transition"
          >
            📧 leonardozambao1998@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/leonardo-zamb%C3%A3o-31b051160/"
            target="_blank"
            rel="noreferrer"
            className="block hover:underline  transition"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/leonardozambao"
            target="_blank"
            rel="noreferrer"
            className="block hover:underline transition"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
