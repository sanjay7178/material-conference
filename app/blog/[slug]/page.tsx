interface BlogPost {
  id: string
  title: string
  date: string
  content: string
  heroImage: string
}

// This would typically come from a CMS or API
const posts: Record<string, BlogPost> = {
  "looking-for-speakers": {
    id: "looking-for-speakers",
    title: "We're looking for speakers",
    date: "FEB 12, 2017",
    heroImage: "/placeholder.svg",
    content: `
      GDG DevFest Ukraine was announced, for the sixth year in a row, the conference will bring together 900 developers, managers and entrepreneurs on October 13-14 to Lviv.

      This year our team is doing big advancement in the content, we're building an extra stage to accommodate more visitors and provide three fully independent tracks on Android, Web and Google Cloud topics.

      Our focus is the content. We're looking for speakers like you, who are ready to rock the stage and deliver the best talk or workshop in the field. "I've been to conferences all over the world and what you've created in Lviv is world class. It's easily first league of conferences." - Piotr Tuszynski, DevFest '16 Keynote Speaker
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article>
      <div className="h-[60vh] relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${post.heroImage})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative h-full flex items-end pb-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg opacity-90">{post.date}</p>
          </div>
        </div>
      </div>

      <div className="container py-20">
        <div className="max-w-3xl mx-auto prose prose-lg">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="mt-12">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              SUBMIT A PROPOSAL
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

