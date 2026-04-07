"use client";

import { useState, type FormEvent } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, email, message } = formState;
    const mailtoLink = `mailto:jesus@example.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-32 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          Let&apos;s build something{" "}
          <span className="text-primary">together.</span>
        </h2>
        <p className="text-on-surface-variant text-lg mb-16 max-w-xl mx-auto leading-relaxed">
          Actualmente busco nuevas oportunidades para participar en proyectos
          ambiciosos y aportar soluciones escalables. Me encantaría escuchar
          sobre tus metas.
        </p>

        {submitted ? (
          <div className="bg-surface-container-low p-10 rounded-[2rem] border border-outline-variant/30 shadow-sm text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-4 block">
              check_circle
            </span>
            <p className="font-headline text-2xl font-bold text-on-surface mb-2">
              ¡Mensaje enviado!
            </p>
            <p className="text-on-surface-variant">
              Tu cliente de correo se ha abierto. Me pondré en contacto contigo
              pronto.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-8 text-left bg-surface-container-low p-10 rounded-[2rem] border border-outline-variant/30 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-secondary uppercase tracking-widest ml-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full bg-white border border-outline-variant rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-outline-variant transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-secondary uppercase tracking-widest ml-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full bg-white border border-outline-variant rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-outline-variant transition-all outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-bold text-secondary uppercase tracking-widest ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-white border border-outline-variant rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-outline-variant transition-all outline-none resize-none"
              />
            </div>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-primary text-white px-12 py-5 rounded-2xl font-bold font-headline uppercase tracking-widest soft-glow transition-all hover:bg-[#7a0006] w-full md:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
