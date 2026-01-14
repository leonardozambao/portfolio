export default function Button({ children, href, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition";

  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200",
    secondary: "border border-neutral-700 hover:border-neutral-500",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}
