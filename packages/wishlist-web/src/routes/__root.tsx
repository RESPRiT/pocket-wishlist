// https://tanstack.com/start/latest/docs/framework/react/build-from-scratch
/// <reference types="vite/client" />
import { StrictMode, type ReactNode } from "react";
import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import globalsCss from "@/styles/globals.css?url";
import texturesCss from "@/styles/textures.css?url";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { QueryClient } from "@tanstack/react-query";
config.autoAddCss = false; // https://stackoverflow.com/a/59429852

// add font-awesome icons
library.add(fas, far);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "pocket wishlist",
        },
        {
          name: "theme",
        },
      ],
      links: [
        { rel: "stylesheet", href: globalsCss },
        { rel: "stylesheet", href: texturesCss },
      ],
      scripts: [
        {
          // set the page theme based on client settings (server always renders light)
          children: `
          (function() {
            const theme = localStorage.getItem("theme") 
              || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            document.documentElement.setAttribute("data-theme", theme);
          })();
        `,
        },
      ],
    }),
    component: RootComponent,
  },
);

function RootComponent() {
  return (
    <RootDocument>
      <StrictMode>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
      </StrictMode>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
