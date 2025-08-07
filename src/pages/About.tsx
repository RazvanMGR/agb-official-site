import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="page-transition py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              À propos de l'association
            </h1>
            <p className="text-xl text-muted-foreground">
              Une histoire riche et une mission claire pour promouvoir le backgammon
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Notre histoire</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'Association Genevoise de Backgammon a été fondée en 1976 par un groupe 
                  de passionnés désireux de structurer la pratique de ce jeu ancestral dans 
                  la région lémanique. Depuis cette date, elle n'a cessé de croître et de 
                  s'enrichir, accueillant des joueurs de tous horizons et de tous niveaux.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Au fil des décennies, l'association s'est imposée comme une référence en 
                  Suisse romande, organisant des tournois reconnus et participant activement 
                  au développement du backgammon moderne. Elle a su préserver l'esprit 
                  convivial et sportif qui caractérise ce jeu tout en s'adaptant aux 
                  évolutions contemporaines.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aujourd'hui, forte de son expérience et de sa réputation, l'Association 
                  Genevoise de Backgammon continue de rayonner bien au-delà des frontières 
                  cantonales, attirant des joueurs de toute la Suisse et des pays voisins.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Notre mission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Organiser des tournois
                        </h3>
                        <p className="text-muted-foreground">
                          Nous proposons régulièrement des compétitions officielles et 
                          amicales pour tous les niveaux de jeu.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Rassembler les joueurs
                        </h3>
                        <p className="text-muted-foreground">
                          Créer une communauté active et bienveillante où chacun peut 
                          progresser et s'épanouir.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Promouvoir le jeu
                        </h3>
                        <p className="text-muted-foreground">
                          Faire découvrir les richesses du backgammon au grand public 
                          et encourager sa pratique.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Former et éduquer
                        </h3>
                        <p className="text-muted-foreground">
                          Transmettre les techniques, règles et stratégies pour 
                          améliorer le niveau général.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;