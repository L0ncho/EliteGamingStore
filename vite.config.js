import { cpSync, rmSync, writeFileSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const sourceIndex = `<!DOCTYPE html>
<html lang="es" data-bs-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Elite Gaming Store</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

function githubPagesRoot() {
  return {
    name: "github-pages-root",
    config(_config, { command }) {
      if (command === "build") {
        writeFileSync(resolve("index.html"), sourceIndex);
      }
    },
    transformIndexHtml(_html, ctx) {
      if (ctx.server) {
        return sourceIndex;
      }
    },
    closeBundle() {
      const dist = resolve("dist");
      cpSync(resolve(dist, "index.html"), resolve("index.html"));
      cpSync(resolve(dist, "juegos.json"), resolve("juegos.json"));
      cpSync(resolve(dist, ".nojekyll"), resolve(".nojekyll"));
      rmSync(resolve("assets"), { recursive: true, force: true });
      cpSync(resolve(dist, "assets"), resolve("assets"), { recursive: true });
    },
  };
}

export default defineConfig({
  base: "/EliteGamingStore/",
  plugins: [react(), githubPagesRoot()],
});
