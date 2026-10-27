import rss from "@astrojs/rss"
import type { APIRoute } from "astro"
import { getCollection } from "astro:content"
import { withBase } from "../lib/withBase"

export const GET: APIRoute = async (context) => {
	const notes = (await getCollection("notes")).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	)

	return rss({
		title: "aigic8 blog · notes",
		description: "Short notes from aigic8 blog",
		site: context.site ?? "https://example.com",
		trailingSlash: false,
		items: notes.map((note) => ({
			title: note.data.title,
			description: note.body,
			pubDate: note.data.pubDate,
			link: withBase(`/#note-${note.id}`),
		})),
	})
}
