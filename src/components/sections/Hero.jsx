import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="py-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Front End Developer
      </h1>

      <p className="text-neutral-400 max-w-2xl mb-10">
        Front End Developer with 8+ years of experience building performant,
        accessible and scalable web interfaces using modern JavaScript and CSS.
      </p>

      <div className="flex gap-4">
        <Button href="https://github.com/leonardozambao">GitHub</Button>
        <Button href="#projects" variant="secondary">
          View Projects
        </Button>
      </div>
    </section>
  );
}
