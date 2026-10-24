import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* In GitHub Actions, GITHUB_REPOSITORY is "owner/repo" — derive the Pages
   path and absolute site URL from it so the build works on any account. */
const [owner = "rumki-das", repo = "wedding-invitation"] = (process.env.GITHUB_REPOSITORY || "").split("/").filter(Boolean);
const siteUrl = `https://${owner.toLowerCase()}.github.io/${repo}/`;

export default defineConfig(({ command }) => ({
  base: command === "build" ? `/${repo}/` : "/",
  plugins: [
    react(),
    {
      name: "site-url",
      transformIndexHtml: (html) => html.replaceAll("%SITE_URL%", siteUrl),
    },
  ],
}));
