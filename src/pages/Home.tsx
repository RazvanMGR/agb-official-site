// src/pages/Home.tsx
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trophy, MapPin, Users } from "lucide-react";

/** Révèle en douceur: lent, fluide et lisible */
function Reveal({
  children,
  delay = 0,
  threshold = 0.15,
}: {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}) {
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
      { threshold, rootMargin: "0px 0px -30% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={[
        "transform-gpu will-change-transform",
        "transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:transition-none",
        visible
          ? "opacity-100 translate-y-0 scale-100 blur-0"
          : "opacity-50 translate-y-8 scale-[0.97] blur-[3px]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

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
  // style commun pour les deux CTA
  const cta =
    "inline-flex items-center justify-center h-11 px-6 rounded-md border border-white/80 text-white/95 " +
    "bg-white/0 hover:bg-white hover:text-black transition shadow-sm backdrop-blur-sm";

  return (
    <div
      className={[
        // FOND GLOBAL near-black en dégradé (plus premium que #000)
        "min-h-screen bg-gradient-to-br from-[#0b0b0d] to-[#121214] text-white",
        "relative overflow-x-clip page-transition font-serif",
      ].join(" ")}
    >
      {/* GRAIN GLOBAL (optionnel): ajoute /noise.png dans public/ pour l'activer */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.07] mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.png')", backgroundSize: "auto" }}
      />

      {/* Vignette radiale subtile */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(80%_60%_at_50%_20%,rgba(255,255,255,0.05),rgba(0,0,0,0))]" />

      {/* HERO — vidéo full screen avec fondu bas */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* CONTENEUR MASQUÉ: la vidéo + overlay “fondent” vers transparent en bas */}
        <div
          className="absolute inset-0 z-0"
         style={{
          WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 85%)",
          maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 85%)",
          }}
        >
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

          {/* OVERLAY CINÉMA — variante CHAUDE */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a09]/90 via-[#1a120f]/70 to-transparent" />

          {/*
            ➜ Variante FROIDE (remplace la div ci-dessus par celle-ci):
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0e]/90 via-[#101820]/70 to-transparent" />
          */}
        </div>

        {/* CONTENU par-dessus (non masqué) */}
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

      {/* SECTION FAITS CLÉS */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.05),rgba(0,0,0,0))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={0.0}>
              <Card className="group rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20">
                <CardContent className="p-10 text-center">
                  <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-red-600/20 transition-colors group-hover:bg-red-600/30">
                    <Trophy className="h-7 w-7 text-red-500" />
                  </div>
                  <div className="text-4xl font-extrabold text-red-500 mb-1">2005</div>
                  <p className="text-lg font-semibold text-white mb-2">Fondation</p>
                  <p className="text-white/85 leading-relaxed">
                    Près de 20 ans d’histoire et de passion pour le backgammon.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.15}>
              <Card className="group rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20">
                <CardContent className="p-10 text-center">
                  <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-red-600/20 transition-colors group-hover:bg-red-600/30">
                    <MapPin className="h-7 w-7 text-red-500" />
                  </div>
                  <div className="text-4xl font-extrabold text-red-500 mb-1">Genève</div>
                  <p className="text-lg font-semibold text-white mb-2">Localisation</p>
                  <p className="text-white/85 leading-relaxed">
                    Au cœur de la Suisse romande, rayonnement régional.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.3}>
              <Card className="group rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20">
                <CardContent className="p-10 text-center">
                  <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-red-600/20 transition-colors group-hover:bg-red-600/30">
                    <Users className="h-7 w-7 text-red-500" />
                  </div>
                  <div className="text-4xl font-extrabold text-red-500 mb-1">Tous</div>
                  <p className="text-lg font-semibold text-white mb-2">Niveaux</p>
                  <p className="text-white/85 leading-relaxed">
                    Débutants et experts réunis par la passion du jeu.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
