import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in a real app, this would be handled securely
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  if (isAuthenticated) {
    return (
      <div className="page-transition py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Espace Administrateurs
              </h1>
              <p className="text-xl text-muted-foreground">
                Bienvenue dans l'interface de gestion
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Gestion du contenu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cette section sera développée pour permettre la gestion complète 
                  du site web par le comité.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Événements</h3>
                    <p className="text-sm text-muted-foreground">
                      Ajouter et modifier les tournois
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Résultats</h3>
                    <p className="text-sm text-muted-foreground">
                      Publier les classements
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Comité</h3>
                    <p className="text-sm text-muted-foreground">
                      Modifier les informations membres
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Actualités</h3>
                    <p className="text-sm text-muted-foreground">
                      Gérer les communications
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl text-primary">
                Espace réservé au comité
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Merci d'entrer le mot de passe.
              </p>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Entrez le mot de passe"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Accéder
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;