import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Header() {
  const { lang, setLang } = useContext(LanguageContext);
  const [theme, setTheme] = useState("light");

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.theme;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
    setTheme(isDark ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-medium">
          Leonardo Zambão
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Language */}
          <div className="flex gap-1 text-sm">
            <button
              onClick={() => setLang("en")}
              className={`px-2 ${
                lang === "en" ? "font-medium" : "text-neutral-400"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`px-2 ${
                lang === "pt" ? "font-medium" : "text-neutral-400"
              }`}
            >
              PT
            </button>
          </div>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="text-lg"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}
