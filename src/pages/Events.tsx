import { Card } from "@/components/ui/card";

const Events = () => {
  return (
    <div className="relative min-h-screen page-transition">
      {/* Image de fond — EXACTEMENT comme About */}
      <img
        src="/table.png"
        alt=""
        aria-hidden
        draggable="false"
        className="absolute inset-0 z-0 w-full h-full object-cover object-center blur-sm brightness-[.82] saturate-75"
      />

      {/* Voile sombre — EXACTEMENT comme About */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* Contenu — EXACTEMENT mêmes classes que About */}
      <div className="relative z-20 container mx-auto px-4 pt-32 pb-32">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10">
            <div className="p-8 md:p-10">
              {/* Header — mêmes marges/tailles que About */}
              <header className="text-center mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-md mb-4">
                  Prochains tournois
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6">
                  Restez informés de nos événements et compétitions
                </p>
              </header>

              {/* Bloc 1 — même structure de section que About */}
              <section className="prose prose-invert prose-lg max-w-none">
                <p className="text-white/90 leading-relaxed mb-4">
                  Les informations concernant les prochains événements seront affichées ici
                  prochainement.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Le comité ajoutera les informations nécessaires dans cette section.
                  Structure en cours de mise en place.
                </p>
              </section>

              <hr className="my-8 border-white/10" />

              {/* Bloc 2 — même grille que About */}
              <section>
                <h2 className="text-2xl font-semibold text-white drop-shadow-md mb-5">
                  Informations générales
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-1">Types de tournois</h3>
                      <p className="text-white/85">
                        Officiels, amicales, et inter‑clubs selon le calendrier de l’association.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Niveaux</h3>
                      <p className="text-white/85">
                        Tous niveaux sont les bienvenus, du débutant au joueur confirmé.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-1">Inscription</h3>
                      <p className="text-white/85">
                        Une inscription préalable est généralement requise. Détails à venir.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Matériel</h3>
                      <p className="text-white/85">
                        Le matériel peut être fourni sur place selon les événements.
                      </p>
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

export default Events;
