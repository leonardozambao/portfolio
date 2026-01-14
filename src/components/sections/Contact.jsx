import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>

      <div className="max-w-xl space-y-6 text-neutral-400">
        <p>
          I'm currently open to remote opportunities and collaborations. Feel
          free to reach out if you'd like to work together.
        </p>

        <div className="space-y-3">
          <a
            href="mailto:leonardozambao1998@gmail.com"
            className="block hover:text-white transition"
          >
            📧 leonardozambao1998@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/leonardo-zamb%C3%A3o-31b051160/"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-white transition"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/leonardozambao"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-white transition"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
