import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { renderToString } from "react-dom/server";
import { StrictMode } from "react";
import App from "./src/App";
import { ThemeProvider } from "./src/contexts/ThemeContext";

// FontAwesome setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

const app = new Hono();

// Serve static assets from dist/client
app.use("/assets/*", serveStatic({ root: "./dist/client" }));
app.use("/src/*", serveStatic({ root: "./dist/client" }));

// SSR handler
app.get("*", (c) => {
  try {
    const html = renderToString(
      <StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StrictMode>,
    );

    return c.html(
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📃</text></svg>"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" />
    <title>pocket wishlist</title>
    <script type="module" src="/src/entry-client.js"></script>
  </head>
  <body>
    <div id="root">${html}</div>
  </body>
</html>`,
    );
  } catch (e) {
    console.error(e);
    return c.text("Internal Server Error", 500);
  }
});

export default {
  port: 3000,
  fetch: app.fetch,
};
