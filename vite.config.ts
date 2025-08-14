import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/agb-official-site/", // important pour que JS/CSS soient chargés au bon endroit
});
