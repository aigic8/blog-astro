// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import remarkGithubAlerts from "remark-github-alerts"

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkGithubAlerts],
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "catppuccin-macchiato",
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
