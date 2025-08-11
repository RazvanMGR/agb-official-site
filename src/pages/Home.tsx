// src/pages/Home.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/** Révélation spéciale pour le HERO (plus long et cinématographique) */
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

      {/* HERO avec coins arrondis en bas */}
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

          {/* Overlay cinéma neutre avec coins arrondis */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent rounded-b-[2rem]" />
        </div>

        <div className="relative z-20 container mx-auto px-4">
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
        </div>
      </section>
    </div>
  );
};

export default Home;
