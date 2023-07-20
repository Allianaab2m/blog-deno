import IconBrandGithub from "tabler_icons/brand-github.tsx";

export default function FixAtGithubButton(props: { slug: string }) {
  const { slug } = props;
  const editLink =
    `https://github.com/Allianaab2m/blog-deno/edit/main/posts/${slug}.md`;
  return (
    <a href={editLink}>
      <button class="flex border">
        <IconBrandGithub class="w-6 h-6 m-2" />
        <p class="m-2">この記事をGitHubで編集する</p>
      </button>
    </a>
  );
}
