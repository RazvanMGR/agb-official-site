import { useState } from "react";

export default function HeroAvecCTA() {
  const [etat, setEtat] = useState<"idle" | "envoi" | "ok" | "erreur">("idle");

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEtat("envoi");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      hp_field: data.get("website"), // honeypot invisible
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setEtat("ok");
        form.reset();
      } else {
        setEtat("erreur");
      }
    } catch {
      setEtat("erreur");
    }
  }

  return (
    <section className="relative bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* GAUCHE — ton texte d’intro */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Association Genevoise de Backgammon
            </h1>
            <p className="mt-4 text-lg text-zinc-300">
              Rejoignez nos soirées, tournois et initiations. Tous niveaux.
            </p>
            <ul className="mt-6 space-y-2 text-zinc-300">
              <li>• Soirées hebdomadaires</li>
              <li>• Tournois mensuels</li>
              <li>• Ouvert à tous</li>
            </ul>
          </div>

          {/* DROITE — carte CTA (formulaire) */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl backdrop-blur">
            <h2 className="text-xl font-medium">Contact rapide</h2>
            <p className="mt-1 text-sm text-zinc-400">Réponse sous 24–48 h.</p>

            {etat === "ok" ? (
              <div className="mt-6 rounded-md border border-green-700 bg-green-900/30 p-4 text-sm">
                Merci ! Votre message a bien été envoyé.
              </div>
            ) : (
              <form onSubmit={envoyer} className="mt-6 space-y-4">
                {/* Honeypot (ne pas retirer) */}
                <div className="hidden">
                  <label>Website</label>
                  <input name="website" autoComplete="off" tabIndex={-1} />
                </div>

                <div>
                  <label className="block text-sm text-zinc-300">Nom</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg border border-zinc-700 bg-black px-3 py-2 text-white outline-none focus:border-zinc-400"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-lg border border-zinc-700 bg-black px-3 py-2 text-white outline-none focus:border-zinc-400"
                    placeholder="vous@exemple.ch"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-zinc-700 bg-black px-3 py-2 text-white outline-none focus:border-zinc-400"
                    placeholder="Votre message…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={etat === "envoi"}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white transition hover:bg-white/20 disabled:opacity-50"
                >
                  {etat === "envoi" ? "Envoi…" : "Envoyer le message"}
                </button>

                <p className="text-[11px] text-zinc-500">
                  En envoyant ce formulaire, vous acceptez d’être contacté.
                </p>
              </form>
            )}

            {etat === "erreur" && (
              <div className="mt-4 rounded-md border border-red-700 bg-red-900/30 p-3 text-sm">
                Oups, une erreur est survenue. Écrivez-nous directement :
                <a href="mailto:contact@votre-domaine.ch" className="underline"> contact@votre-domaine.ch</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

