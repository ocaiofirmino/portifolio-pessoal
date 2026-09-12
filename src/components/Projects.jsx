import { motion } from "framer-motion";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projetos" className="max-w-5xl mx-auto px-6 py-24 border-t border-line">
      <span className="font-mono text-sm text-accent">03 · projetos</span>
      <h2 className="font-display text-3xl sm:text-4xl mt-3 text-ink">Coisas que eu construí</h2>

      <div className="mt-14 flex flex-col gap-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group grid sm:grid-cols-[1fr_2.2fr] gap-3 sm:gap-8 py-8 border-b border-line last:border-b-0"
          >
            <div>
              <h3 className="font-display text-2xl text-ink group-hover:text-accent transition-colors">
                {p.name}
              </h3>
              <p className="font-mono text-xs text-ink-faint mt-1">{p.period}</p>
              <p className="font-mono text-xs text-accent mt-2">{p.status}</p>
            </div>

            <div>
              <p className="text-ink-dim leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs text-ink-faint border border-line rounded-sm px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-mono text-sm text-ink mt-5 hover:text-accent transition-colors underline decoration-line underline-offset-4 hover:decoration-accent"
                >
                  Ver repositório
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
