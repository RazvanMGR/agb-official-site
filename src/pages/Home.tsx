import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trophy, MapPin, Users } from "lucide-react";

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
          <div className="max-w-xl animate-fadeInUp">
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
      
      {/* Carte 1 */}
      <Card className="group bg-white/5 border border-red-500/30 hover:border-red-500/60 shadow-lg backdrop-blur-sm rounded-xl transition transform hover:-translate-y-2 hover:shadow-red-500/20">
        <CardContent className="p-10 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8m-8-4h8m-8-4h8M6 3h12v2H6z" />
          </svg>
          <div className="text-4xl font-bold text-red-500 mb-2">2005</div>
          <h3 className="text-xl font-semibold text-white mb-2">Fondation</h3>
          <p className="text-gray-300">
            Près de 20 ans d’histoire et de passion pour le backgammon.
          </p>
        </CardContent>
      </Card>

      {/* Carte 2 */}
      <Card className="group bg-white/5 border border-red-500/30 hover:border-red-500/60 shadow-lg backdrop-blur-sm rounded-xl transition transform hover:-translate-y-2 hover:shadow-red-500/20">
        <CardContent className="p-10 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 111.414-1.414z" />
          </svg>
          <div className="text-4xl font-bold text-red-500 mb-2">Genève</div>
          <h3 className="text-xl font-semibold text-white mb-2">Localisation</h3>
          <p className="text-gray-300">
            Au cœur de la Suisse romande, rayonnement régional.
          </p>
        </CardContent>
      </Card>

      {/* Carte 3 */}
      <Card className="group bg-white/5 border border-red-500/30 hover:border-red-500/60 shadow-lg backdrop-blur-sm rounded-xl transition transform hover:-translate-y-2 hover:shadow-red-500/20">
        <CardContent className="p-10 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5V8H2v12h5m10-8v8m0-8l-5 5m5-5l5 5" />
          </svg>
          <div className="text-4xl font-bold text-red-500 mb-2">Tous</div>
          <h3 className="text-xl font-semibold text-white mb-2">Niveaux</h3>
          <p className="text-gray-300">
            Débutants et experts réunis par la passion du jeu.
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
