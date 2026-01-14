export default function Section({ children, id }) {
  return (
    <section id={id} className="py-20 px-6">
      {children}
    </section>
  );
}
