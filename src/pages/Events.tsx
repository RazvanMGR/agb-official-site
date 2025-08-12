import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Events = () => {
  return (
    <div className="relative min-h-screen page-transition">
      {/* Image de fond */}
      <img
        src="/table.png"
        alt=""
        aria-hidden
        draggable="false"
        className="fixed inset-0 z-0 w-full h-full object-cover object-center blur-sm brightness-[.82] saturate-75 pointer-events-none select-none [object-position:center_17%]"
      />

      {/* Voile sombre */}
      <div className="fixed inset-0 z-10 bg-black/45 pointer-events-none" />

      {/* Contenu */}
      <div className="relative z-20 container mx-auto px-4 pt-32 pb-32">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10">
            <div className="p-8 md:p-10 text-center">
              <Calendar className="mx-auto w-10 h-10 text-accent mb-4" />
              <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-md mb-4">
                Prochains tournois
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Restez informés de nos événements et compétitions
              </p>
              <p className="text-white/85 mb-4">
                Les informations concernant les prochains événements seront affichées ici prochainement.
              </p>
              <p className="text-xs text-gray-400">
                Le comité ajoutera les informations nécessaires dans cette section. Structure en cours de mise en place.
              </p>
            </div>
          </Card>

          {/* Infos */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <Card className="rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-3">Types de tournois</h3>
              <ul className="list-disc list-inside text-white/85 space-y-1 text-sm">
                <li>Tournois officiels</li>
                <li>Compétitions amicales</li>
                <li>Événements inter-clubs</li>
              </ul>
            </Card>
            <Card className="rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-3">Informations pratiques</h3>
              <ul className="list-disc list-inside text-white/85 space-y-1 text-sm">
                <li>Inscription préalable requise</li>
                <li>Tous niveaux acceptés</li>
                <li>Matériel fourni</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
