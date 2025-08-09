import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-transition">
      {/* HERO — fond noir, texte blanc */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black text-white">
        {/* Contenu centré */}
        <div className="relative z-20 container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-[#E8DDC8]">
            Association Genevoise de Backgammon
          </h1>

          <p className="text-lg lg:text-xl text-accent font-medium mb-6">
            Le backgammon à Genève, depuis 2005.
          </p>

          <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-8">
            Depuis près de vingt ans, l’Association Genevoise de Backgammon rassemble les
            passionnés de ce jeu millénaire dans la région lémanique. Que vous soyez débutant
            ou joueur expérimenté, notre communauté vous attend pour partager la passion de ce
            jeu de stratégie.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button asChild size="lg">
              <Link to="/about">Découvrir l'association</Link>
            </Button>

            {/* Bouton lisible : texte + bordure blancs, fond transparent */}
            <Link
              to="/events"
              className="inline-flex items-center justify-center h-11 px-6 rounded border border-white/80 text-white hover:bg-white hover:text-black transition"
            >
              Prochains événements
            </Link>
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

