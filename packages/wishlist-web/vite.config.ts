import { defineConfig, type HtmlTagDescriptor, type Plugin } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { resolve } from "path";

// SPA build via vanilla Vite + @tanstack/react-router (file-based routing).
// The production server (server.ts) injects API bootstrap data into the
// static shell; React mounts via createRoot, no SSR or prerender.

// On cold loads Chrome only requests the woff2 subsets after CSS+JS have
// dominated the connection, so fonts land ~400ms after LCP and the user
// sees a visible swap (or FOIT in Firefox). Inject preload hints for the
// latin subsets so they race the JS bundle instead of trailing it.
function preloadLatinFonts(): Plugin {
  const fontPatterns = [
    /(^|\/)inter-latin-wght-normal-.*\.woff2$/,
    /(^|\/)roboto-mono-latin-wght-normal-.*\.woff2$/,
  ];
  let base = "/";
  return {
    name: "preload-latin-fonts",
    apply: "build",
    configResolved(config) {
      base = config.base;
    },
    transformIndexHtml: {
      order: "post",
      handler(_html, ctx) {
        if (!ctx.bundle) return;
        const tags: HtmlTagDescriptor[] = [];
        for (const fileName of Object.keys(ctx.bundle)) {
          if (fontPatterns.some((p) => p.test(fileName))) {
            tags.push({
              tag: "link",
              attrs: {
                rel: "preload",
                as: "font",
                type: "font/woff2",
                href: `${base}${fileName}`,
                crossorigin: "",
              },
              injectTo: "head-prepend",
            });
          }
        }
        return tags;
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  // Same-origin wire path everywhere: SPA hits /api/*, vite dev proxies
  // to the api so it looks identical to prod (where Traefik or the bun
  // server's /api/* handler does the same). The target is env-driven so a
  // single config serves both fastloops: `dev` uses the default below
  // (local api), while `dev:web` sets API_PROXY_TARGET to prod for
  // frontend-only work against live data.
  // — claude 464e7cab, 2026-05-31
  server: {
    proxy: {
      "/api": {
        target: process.env.API_PROXY_TARGET ?? "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
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
    preloadLatinFonts(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
