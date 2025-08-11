import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Events = () => {
  return (
    <div className="relative min-h-screen page-transition">
      {/* Image de fond (identique à About) */}
      <img
        src="/table.png"
        alt=""
        aria-hidden
        draggable="false"
        className="absolute inset-0 z-0 w-full h-full object-cover object-center blur-sm brightness-[.82] saturate-75"
      />

      {/* Voile sombre */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* Contenu */}
      <div className="relative z-20 container mx-auto px-4 pt-32 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Carte principale */}
          <Card className="rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-black/40 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white/80" />
              </div>
              <CardTitle className="text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
                Prochains tournois
              </CardTitle>
              <p className="mt-4 text-lg md:text-xl text-white/90">
                Restez informés de nos événements et compétitions
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                Les informations concernant les prochains événements seront affichées ici
                prochainement.
              </p>
              <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                <p className="text-sm text-white/70">
                  Le comité ajoutera les informations nécessaires dans cette section.
                  Structure en cours de mise en place.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Deux cartes dessous, mêmes styles que About */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">Types de tournois</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Tournois officiels</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Compétitions amicales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Événements inter-clubs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">Informations pratiques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Inscription préalable requise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Tous niveaux acceptés</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Matériel fourni</span>
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

export default Events;
