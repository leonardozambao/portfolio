export default function Section({ children, id }) {
  return (
    <section id={id} className="py-24">
      {children}
    </section>
  );
}
