import Button from "../ui/Button";
import useTranslation from "../../hooks/useTranslation";

export default function Hero() {
  const t = useTranslation();

  return (
    <section className="py-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.heroTitle}</h1>

      <p className="text-neutral-400 max-w-2xl mb-10">{t.heroSubtitle}</p>

      <div className="flex gap-4">
        <Button href="https://github.com/leonardozambao">GitHub</Button>
        <Button href="#projects" variant="secondary">
          {t.heroCta}
        </Button>
      </div>
    </section>
  );
}
