import { join } from "$std/path/mod.ts";
import { extract } from "$std/front_matter/any.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}

export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
  const { attrs, body } = extract(text);
  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.publishedAt),
    content: body,
    snippet: attrs.snippet,
  };
}
