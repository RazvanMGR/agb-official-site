import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-transition">
      {/* HERO — vidéo, overlay dégradé, animations */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black text-white">
        {/* Vidéo de fond */}
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

        {/* Overlay dégradé pour la lisibilité */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        {/* Cercles décoratifs très subtils */}
        <svg
          className="pointer-events-none absolute right-[-12%] top-[-12%] z-10 opacity-25 hidden md:block"
          width="900"
          height="900"
          viewBox="0 0 900 900"
          fill="none"
        >
          <circle cx="450" cy="450" r="280" stroke="white" strokeOpacity="0.12" />
          <circle cx="450" cy="450" r="360" stroke="white" strokeOpacity="0.08" />
          <circle cx="450" cy="450" r="440" stroke="white" strokeOpacity="0.06" />
        </svg>

        {/* Contenu */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[0.2em] text-[12px] text-white/80 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
              AGB TODAY
            </div>

            <h1 className="font-display text-[36px] leading-tight sm:text-[44px] lg:text-[56px] text-[#E8DDC8] mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
              Association Genevoise de Backgammon
            </h1>

            <p className="text-lg lg:text-xl text-accent font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">
              Le backgammon à Genève, depuis 2005.
            </p>

            <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
              Depuis près de vingt ans, l’Association Genevoise de Backgammon rassemble les
              passionnés de ce jeu millénaire dans la région lémanique. Que vous soyez débutant
              ou joueur expérimenté, notre communauté vous attend pour partager la passion de ce
              jeu de stratégie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
              <Button asChild variant="default" size="lg">
                <Link to="/about">Découvrir l'association</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/events">Prochains événements</Link>
              </Button>
            </div>

            {/* Chiffres */}
            <div className="mt-12 flex gap-10 text-white/80 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500">
              <div>
                <div className="text-3xl font-semibold">57</div>
                <div className="text-xs uppercase tracking-widest opacity-70">Classes</div>
              </div>
              <div>
                <div className="text-3xl font-semibold">10</div>
                <div className="text-xs uppercase tracking-widest opacity-70">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INFOS (cartes) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">2005</div>
                <h3 className="text-lg font-semibold mb-2">Fondation</h3>
                <p className="text-muted-foreground">
                  Près de 20 ans d'histoire et de passion pour le backgammon
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">Genève</div>
                <h3 className="text-lg font-semibold mb-2">Localisation</h3>
                <p className="text-muted-foreground">
                  Au cœur de la Suisse romande, rayonnement régional
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">Tous</div>
                <h3 className="text-lg font-semibold mb-2">Niveaux</h3>
                <p className="text-muted-foreground">
                  Débutants et experts réunis par la passion du jeu
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
