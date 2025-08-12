import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

interface CommitteeMember {
  name: string;
  role: string;
  description?: string;
}

const Committee = () => {
  const members: CommitteeMember[] = [
    {
      name: "Jean Dupont",
      role: "Président",
      description: "Responsable de la direction générale de l'association",
    },
    {
      name: "Maria Rossi",
      role: "Trésorière",
      description: "Gestion des finances et de la comptabilité",
    },
    {
      name: "André Müller",
      role: "Responsable des tournois",
      description: "Organisation et coordination des événements",
    },
  ];

  return (
    <div className="relative min-h-screen page-transition">
      {/* Image de fond — identique à Events */}
      <img
        src="/table.png"
        alt=""
        aria-hidden
        draggable="false"
        className="absolute inset-0 z-0 w-full h-full object-cover blur-sm brightness-[.82] saturate-75"
      />

      {/* Voile sombre — identique à Events */}
      <div className="fixed inset-0 z-10 bg-black/45 pointer-events-none" />

      {/* Contenu */}
      <div className="relative z-20 container mx-auto px-4 pt-32 pb-32">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <Card className="rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10">
            <div className="p-8 md:p-10 text-center">
              <User className="mx-auto w-10 h-10 text-accent mb-4" />
              <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-md mb-4">
                Le comité
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                L'équipe dévouée qui anime l'association
              </p>
            </div>
          </Card>

          {/* Membres */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {members.map((m, i) => (
              <Card
                key={i}
                className="rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="mx-auto mb-4 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">{m.name}</h3>
                <div className="text-accent font-semibold mt-1">{m.role}</div>
                {m.description && (
                  <p className="text-white/80 text-sm leading-relaxed mt-3">
                    {m.description}
                  </p>
                )}
              </Card>
            ))}
          </div>

          {/* Bloc engagement */}
          <div className="mt-16">
            <Card className="rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10">
              <div className="p-8 md:p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Engagement et bénévolat
                </h2>
                <p className="text-lg text-white/85 leading-relaxed mb-8">
                  L'Association Genevoise de Backgammon fonctionne entièrement grâce à
                  l'engagement bénévole de ses membres. Chacun contribue selon ses
                  compétences et sa disponibilité au bon fonctionnement de l'association.
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <Card className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-6">
                    <h3 className="font-semibold text-white mb-2">Direction</h3>
                    <p className="text-white/80 text-sm">
                      Orientation stratégique et représentation
                    </p>
                  </Card>
                  <Card className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-6">
                    <h3 className="font-semibold text-white mb-2">Organisation</h3>
                    <p className="text-white/80 text-sm">
                      Coordination des événements et activités
                    </p>
                  </Card>
                  <Card className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-6">
                    <h3 className="font-semibold text-white mb-2">Administration</h3>
                    <p className="text-white/80 text-sm">
                      Gestion financière et administrative
                    </p>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
