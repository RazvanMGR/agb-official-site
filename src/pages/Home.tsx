// src/pages/Home.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trophy, MapPin, Users } from "lucide-react";

const Home = () => {
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

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="font-display text-[36px] leading-tight sm:text-[44px] lg:text-[56px] text-[#E8DDC8] mb-4">
              Association Genevoise de Backgammon
            </h1>
            <p className="text-lg lg:text-xl text-red-400 font-medium mb-6">
              Le backgammon à Genève, depuis 2005.
            </p>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-8">
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
        </div>
      </section>

      {/* SECTION FAITS CLÉS – style premium */}
      <section className="relative py-24">
        {/* fond subtil (dégradé radial + fine bordure haut/bas) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Carte 1 */}
            <Card className="group rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-none backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-red-600/20 transition-colors group-hover:bg-red-600/30">
                  <Trophy className="h-6 w-6 text-red-500" />
                </div>
                <div className="text-3xl font-bold text-red-500 mb-1">2005</div>
                <p className="font-semibold text-white/90 mb-2">Fondation</p>
                <p className="text-white/70 leading-relaxed">
                  Près de 20 ans d'histoire et de passion pour le backgammon.
                </p>
              </CardContent>
            </Card>

            {/* Carte 2 */}
            <Card className="group rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-none backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-red-600/20 transition-colors group-hover:bg-red-600/30">
                  <MapPin className="h-6 w-6 text-red-500" />
                </div>
                <div className="text-3xl font-bold text-red-500 mb-1">Genève</div>
                <p className="font-semibold text-white/90 mb-2">Localisation</p>
                <p className="text-white/70 leading-relaxed">
                  Au cœur de la Suisse romande, rayonnement régional.
                </p>
              </CardContent>
            </Card>

            {/* Carte 3 */}
            <Card className="group rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-none backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-red-600/20 transition-colors group-hover:bg-red-600/30">
                  <Users className="h-6 w-6 text-red-500" />
                </div>
                <div className="text-3xl font-bold text-red-500 mb-1">Tous</div>
                <p className="font-semibold text-white/90 mb-2">Niveaux</p>
                <p className="text-white/70 leading-relaxed">
                  Débutants et experts réunis par la passion du jeu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
