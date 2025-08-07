import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Événements", href: "/events" },
    { name: "Résultats", href: "/results" },
    { name: "Comité", href: "/committee" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 text-xl font-bold text-primary">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 80" className="w-10 h-8">
                  {/* Triangle beige */}
                  <polygon points="20,10 80,10 50,60" fill="#D4D0C8" stroke="#000" strokeWidth="2"/>
                  {/* Cercle rouge */}
                  <circle cx="50" cy="35" r="15" fill="#FF0000" stroke="#000" strokeWidth="2"/>
                  {/* Ligne noire en bas */}
                  <line x1="10" y1="70" x2="90" y2="70" stroke="#000" strokeWidth="3"/>
                  {/* Texte GB */}
                  <text x="95" y="50" fontSize="20" fontWeight="bold" fill="#000">GB</text>
                </svg>
              </div>
              <span className="hidden sm:inline">Association Genevoise de Backgammon</span>
              <span className="sm:hidden">AGB</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive(item.href)
                      ? "text-accent border-b-2 border-accent"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-accent ${
                    isActive(item.href) ? "text-accent" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 Association Genevoise de Backgammon. Tous droits réservés.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Le backgammon à Genève, depuis 1976.
              </p>
            </div>
            <div className="text-center md:text-right">
              <Link
                to="/admin"
                className="text-xs text-muted-foreground hover:text-accent transition-colors"
              >
                🔒 Administrateurs
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;