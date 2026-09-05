// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// www.cycladat.com: the landing page is a plain Astro page (src/pages/index.astro,
// the original static HTML kept as-is); everything under src/content/docs is
// rendered by Starlight (legal documents, and the user docs).
export default defineConfig({
  site: "https://www.cycladat.com",
  trailingSlash: "always",
  // No prefetch script: keeps the landing page byte-for-byte the original markup.
  prefetch: false,
  vite: { server: { allowedHosts: ["rainbox.tail8716e8.ts.net"] } },
  integrations: [
    starlight({
      title: "cycladat",
      // Fails the build on broken internal links or #anchors in the docs.
      plugins: [starlightLinksValidator()],
      description:
        "Overlay real-time Strava telemetry data on your cycling videos with Cycladat.",
      logo: {
        dark: "./src/assets/cycladat-logo-white.png",
        light: "./src/assets/cycladat-logo-black.png",
        replacesTitle: true,
        alt: "cycladat",
      },
      favicon: "/assets/favicon/favicon-32x32.png",
      customCss: ["./src/styles/cycladat.css"],
      pagefind: true,
      social: [
        { icon: "instagram", label: "cycladat on Instagram", href: "https://instagram.com/cycladat" },
        { icon: "youtube", label: "cycladat on YouTube", href: "https://youtube.com/@cycladat" },
        { icon: "tiktok", label: "cycladat on TikTok", href: "https://tiktok.com/@cycladat" },
      ],
      sidebar: [
        { label: "Home", link: "/" },
        { label: "Help", link: "/help/" },
        { label: "Troubleshooting", items: [{ autogenerate: { directory: "help/troubleshooting" } }] },
        { label: "How-tos", items: [{ autogenerate: { directory: "help/how-to" } }] },
        {
          label: "Legal",
          items: [
            { label: "Privacy policy", link: "/privacy/" },
            { label: "Terms of service", link: "/terms/" },
            { label: "Cookie policy", link: "/cookies/" },
            { label: "EULA", link: "/eula/" },
          ],
        },
      ],
    }),
  ],
});
