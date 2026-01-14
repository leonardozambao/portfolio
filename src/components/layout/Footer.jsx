export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8 mt-24">
      <div className="max-w-6xl mx-auto px-6 text-sm text-neutral-500">
        © {new Date().getFullYear()} Leonardo Zambão. All rights reserved.
      </div>
    </footer>
  );
}
