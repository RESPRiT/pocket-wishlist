import path from "node:path";
import fs from "node:fs";
import { serve, type HttpBindings } from "@hono/node-server";
import { Hono } from "hono";
import { createMiddleware } from "hono/factory";
import { createServer } from "vite";

const __dirname = import.meta.dirname;

const app = new Hono<{ Bindings: HttpBindings }>();

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});

// Use HttpBindings to access real Node.js IncomingMessage and ServerResponse
app.use(
  "*",
  createMiddleware<{ Bindings: HttpBindings }>(async (ctx, next) => {
    return new Promise((resolve) => {
      vite.middlewares(ctx.env.incoming, ctx.env.outgoing, () =>
        resolve(next()),
      );
    });
  }),
);

// SSR handler
app.use("*", async (c) => {
  const url = c.req.url;

  try {
    let template = fs.readFileSync(
      path.resolve(__dirname, "index.html"),
      "utf-8",
    );

    template = await vite.transformIndexHtml(url, template);

    const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

    const { html: appHtml } = render();

    const html = template.replace("<!--app-html-->", appHtml);

    return c.html(html, 200);
  } catch (e) {
    vite.ssrFixStacktrace(e as Error);
    console.error(e);
    return c.text("Internal Server Error", 500);
  }
});

serve({ fetch: app.fetch, port: 5173 }, () => {
  console.log("Started development server: http://localhost:5173");
});
