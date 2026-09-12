import { motion } from "framer-motion";
import { profile } from "../data/content";

const COMMAND = "whoami";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 px-6">
      {/* grafo de commits decorativo, único elemento de destaque em movimento contínuo */}
      <svg
        className="absolute right-[-4rem] top-16 w-[26rem] h-[34rem] opacity-[0.16] pointer-events-none hidden lg:block"
        viewBox="0 0 200 320"
        fill="none"
      >
        {[
          "M40 0 V80",
          "M40 80 V320",
          "M100 40 V140",
          "M40 140 C40 160 100 150 100 170",
          "M100 170 V240",
          "M40 240 C40 258 100 250 100 268",
          "M100 268 V320",
        ].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="#e8a33d"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.3 + i * 0.15, ease: "easeInOut" }}
          />
        ))}
        {[
          [40, 0], [40, 80], [40, 140], [40, 240], [40, 320],
          [100, 40], [100, 170], [100, 268],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="5"
            fill="#e8a33d"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1 + i * 0.12 }}
          />
        ))}
      </svg>

      <div className="max-w-5xl mx-auto relative">
        <div className="max-w-3xl relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-sm text-ink-faint"
        >
          guest@portfolio
          <span className="text-accent">:~$</span>{" "}
          <span aria-hidden="true">
            {COMMAND.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.06 }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
          <motion.span
            className="inline-block w-[8px] h-[14px] bg-accent ml-1 align-middle"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.51, 1] }}
          />
          <span className="sr-only">{COMMAND}</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          className="font-display text-[3rem] sm:text-[4.5rem] leading-[1.02] mt-5 text-ink"
        >
          {profile.shortName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="font-mono text-accent text-base sm:text-lg mt-3"
        >
          {profile.role} — UNISUAM, 4º semestre
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="text-ink-dim text-lg leading-relaxed mt-6 max-w-xl"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="flex flex-wrap gap-4 mt-9"
        >
          <a
            href="#projetos"
            className="px-5 py-3 bg-accent text-bg font-mono text-sm rounded-sm hover:bg-accent-dim transition-colors"
          >
            Ver projetos
          </a>
          <a
            href="/curriculo-caio-firmino.pdf"
            download
            className="px-5 py-3 border border-line text-ink font-mono text-sm rounded-sm hover:border-accent hover:text-accent transition-colors"
          >
            Baixar currículo
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
