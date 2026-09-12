import { motion } from "framer-motion";
import { education, courses } from "../data/content";

export default function Education() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 border-t border-line">
      <span className="font-mono text-sm text-accent">05 · formação</span>
      <h2 className="font-display text-3xl sm:text-4xl mt-3 text-ink">Estudo e cursos complementares</h2>

      <div className="grid sm:grid-cols-2 gap-14 mt-12">
        <div>
          <h3 className="font-mono text-xs text-ink-faint uppercase tracking-wide mb-5">Educação</h3>
          <div className="flex flex-col gap-6">
            {education.map((e) => (
              <div key={e.school}>
                <p className="font-display text-lg text-ink">{e.school}</p>
                <p className="text-ink-dim text-sm mt-1">{e.degree}</p>
                <p className="font-mono text-xs text-ink-faint mt-1">{e.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs text-ink-faint uppercase tracking-wide mb-5">
            Cursos complementares
          </h3>
          <ul className="flex flex-col gap-4">
            {courses.map((c, i) => (
              <motion.li
                key={c.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex items-start justify-between gap-4 text-sm"
              >
                <div>
                  <p className="text-ink">{c.name}</p>
                  <p className="text-ink-faint font-mono text-xs mt-0.5">{c.org}</p>
                </div>
                <span
                  className={`font-mono text-xs whitespace-nowrap mt-0.5 ${
                    c.status === "Cursando" ? "text-accent" : "text-ink-faint"
                  }`}
                >
                  {c.status}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
