import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!isHome) {
        setIsTransparent(false);
        return;
      }
      const heroHeight = window.innerHeight * 0.7; // déclenche quand on a quitté env. 70% du hero
      setIsTransparent(window.scrollY < heroHeight);
    };

    handleScroll(); // init au changement de route
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

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
    location.pathname === "/"
      ? "bg-gradient-to-b from-black/70 via-black/40 to-black/5 backdrop-blur-sm border-none"
      : "bg-black/80 backdrop-blur-md border-none"
  }`}
>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link to="/" className="flex items-center gap-3 text-xl font-bold text-white">
              <div className="flex items-center justify-center">
                <img
                  src="/logoAGB.png"
                  alt="Logo AGB"
                  className="h-12 w-12 md:h-14 md:w-14 object-contain"
                />
              </div>
              <span className="hidden sm:inline font-lora text-lg md:text-2xl lg:text-3xl">
                Association Genevoise de Backgammon
              </span>
              <span className="sm:hidden font-lora text-xl">AGB</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={[
                    "text-sm font-medium transition-colors",
                    isActive(item.href) ? "text-red-400" : "text-white/85 hover:text-white",
                    "relative pb-1",
                  ].join(" ")}
                >
                  {item.name}
                  {/* soulignement actif discret */}
                  {isActive(item.href) && (
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-red-400 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Ouvrir le menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav
              className={[
                "md:hidden pb-4 space-y-2 rounded-b-xl",
                // sur la home en haut, on met un fond pour lisibilité par-dessus la vidéo
                isHome && isTransparent ? "bg-black/80 backdrop-blur-md px-4 pt-2" : "",
              ].join(" ")}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={[
                    "block py-2 text-sm font-medium transition-colors",
                    isActive(item.href) ? "text-red-400" : "text-white/90 hover:text-white",
                  ].join(" ")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* CONTENT
         - Sur la home : pas de padding-top (le hero passe sous la navbar transparente)
         - Sur les autres pages : on ajoute un padding-top pour ne pas que le contenu soit masqué
      */}
      <main className={isHome ? "" : "pt-24 md:pt-28 flex-1"}>{children}</main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-lora text-lg font-semibold mb-3">
                Association Genevoise de Backgammon
              </h3>
              <p className="text-sm text-gray-400">
                Le backgammon à Genève depuis 2005. Rejoignez-nous pour des tournois, ateliers et
                rencontres conviviales.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Liens rapides</h4>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="hover:text-red-400 transition-colors">
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
                className="text-xs text-gray-500 hover:text-red-400 transition-colors block mt-4"
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
