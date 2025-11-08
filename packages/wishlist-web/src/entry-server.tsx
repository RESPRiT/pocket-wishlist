import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";
import "@/styles/globals.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";

library.add(fas, far);

export function render() {
  const html = renderToString(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>,
  );
  return { html };
}
