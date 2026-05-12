import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { resolve } from "path";

// SPA-only build. The production server (server.ts) injects API bootstrap
// data into the prerendered shell rather than rendering React server-side.
// GH_PAGES only flips the base path; both targets share the SPA artifact.
const isGhPages = process.env.GH_PAGES === "true";

// https://vitejs.dev/config/
export default defineConfig({
  base: isGhPages ? "/pocket-wishlist/" : "/",
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: { outputPath: "index" },
        maskPath: "/pocket-wishlist/",
      },
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
  ssr: {
    noExternal: ["./src/styles/globals.css"],
  },
});
