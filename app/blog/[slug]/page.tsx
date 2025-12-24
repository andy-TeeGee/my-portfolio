"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { formatDate } from "@/lib/utils"

// This would eventually come from MDX files
const getPostData = (slug: string) => {
  return {
    title: "Developing a Sustainable Creative Process",
    summary:
      "How I've refined my creative workflow over the years to balance productivity with creative exploration and client collaboration.",
    date: "2024-01-15",
    tags: ["Process", "Creativity", "Business"],
    coverImage: "/creative-workspace-desk.jpg",
    readTime: "8 min read",
    content: `
      <p>Over the past decade of working as a creative consultant, I've learned that the key to sustainable creativity isn't about working harder—it's about working smarter and building systems that support both productivity and creative exploration.</p>

      <h2>The Challenge of Creative Work</h2>
      <p>Creative work is inherently unpredictable. Some days, ideas flow effortlessly. Other days, you're staring at a blank canvas wondering if you'll ever have another good idea again. This unpredictability can be stressful, especially when you're running a business and have clients depending on you.</p>

      <p>Early in my career, I tried to force creativity to fit into rigid schedules. I'd block out "creative time" and expect inspiration to show up on command. Unsurprisingly, this rarely worked. I'd end up frustrated, burnt out, and producing work that felt forced.</p>

      <h2>Building a Flexible Framework</h2>
      <p>What I've learned is that while you can't schedule inspiration, you can create conditions that make it more likely to occur. This means building a flexible framework that provides structure without constraining creativity.</p>

      <p>My current process involves three key phases:</p>

      <h3>1. Research & Immersion</h3>
      <p>Before diving into any creative work, I spend dedicated time immersing myself in the problem space. This might involve:</p>
      <ul>
        <li>Reviewing competitive work and industry trends</li>
        <li>Having deep conversations with clients and stakeholders</li>
        <li>Collecting visual references and inspiration</li>
        <li>Understanding the audience and context</li>
      </ul>

      <h3>2. Exploration & Iteration</h3>
      <p>This is where the magic happens, but it's also the messiest phase. I give myself permission to explore without judgment, creating multiple directions and variants. The key is quantity over quality at this stage—generating options rather than perfecting a single idea.</p>

      <h3>3. Refinement & Execution</h3>
      <p>Once I've explored broadly, I narrow down to the strongest concepts and refine them with precision. This is where craft and attention to detail become paramount.</p>

      <h2>Protecting Creative Energy</h2>
      <p>Perhaps the most important lesson I've learned is about energy management. Creative work requires mental space and cognitive bandwidth. If you're constantly context-switching or dealing with administrative tasks, you won't have the energy for deep creative thinking.</p>

      <p>I now batch similar tasks together, protect my most productive hours for creative work, and build in regular breaks for rest and reflection. I've also learned to recognize when I'm forcing it—and to step away rather than push through.</p>

      <h2>Collaboration and Feedback</h2>
      <p>No creative works in a vacuum. I've built a network of trusted collaborators, mentors, and clients who provide valuable feedback throughout the process. The key is knowing who to involve at which stage, and being open to feedback while also trusting your creative instincts.</p>

      <h2>Continuous Evolution</h2>
      <p>The creative process isn't something you perfect once and then repeat forever. It needs to evolve as you grow, as your work changes, and as the industry shifts. I regularly reflect on what's working and what isn't, making adjustments to keep my process sustainable and effective.</p>

      <p>What works for me might not work for you—and that's okay. The goal is to find your own sustainable rhythm that allows you to do your best work while maintaining your creative energy for the long haul.</p>
    `,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug)

  return (
    <article className="pb-20">
      {/* Hero */}
      <div className="bg-card py-12 md:py-20 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2" size={16} />
              Back to blog
            </Link>
          </Button>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-sm text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-muted rounded-sm overflow-hidden">
            <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto prose prose-lg prose-neutral"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            fontFamily: "var(--font-sans)",
          }}
        />
      </div>

      {/* Add custom styles for prose content */}
      <style jsx global>{`
        .prose {
          color: oklch(0.35 0.01 260);
        }
        .prose h2 {
          font-family: var(--font-serif);
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: oklch(0.25 0.01 260);
        }
        .prose h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: oklch(0.25 0.01 260);
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.75;
        }
        .prose ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
        }
      `}</style>
    </article>
  )
}
