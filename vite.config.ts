import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Garder base: "/" dans le fichier pour Vercel/Infomaniak.
// Pour GitHub Pages, on forcera la base via le workflow (--base=...).
export default defineConfig(({ mode }) => ({
  server: { host: "::", port: 8080 },
  base: "/", // <-- ne pas changer ici
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
