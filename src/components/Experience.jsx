import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/content";

function Commit({ item, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative pl-10"
    >
      <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent" />
      {index !== experience.length - 1 && (
        <span className="absolute left-[5px] top-5 bottom-[-2rem] w-px bg-line" />
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left group"
        aria-expanded={open}
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-xs text-accent">{item.hash}</span>
          <span className="font-display text-xl text-ink group-hover:text-accent transition-colors">
            {item.role}
          </span>
          <span className="font-mono text-sm text-ink-faint">— {item.org}</span>
        </div>
        <p className="font-mono text-xs text-ink-faint mt-1">{item.period}</p>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-3 pb-6 space-y-2">
              {item.bullets.map((b) => (
                <li key={b} className="text-ink-dim text-sm leading-relaxed flex gap-2">
                  <span className="text-ink-faint">-</span>
                  <span>{b}</span>
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="max-w-5xl mx-auto px-6 py-24 border-t border-line">
      <span className="font-mono text-sm text-accent">04 · experiência</span>
      <h2 className="font-display text-3xl sm:text-4xl mt-3 text-ink">git log --oneline</h2>
      <p className="text-ink-dim mt-3 max-w-lg">Clique em cada cargo para expandir os detalhes.</p>

      <ul className="mt-12 flex flex-col gap-8">
        {experience.map((item, i) => (
          <Commit key={item.hash} item={item} index={i} />
        ))}
      </ul>
    </section>
  );
}
