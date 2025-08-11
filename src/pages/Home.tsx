// src/pages/Home.tsx
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trophy, MapPin, Users } from "lucide-react";

/** Révèle son contenu au scroll (IntersectionObserver) */
function Reveal({
  children,
  delay = 0,
  threshold = 0.2,
}: {
  children: React.ReactNode;
  delay?: number;      // en secondes
  threshold?: number;  // part visible pour déclencher
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect(); // on n'anime qu'une fois
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={`${visible ? "animate-fadeInUp" : "opacity-0 translate-y-6"} will-change-transform`}
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
    <div className="page-transition font-serif">
      {/* HERO — vidéo plein écran directement sous la navbar */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* overlay sombre côté gauche */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        <div className="relative z-20 container mx-auto px-4">
          <Reveal>
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
          </Reveal>
        </div>
      </section>

      {/* SECTION FAITS CLÉS – style premium + reveal au scroll */}
      <section className="relative py-24">
        {/* fond subtil (dégradé radial + fine bordure haut/bas) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Carte 1 */}
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

            {/* Carte 2 */}
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

            {/* Carte 3 */}
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
