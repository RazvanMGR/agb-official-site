import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/backgammon-hero.jpg";

const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 lg:mb-6">
                  Association Genevoise de Backgammon
                </h1>
                <p className="text-lg lg:text-xl text-accent font-medium mb-6 lg:mb-8">
                  Le backgammon à Genève, depuis 2005.
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
                  Depuis près de vingt ans, l'Association Genevoise de Backgammon 
                  rassemble les passionnés de ce jeu millénaire dans la région lémanique.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Que vous soyez débutant ou joueur expérimenté, notre communauté vous 
                  attend pour partager la passion de ce jeu de stratégie.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" size="lg">
                  <Link to="/about">Découvrir l'association</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/events">Prochains événements</Link>
                </Button>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <img
                src={heroImage}
                alt="Plateau de backgammon professionnel"
                className="w-full h-auto rounded-lg shadow-lg max-h-[60vh] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
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