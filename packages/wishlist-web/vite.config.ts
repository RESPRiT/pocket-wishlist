import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { resolve } from "path";

// SPA build via vanilla Vite + @tanstack/react-router (file-based routing).
// The production server (server.ts) injects API bootstrap data into the
// static shell; React mounts via createRoot, no SSR or prerender.
const isGhPages = process.env.GH_PAGES === "true";

// https://vitejs.dev/config/
export default defineConfig({
  base: isGhPages ? "/pocket-wishlist/" : "/",
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    viteReact({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
