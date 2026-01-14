export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold">Leonardo Zambão</span>

        <nav className="space-x-6 text-sm text-neutral-400">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
