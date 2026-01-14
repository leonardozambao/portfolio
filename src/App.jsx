import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
