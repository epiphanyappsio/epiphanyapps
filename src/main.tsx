import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { redirectLegacyHost } from "./config/site";
import { preloadAppLogos } from "./data/apps";

redirectLegacyHost();
preloadAppLogos();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
