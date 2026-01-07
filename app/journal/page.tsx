import Link from "next/link"
import { formatDate } from "@/lib/utils"

// This would eventually come from MDX files
const blogPosts = [
  {
    slug: "competing-with-ai",
    title: "New Grads Aren't Competing With AI, But the People Who Use It Better.",
    summary:
      "An exploration of how AI literacy is redefining competitive advantage in early-career marketing roles.",
    date: "2026-01-07",
    tags: ["AI", "Career", "Strategy"],
    coverImage: "/images/competing-with-ai.jpg",
    readTime: "8 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-medium mb-4">Journal</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Thoughts on marketing, strategy, and building things that work. Insights from navigating the intersection of creativity, technology, and business.
        </p>
      </div>

      {/* Divider above posts */}
      <div className="border-t border-border mb-12"></div>

      {/* Featured Post - Horizontal Card */}
      {blogPosts[0] && (
        <Link href={`/journal/${blogPosts[0].slug}`} className="group block mb-12">
          <article className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image on the left */}
            <div className="w-full md:w-64 flex-shrink-0 aspect-[16/10] bg-muted rounded-sm overflow-hidden">
              <img
                src={blogPosts[0].coverImage || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Text content on the right */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {blogPosts[0].tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-sm text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-medium mb-3 group-hover:text-primary transition-colors text-balance">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3 text-pretty">{blogPosts[0].summary}</p>
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
      <div className="border-t border-border mb-12"></div>

      {/* Coming Soon Message */}
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          More posts coming soon. Subscribe or check back later.
        </p>
      </div>
    </div>
  )
}
