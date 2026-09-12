import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "sobre" },
  { href: "#skills", label: "skills" },
  { href: "#projetos", label: "projetos" },
  { href: "#experiencia", label: "experiência" },
  { href: "#contato", label: "contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-ink hover:text-accent transition-colors">
          <span className="text-accent">&gt;</span> caio.dev
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-ink-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-ink text-lg w-8 h-8 flex items-center justify-center"
        >
          {open ? "×" : "≡"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-5 font-mono text-sm text-ink-dim bg-bg border-b border-line">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
