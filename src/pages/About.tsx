// src/pages/About.tsx
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="relative min-h-[88vh] page-transition">
      {/* Image de fond — floue, foncée, lavée */}
      <img
        src="/table.png"
        alt=""
        aria-hidden
        draggable="false"
        className="absolute inset-0 z-0 w-full h-full object-cover blur-sm brightness-[.82] saturate-75"
      />
      {/* Voile pour la lisibilité du texte */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* Contenu au-dessus du voile */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Panneau transparent comme la navbar */}
          <Card className="rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10">
            <div className="p-8 md:p-10">
              <header className="text-center mb-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                  À propos de l'association
                </h1>
                <p className="text-lg md:text-xl text-white/85">
                  Une histoire riche et une mission claire pour promouvoir le backgammon
                </p>
              </header>

              {/* --- Notre histoire --- */}
              <section className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-primary not-prose mb-3">
                  Notre histoire
                </h2>
                <p className="text-white/85 leading-relaxed mb-4">
                  L'Association Genevoise de Backgammon a été fondée en 2005 par un groupe
                  de passionnés désireux de structurer la pratique de ce jeu ancestral dans
                  la région lémanique. Depuis cette date, elle n'a cessé de croître et de
                  s'enrichir, accueillant des joueurs de tous horizons et de tous niveaux.
                </p>
                <p className="text-white/85 leading-relaxed mb-4">
                  Au fil des décennies, l'association s'est imposée comme une référence en
                  Suisse romande, organisant des tournois reconnus et participant activement
                  au développement du backgammon moderne. Elle a su préserver l'esprit
                  convivial et sportif qui caractérise ce jeu tout en s'adaptant aux
                  évolutions contemporaines.
                </p>
                <p className="text-white/85 leading-relaxed">
                  Aujourd'hui, forte de son expérience et de sa réputation, l'Association
                  Genevoise de Backgammon continue de rayonner bien au‑delà des frontières
                  cantonales, attirant des joueurs de toute la Suisse et des pays voisins.
                </p>
              </section>

              <hr className="my-8 border-white/10" />

              {/* --- Notre mission --- */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-5">Notre mission</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-3 inline-block w-2 h-2 rounded-full bg-accent/90"></span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Organiser des tournois</h3>
                        <p className="text-white/80">
                          Nous proposons régulièrement des compétitions officielles et amicales
                          pour tous les niveaux de jeu.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-3 inline-block w-2 h-2 rounded-full bg-accent/90"></span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Rassembler les joueurs</h3>
                        <p className="text-white/80">
                          Créer une communauté active et bienveillante où chacun peut progresser
                          et s'épanouir.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-3 inline-block w-2 h-2 rounded-full bg-accent/90"></span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Promouvoir le jeu</h3>
                        <p className="text-white/80">
                          Faire découvrir les richesses du backgammon au grand public et encourager sa pratique.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-3 inline-block w-2 h-2 rounded-full bg-accent/90"></span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Former et éduquer</h3>
                        <p className="text-white/80">
                          Transmettre les techniques, règles et stratégies pour améliorer le niveau général.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
