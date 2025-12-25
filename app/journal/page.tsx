import Link from "next/link"
import { formatDate } from "@/lib/utils"

// This would eventually come from MDX files
const blogPosts = [
  {
    slug: "creative-process",
    title: "Developing a Sustainable Creative Process",
    summary:
      "How I've refined my creative workflow over the years to balance productivity with creative exploration and client collaboration.",
    date: "2024-01-15",
    tags: ["Process", "Creativity", "Business"],
    coverImage: "/creative-workspace-desk.jpg",
    readTime: "8 min read",
  },
  {
    slug: "brand-authenticity",
    title: "Why Brand Authenticity Matters More Than Ever",
    summary:
      "In an age of endless content and digital noise, authentic brand storytelling has become the key differentiator for meaningful connections.",
    date: "2024-01-08",
    tags: ["Branding", "Strategy", "Marketing"],
    coverImage: "/authentic-brand-storytelling.jpg",
    readTime: "6 min read",
  },
  {
    slug: "photography-lighting",
    title: "Natural Light Photography: A Practical Guide",
    summary:
      "Essential techniques for working with natural light in commercial and editorial photography, from golden hour to overcast conditions.",
    date: "2023-12-20",
    tags: ["Photography", "Tutorial", "Technique"],
    coverImage: "/natural-light-photography.jpg",
    readTime: "10 min read",
  },
  {
    slug: "client-relationships",
    title: "Building Long-Term Client Relationships",
    summary:
      "The strategies and mindsets that have helped me maintain strong, productive relationships with clients over multiple projects and years.",
    date: "2023-12-10",
    tags: ["Business", "Consulting", "Relationships"],
    coverImage: "/client-meeting-collaboration.jpg",
    readTime: "7 min read",
  },
  {
    slug: "design-trends-2024",
    title: "Design Trends I'm Watching in 2024",
    summary:
      "A curated look at emerging visual trends and design movements that are shaping the creative landscape this year.",
    date: "2023-12-01",
    tags: ["Design", "Trends", "Industry"],
    coverImage: "/design-trends-2024.jpg",
    readTime: "5 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-medium mb-4">Journal</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Thoughts on creativity, design, photography, and the business of making things. Insights from years of working
          across multiple creative disciplines.
        </p>
      </div>

      {/* Featured Post */}
      {blogPosts[0] && (
        <Link href={`/journal/${blogPosts[0].slug}`} className="group block mb-16">
          <article className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[16/10] bg-muted rounded-sm overflow-hidden order-2 md:order-1">
              <img
                src={blogPosts[0].coverImage || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {blogPosts[0].tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-sm text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-4 group-hover:text-primary transition-colors text-balance">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">{blogPosts[0].summary}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={blogPosts[0].date}>{formatDate(blogPosts[0].date)}</time>
                <span>·</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
            </div>
          </article>
        </Link>
      )}

      {/* Divider */}
      <div className="border-t-2 border-border mb-16"></div>

      {/* All Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <Link key={post.slug} href={`/journal/${post.slug}`} className="group">
            <article>
              <div className="aspect-[16/10] bg-muted rounded-sm overflow-hidden mb-4">
                <img
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-sm text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{post.summary}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
