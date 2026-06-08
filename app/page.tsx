import { BlogPosts } from "@/app/components/posts";
import { siteConfig } from "@/app/site";

export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {siteConfig.name}
      </h1>
      <p className="mb-4">{siteConfig.description}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
