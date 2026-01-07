"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { formatDate } from "@/lib/utils"

const getPostData = (slug: string) => {
  return {
    title: "New Grads Aren't Competing With AI, But the People Who Use It Better.",
    summary: "How learning to orchestrate AI tools creates a sustainable competitive edge for marketers entering the workforce.",
    date: "2026-01-07",
    tags: ["AI", "Career", "Strategy"],
    // COVER IMAGE LINK GOES HERE vvv
    coverImage: "/images/competing-with-ai.jpg", 
    readTime: "8 min read",
    
    content: `
      <p>Anxiety around AI and early-career employment is high right now. Research on generative AI's impact on digital platforms shows shifts in how work gets done and who can participate. The reality is often more nuanced than the headlines.</p>

      <p>I have spent time integrating AI into marketing operations and studying its mechanisms in academic research. One thing is clear to me. AI does not replace human judgment. It amplifies the difference between those who leverage it strategically and those who do not.</p>

      <h2>Four Mechanisms Reshaping Marketing Work</h2>
      
      <p>Platform research identifies ways generative AI transforms organizational systems. These include intelligent automation, democratization, and collaborative innovation. <a href="/portfolio/systems-analysis-research" class="text-primary hover:underline">I explored these mechanisms</a> for a systems analysis course to see how they reshape value creation.</p>

      <p>For marketers, these mechanisms matter because they are changing what "good work" looks like.</p>

      <h3>Intelligent Automation</h3>
      <p>The first wave of automation replaced routine manual work. Generative AI goes further by interpreting intent and suggesting solutions. This transforms boundary resources from passive interfaces into active assistants.</p>

      <p>This means automating complex classification tasks. We can organize customer databases by industry codes or create initial content drafts. The human role shifts from execution to orchestration. We design workflows and validate outputs.</p>

      <h3>Democratization</h3>
      <p>AI abstracts technical complexity through natural language interfaces. Non-programmers can generate code. This expands who can participate in technical work while intensifying competition.</p>

      <p>The advantage goes to those who understand how to use the tools and when they are appropriate. Technical barriers fall while strategic judgment becomes more valuable.</p>

      <h3>Hyper-Personalization</h3>
      <p>Traditional marketing personalization was limited by manual effort. AI enables dynamic adaptation across millions of users. Platforms can now generate unique content for each person.</p>

      <p>This creates opportunities in campaign customization. It also raises questions about data privacy and algorithmic bias.</p>

      <h3>Collaborative Innovation</h3>
      <p>AI is moving from tool to collaborator. It participates in iterative creative processes rather than executing predetermined tasks. It helps refine ideas and build on human direction.</p>

      <p>This extends creative capacity. It also complicates questions about authorship and intellectual property.</p>

      <h2>Where Human Judgment Remains Critical</h2>

      <p>These mechanisms do not eliminate the need for human skills. They shift which skills matter most.</p>

      <p><strong>Strategic Problem Definition.</strong> AI cannot identify which problems are worth solving. Recognizing that a company needs better customer segmentation requires business understanding. This comes from experience.</p>

      <p><strong>Systems Integration.</strong> Connecting AI capabilities to existing infrastructure involves authentication and data validation. It requires understanding both the AI tool and the target system well enough to build reliable connections.</p>

      <p><strong>Quality Validation.</strong> AI outputs require verification. Hallucinations mean that someone needs to establish validation processes. This requires domain expertise.</p>

      <h2>Developing AI Literacy</h2>

      <p>Observations from academic research and practical application suggest several paths forward.</p>

      <p><strong>Real-world application matters more than theory.</strong> Testing AI tools in class projects or personal initiatives provides experience. The learning comes from encountering edge cases.</p>

      <p><strong>Integration skills compound.</strong> Connecting AI tools to existing workflows builds technical depth. These skills transfer across different contexts.</p>

      <p><strong>Documentation creates value.</strong> Being able to articulate the problem and the approach shows strategic thinking. This matters in hiring contexts.</p>

      <h2>The Shifting Landscape</h2>

      <p>Labor market data reflects these changes. Entry-level marketing positions increasingly list AI tool familiarity as expected. The differentiation comes from demonstrating strategic deployment.</p>

      <!-- BLS TABLE IMAGE LINK GOES HERE vvv -->
      <div class="blog-image-container">
        <img src="/images/bls-marketing-employment-data.png" alt="Bureau of Labor Statistics marketing employment trends" class="blog-inline-image" />
        <p class="image-caption">Bureau of Labor Statistics data showing evolving skill requirements in marketing roles (2023-33)</p>
      </div>

      <p>Traditional marketing capabilities remain fundamental. AI enhances these skills rather than replacing them. The question is whether individuals invest in understanding how to leverage these enhancements.</p>

      <p>The competition in early-career marketing roles is not against AI itself. It is against peers who have developed integration skills through practical application. The gap between those groups continues to widen.</p>
    `,

  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug)

  return (
    <article className="pb-20" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero */}
      <div className="bg-card py-12 md:py-20 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="mb-8 text-muted-foreground hover:text-foreground">
            <Link href="/journal">
              <ArrowLeft className="mr-2" size={16} />
              Back to journal
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
            <h1 className="text-4xl md:text-5xl font-medium mb-6 text-balance">{post.title}</h1>
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
        <div className="max-w-3xl mx-auto">
          <div className="aspect-[16/9] bg-muted rounded-sm overflow-hidden">
            {/* The coverImage property from getPostData is used here */}
            <img src={post.coverImage || "/images/competing-with-ai"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto prose prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        .prose {
          color: hsl(var(--foreground));
          font-family: 'Montserrat', sans-serif;
        }
        .prose h2 {
          font-size: 1.875rem;
          font-weight: 500;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: hsl(var(--foreground));
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 500;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.75;
          color: hsl(var(--muted-foreground));
        }
        .prose strong {
          font-weight: 500;
          color: hsl(var(--foreground));
        }
        .prose a {
          color: hsl(var(--primary));
          text-decoration: none;
        }
        .prose a:hover {
          text-decoration: underline;
        }
        .blog-image-container {
          margin: 2.5rem 0;
        }
        .blog-inline-image {
          width: 100%;
          border-radius: 0.375rem;
          border: 1px solid hsl(var(--border));
          margin-bottom: 0.75rem;
        }
        .image-caption {
          text-align: center;
          font-size: 0.875rem;
          font-style: italic;
          color: hsl(var(--muted-foreground));
          margin: 0;
        }
      `}</style>
    </article>
  )
}
