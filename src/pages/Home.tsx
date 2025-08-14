// src/pages/Home.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/** ————— CTA bouton à droite du HERO ————— */
function BigGreyCTA() {
  // Scroll fluide vers le formulaire
  function goToForm(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.querySelector("#contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <a
      href="#contact-form"
      onClick={goToForm}
      className={[
        // Base bouton (même langage visuel que tes CTA)
        "inline-flex w-full items-center justify-center",
        // 2x plus haut que tes boutons (h-11) → h-20
        "h-20 px-8 rounded-xl",
        // Gris transparent (différent de tes CTA blancs)
        "border border-white/30 bg-zinc-800/30",
        "backdrop-blur-sm text-white/95",
        // Hover focus
        "hover:bg-zinc-700/40 transition shadow-sm",
      ].join(" ")}
      aria-label="Aller au formulaire de contact"
    >
      Contact rapide
    </a>
  );
}

/** ————— Carte formulaire (section bas de page) ————— */
function ContactFormSection() {
  const [etat, setEtat] = useState<"idle" | "envoi" | "ok" | "erreur">("idle");

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEtat("envoi");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      hp_field: data.get("website"), // honeypot anti-spam
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setEtat("ok");
        form.reset();
      } else {
        setEtat("erreur");
      }
    } catch {
      setEtat("erreur");
    }
  }

  return (
    <section id="contact-form" className="relative py-20 bg-gradient-to-b from-black to-[#0e0e10]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#E8DDC8]">Nous écrire</h2>
          <p className="mt-2 text-zinc-400">
            Remplissez le formulaire et nous revenons vers vous sous 24–48&nbsp;h.
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8 shadow-xl backdrop-blur">
            {etat === "ok" ? (
              <div className="rounded-md border border-green-700 bg-green-900/30 p-4 text-sm">
                Merci ! Votre message a bien été envoyé.
              </div>
            ) : (
              <form onSubmit={envoyer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Honeypot (caché) */}
                <div className="hidden">
                  <label>Website</label>
                  <input name="website" autoComplete="off" tabIndex={-1} />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-sm text-zinc-300">Nom</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg border border-zinc-700 bg-black px-3 py-2 text-white outline-none focus:border-zinc-400"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm text-zinc-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-lg border border-zinc-700 bg-black px-3 py-2 text-white outline-none focus:border-zinc-400"
                    placeholder="vous@exemple.ch"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-zinc-300">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-1 w-full rounded-lg border border-zinc-700 bg-black px-3 py-2 text-white outline-none focus:border-zinc-400"
                    placeholder="Votre message…"
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={etat === "envoi"}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white transition hover:bg-white/20 disabled:opacity-50"
                  >
                    {etat === "envoi" ? "Envoi…" : "Envoyer le message"}
                  </button>
                </div>
              </form>
            )}

            {etat === "erreur" && (
              <div className="mt-4 rounded-md border border-red-700 bg-red-900/30 p-3 text-sm">
                Oups, une erreur est survenue. Écrivez-nous directement :
                <a href="mailto:contact@votre-domaine.ch" className="underline"> contact@votre-domaine.ch</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** ————— Effet de révélation HERO ————— */
function HeroReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setVisible(true));
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "transform-gpu will-change-transform",
        "transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-10 blur-[4px]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

const Home = () => {
  const cta =
    "inline-flex items-center justify-center h-11 px-6 rounded-md border border-white/80 text-white/95 " +
    "bg-white/0 hover:bg-white hover:text-black transition shadow-sm backdrop-blur-sm";

  return (
    <div
      className={[
        "min-h-screen bg-gradient-to-br from-[#0b0b0d] to-[#121214] text-white",
        "relative overflow-x-clip page-transition font-serif",
      ].join(" ")}
    >
      {/* Grain optionnel */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.07] mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.png')", backgroundSize: "auto" }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(80%_60%_at_50%_20%,rgba(255,255,255,0.05),rgba(0,0,0,0))]" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden rounded-b-[2rem]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>

        {/* Overlay cinéma */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent rounded-b-[2rem]" />
        </div>

        <div className="relative z-20 container mx-auto px-4">
          {/* 2 colonnes : gauche = texte, droite = gros bouton */}
          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* GAUCHE — ton bloc existant */}
            <HeroReveal>
              <div className="max-w-xl">
                <h1 className="font-display text-[36px] leading-tight sm:text-[44px] lg:text-[56px] text-[#E8DDC8] mb-4">
                  Association Genevoise de Backgammon
                </h1>
                <p className="text-lg lg:text-xl text-red-400 font-medium mb-6">
                  Le backgammon à Genève, depuis 2005.
                </p>
                <p className="text-base lg:text-lg text-white/85 leading-relaxed mb-8">
                  Depuis près de vingt ans, l’Association Genevoise de Backgammon rassemble les
                  passionnés de ce jeu millénaire dans la région lémanique. Que vous soyez débutant
                  ou joueur expérimenté, notre communauté vous attend pour partager la passion de ce
                  jeu de stratégie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/about" className={cta}>Découvrir l'association</Link>
                  <Link to="/events" className={cta}>Prochains événements</Link>
                </div>
              </div>
            </HeroReveal>

            {/* DROITE — gros bouton gris transparent */}
            <HeroReveal>
              <div className="max-w-xl ml-auto w-full">
                <BigGreyCTA />
              </div>
            </HeroReveal>
          </div>
        </div>
      </section>

      {/* ——— Section formulaire en bas ——— */}
      <ContactFormSection />
    </div>
  );
};

export default Home;
