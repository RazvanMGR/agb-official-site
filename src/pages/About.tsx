// src/pages/About.tsx
import { Card } from "@/components/ui/card";
import { Trophy, MapPin, Users } from "lucide-react";

const About = () => {
  return (
    <div className="relative min-h-screen page-transition">
      {/* Fond fixe pleine fenêtre */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/table.png"
          alt=""
          aria-hidden
          draggable="false"
          className="w-full h-full object-cover object-center blur-sm brightness-[.82] saturate-75"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Contenu (padding top réduit pour rapprocher de la navbar) */}
      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-24 pb-24">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10">
            <div className="p-6 md:p-10">
              {/* En‑tête */}
              <header className="text-center mb-8 md:mb-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-md mb-3">
                  À propos de l'association
                </h1>
                <p className="text-base md:text-lg text-white/90">
                  Une histoire riche et une mission claire pour promouvoir le backgammon
                </p>
              </header>

              {/* FAITS CLÉS — compact, accessible, responsive */}
              <div className="grid gap-4 sm:grid-cols-3 mb-10">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-red-600/20">
                    <Trophy className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Fondation</div>
                    <div className="text-white font-semibold leading-tight">2005</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-red-600/20">
                    <MapPin className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Localisation</div>
                    <div className="text-white font-semibold leading-tight">Genève</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-red-600/20">
                    <Users className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Niveaux</div>
                    <div className="text-white font-semibold leading-tight">Tous</div>
                  </div>
                </div>
              </div>

              {/* Notre histoire */}
              <section className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-white drop-shadow-md not-prose mb-3">
                  Notre histoire
                </h2>
                <p className="text-white/90 leading-relaxed mb-4">
                  L'Association Genevoise de Backgammon a été fondée en 2005 par un groupe
                  de passionnés désireux de structurer la pratique de ce jeu ancestral dans
                  la région lémanique. Depuis cette date, elle n'a cessé de croître et de
                  s'enrichir, accueillant des joueurs de tous horizons et de tous niveaux.
                </p>
                <p className="text-white/90 leading-relaxed mb-4">
                  Au fil des décennies, l'association s'est imposée comme une référence en
                  Suisse romande, organisant des tournois reconnus et participant activement
                  au développement du backgammon moderne. Elle a su préserver l'esprit
                  convivial et sportif qui caractérise ce jeu tout en s'adaptant aux
                  évolutions contemporaines.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Aujourd'hui, forte de son expérience et de sa réputation, l'Association
                  Genevoise de Backgammon continue de rayonner bien au‑delà des frontières
                  cantonales, attirant des joueurs de toute la Suisse et des pays voisins.
                </p>
              </section>

              <hr className="my-8 border-white/10" />

              {/* Notre mission */}
              <section>
                <h2 className="text-2xl font-semibold text-white drop-shadow-md mb-5">
                  Notre mission
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-3 inline-block w-2 h-2 rounded-full bg-accent/90" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Organiser des tournois</h3>
                        <p className="text-white/85">
                          Nous proposons régulièrement des compétitions officielles et amicales
                          pour tous les niveaux de jeu.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-3 inline-block w-2 h-2 rounded-full bg-accent/90" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Rassembler les joueurs</h3>
                        <p className="text-white/85">
                          Créer une communauté active et bienveillante où chacun peut progresser
                          et s'épanouir.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-3 inline-block w-2 h-2 rounded-full bg-accent/90" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Promouvoir le jeu</h3>
                        <p className="text-white/85">
                          Faire découvrir les richesses du backgammon au grand public et encourager sa pratique.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-3 inline-block w-2 h-2 rounded-full bg-accent/90" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Former et éduquer</h3>
                        <p className="text-white/85">
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
