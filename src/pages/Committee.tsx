import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      description: "Responsable de la direction générale de l'association"
    },
    {
      name: "Maria Rossi",
      role: "Trésorière", 
      description: "Gestion des finances et de la comptabilité"
    },
    {
      name: "André Müller",
      role: "Responsable des tournois",
      description: "Organisation et coordination des événements"
    }
  ];

  return (
    <div className="page-transition py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Le comité
            </h1>
            <p className="text-xl text-muted-foreground">
              L'équipe dévouée qui anime l'association
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {member.name}
                  </CardTitle>
                  <div className="text-accent font-semibold">
                    {member.role}
                  </div>
                </CardHeader>
                <CardContent>
                  {member.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  Engagement et bénévolat
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  L'Association Genevoise de Backgammon fonctionne entièrement grâce 
                  à l'engagement bénévole de ses membres. Chacun contribue selon ses 
                  compétences et sa disponibilité au bon fonctionnement de l'association.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Direction</h3>
                    <p className="text-sm text-muted-foreground">
                      Orientation stratégique et représentation
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Organisation</h3>
                    <p className="text-sm text-muted-foreground">
                      Coordination des événements et activités
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Administration</h3>
                    <p className="text-sm text-muted-foreground">
                      Gestion financière et administrative
                    </p>
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

export default Committee;