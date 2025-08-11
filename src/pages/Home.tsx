import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
   <div className="page-transition font-serif">
      {/* HERO — vidéo de fond + overlay + texte à gauche (style maquette) */}
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

        {/* Overlay: très sombre à gauche, plus léger à droite */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        {/* Cercles décoratifs à droite (subtils) */}
        <svg
          className="pointer-events-none absolute right-[-12%] top-[-12%] z-10 opacity-25 hidden md:block"
          width="900" height="900" viewBox="0 0 900 900" fill="none"
        >
          <circle cx="450" cy="450" r="280" stroke="white" strokeOpacity="0.12" />
          <circle cx="450" cy="450" r="360" stroke="white" strokeOpacity="0.08" />
          <circle cx="450" cy="450" r="440" stroke="white" strokeOpacity="0.06" />
        </svg>

        {/* Contenu aligné à gauche */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 items-center gap-8">
            {/* Colonne gauche : texte */}
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
                <Button asChild size="lg">
                  <Link to="/about">Découvrir l'association</Link>
                </Button>
                {/* CTA lisible : cadre blanc */}
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center h-11 px-6 rounded border border-white/90 text-white hover:bg-white hover:text-black transition"
                >
                  Prochains événements
                </Link>
              </div>
            </div>

            {/* Colonne droite vide : laisse respirer la vidéo comme sur la maquette */}
            <div className="hidden lg:block" />
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
