import { BlogPosts } from 'app/components/posts'
import { siteConfig } from 'app/site'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {siteConfig.name}
      </h1>
      <p className="mb-4">
        {`I'm Qiyang, a software developer who builds web products and writes about
        the ideas, tools, and problems I keep coming back to. This site is my
        personal space for sharing what I'm learning and the things worth keeping.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
