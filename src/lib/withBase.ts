/** Prefix a site path with the configured base URL (e.g. /blog-astro). */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, "")
	if (/^https?:\/\//.test(path) || path.startsWith("#")) return path
	return `${base}${path.startsWith("/") ? path : `/${path}`}`
}
