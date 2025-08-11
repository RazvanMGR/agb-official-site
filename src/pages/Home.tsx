import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const cta =
    "inline-flex items-center justify-center h-11 px-6 rounded-md border border-white/80 text-white/95 " +
    "bg-white/0 hover:bg-white hover:text-black transition shadow-sm backdrop-blur-sm";

  return (
    <div className="page-transition font-serif">
      {/* HERO — vidéo plein écran directement sous la navbar */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="font-display text-[36px] leading-tight sm:text-[44px] lg:text-[56px] text-[#E8DDC8] mb-4">
              Association Genevoise de Backgammon
            </h1>
            <p className="text-lg lg:text-xl text-red-400 font-medium mb-6">
              Le backgammon à Genève, depuis 2005.
            </p>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-8">
              Depuis près de vingt ans, l’Association Genevoise de Backgammon rassemble les
              passionnés de ce jeu millénaire dans la région lémanique. Que vous soyez débutant
              ou joueur expérimenté, notre communauté vous attend pour partager la passion de ce
              jeu de stratégie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className={cta}>Découvrir l'association</Link>
              <Link to="/events" className={cta}>Prochains événements</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INFOS */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border border-white/10 shadow-none backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">2005</div>
                <h3 className="text-lg font-semibold mb-2">Fondation</h3>
                <p className="text-white/70">
                  Près de 20 ans d'histoire et de passion pour le backgammon
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border border-white/10 shadow-none backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">Genève</div>
                <h3 className="text-lg font-semibold mb-2">Localisation</h3>
                <p className="text-white/70">
                  Au cœur de la Suisse romande, rayonnement régional
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border border-white/10 shadow-none backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">Tous</div>
                <h3 className="text-lg font-semibold mb-2">Niveaux</h3>
                <p className="text-white/70">
                  Débutants et experts réunis par la passion du jeu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
