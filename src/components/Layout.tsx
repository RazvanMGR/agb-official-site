import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7; // hauteur de déclenchement
      setIsTransparent(window.scrollY > 0 && window.scrollY < heroHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Événements", href: "/events" },
    { name: "Résultats", href: "/results" },
    { name: "Comité", href: "/committee" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          isTransparent
            ? "bg-black/55 backdrop-blur-md border-b border-white/10"
            : "bg-black border-b border-white/10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24 md:h-28">
            <Link to="/" className="flex items-center gap-3 text-xl font-bold text-white">
              <div className="flex items-center justify-center">
                <img
                  src="/logoAGB.png"
                  alt="Logo AGB"
                  className="h-14 w-14 md:h-16 md:w-16 object-contain"
                />
              </div>
              <span className="hidden sm:inline font-lora text-lg md:text-2xl lg:text-3xl">
                Association Genevoise de Backgammon
              </span>
              <span className="sm:hidden font-lora text-xl">AGB</span>
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
                      : "text-white"
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
              className="md:hidden text-white"
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
                    isActive(item.href) ? "text-accent" : "text-white"
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

      {/* CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-lora text-lg font-semibold mb-3">Association Genevoise de Backgammon</h3>
              <p className="text-sm text-gray-400">
                Le backgammon à Genève depuis 2005. Rejoignez-nous pour des tournois, ateliers et rencontres conviviales.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Liens rapides</h4>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="hover:text-accent transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <p className="text-sm text-gray-400">contact@backgammon-geneve.ch</p>
              <p className="text-sm text-gray-400 mt-1">Genève, Suisse</p>
              <Link
                to="/admin"
                className="text-xs text-gray-500 hover:text-accent transition-colors block mt-4"
              >
                🔒 Administrateurs
              </Link>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-4 text-center text-xs text-gray-500">
            © 2024 Association Genevoise de Backgammon. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
