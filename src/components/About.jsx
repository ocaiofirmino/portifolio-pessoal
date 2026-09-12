import { motion } from "framer-motion";
import { profile } from "../data/content";

const facts = [
  { label: "Local", value: profile.location },
  { label: "Formação", value: "Análise e Desenvolvimento de Sistemas — UNISUAM (cursando)" },
  { label: "Foco", value: "Front-end, com React, Python e PHP" },
  { label: "Ambiente", value: "Linux (Arch, NixOS, Fedora, Ubuntu) e Windows" },
];

export default function About() {
  return (
    <section id="sobre" className="max-w-5xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-14">
        <div>
          <span className="font-mono text-sm text-accent">01 · sobre</span>
          <h2 className="font-display text-3xl sm:text-4xl mt-3 text-ink leading-snug">
            Antes de código, veio rotina de balcão e agenda cheia.
          </h2>
          <div className="mt-6 space-y-4 text-ink-dim leading-relaxed">
            <p>
              Passei os últimos anos em atendimento ao cliente e gestão de equipe de loja de
              produtos pet a clínica veterinária. Fui eu quem organizou escala, controlou estoque e
              fechou caixa quando a bagunça batia.
            </p>
            <p>
              Hoje aplico essa mesma disciplina em código: entendo o problema antes de sair
              escrevendo, converso com quem vai usar o que eu construo, e não deixo pull request
              solto sem revisão. Estudo Análise e Desenvolvimento de Sistemas na UNISUAM e construo projetos reais em paralelo do
              front-end de uma academia ao site de uma clínica.
            </p>
          </div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm border-t border-line self-start"
        >
          {facts.map((f) => (
            <div key={f.label} className="flex justify-between gap-4 py-4 border-b border-line">
              <dt className="text-ink-faint">{f.label}</dt>
              <dd className="text-ink text-right">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
