import rss from "@astrojs/rss"
import type { APIRoute } from "astro"
import { getCollection } from "astro:content"
import { withBase } from "../lib/withBase"

export const GET: APIRoute = async (context) => {
	const posts = (await getCollection("posts")).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	)

	return rss({
		title: "aigic8 blog · posts",
		description: "New posts from aigic8 blog",
		site: context.site ?? "https://example.com",
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: withBase(`/posts/${post.id}/`),
		})),
	})
}
