import { motion } from "framer-motion";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24 border-t border-line">
      <span className="font-mono text-sm text-accent">02 · skills</span>
      <h2 className="font-display text-3xl sm:text-4xl mt-3 text-ink">O que eu uso pra construir</h2>

      <div className="grid sm:grid-cols-3 gap-10 mt-12">
        {skills.map((group, gi) => (
          <div key={group.group}>
            <h3 className="font-mono text-xs text-ink-faint uppercase tracking-wide mb-4">
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.3, delay: gi * 0.05 + i * 0.04 }}
                  whileHover={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
                  className="font-mono text-sm text-ink-dim border border-line rounded-sm px-3 py-1.5 cursor-default transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
