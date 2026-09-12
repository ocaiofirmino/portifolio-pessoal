import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-ink-faint">
      <p>© {new Date().getFullYear()} {profile.shortName}</p>
      <p>Feito com React, Tailwind e Framer Motion</p>
    </footer>
  );
}
