import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "bun";
import { Hono } from "hono";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = new Hono();

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});

//app.use(vite.middlewares);

app.use("*all", async (c) => {
  const url = c.req.url;

  let template = fs.readFileSync(
    path.resolve(__dirname, "index.html"),
    "utf-8",
  );

  template = await vite.transformIndexHtml(url, template);

  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

  const appHtml = await render(url);

  const html = template.replace("<!--app-html-->", () => appHtml);

  c.html(html, 200);
});

export default {
  port: 5173,
  fetch: app.fetch,
};
