import tailwindcss from "bun-plugin-tailwind";

// NOTE: This file only exists for experimenting, it
//       is not used for actual building (Vite is)
await Bun.build({
  entrypoints: ["./index.html"],
  outdir: "./dist",
  plugins: [tailwindcss],
});
