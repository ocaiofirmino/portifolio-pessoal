import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { profile } from "../data/content";
import Toast from "./Toast";

const initialForm = { name: "", email: "", subject: "", message: "" };

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setToast({
        show: true,
        message: "Envio ainda não configurado. Veja o README (EmailJS).",
        type: "error",
      });
      setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      setToast({ show: true, message: "Mensagem enviada com sucesso!", type: "success" });
      setForm(initialForm);
    } catch (error) {
      setToast({
        show: true,
        message: "Não consegui enviar agora. Tenta de novo em instantes.",
        type: "error",
      });
    } finally {
      setSending(false);
      setTimeout(() => setToast((t) => ({ ...t, show: false })), 3200);
    }
  }

  return (
    <section id="contato" className="max-w-5xl mx-auto px-6 py-24 border-t border-line">
      <span className="font-mono text-sm text-accent">06 · contato</span>
      <h2 className="font-display text-3xl sm:text-4xl mt-3 text-ink">Vamos conversar</h2>
      <p className="text-ink-dim mt-3 max-w-lg">
        Tem uma vaga, um projeto ou só quer trocar uma ideia sobre código? Me manda uma mensagem.
      </p>

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 mt-12">
        <dl className="font-mono text-sm flex flex-col gap-5">
          <div>
            <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`} className="text-ink hover:text-accent transition-colors">
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Telefone</dt>
            <dd>
              <a href={`tel:+55${profile.phone.replace(/\D/g, "")}`} className="text-ink hover:text-accent transition-colors">
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Localização</dt>
            <dd className="text-ink">{profile.location}</dd>
          </div>
          <div>
            <dt className="text-ink-faint text-xs uppercase tracking-wide mb-1">Redes</dt>
            <dd className="flex flex-col gap-1">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-ink hover:text-accent transition-colors">
                {profile.github}
              </a>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="text-ink hover:text-accent transition-colors">
                {profile.linkedin}
              </a>
            </dd>
          </div>
        </dl>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-bg-soft border border-line rounded-sm px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-bg-soft border border-line rounded-sm px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            required
            value={form.subject}
            onChange={handleChange}
            className="bg-bg-soft border border-line rounded-sm px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
          />

          <textarea
            name="message"
            placeholder="Sua mensagem"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="bg-bg-soft border border-line rounded-sm px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={sending}
            className="self-start px-6 py-3 bg-accent text-bg font-mono text-sm rounded-sm hover:bg-accent-dim transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Enviando..." : "Enviar mensagem"}
          </button>
        </motion.form>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} />
    </section>
  );
}
