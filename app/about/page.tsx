import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pb-20" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero */}
      <section className="bg-card py-12 md:py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-medium mb-6 text-balance">
              Hi, I'm Andy.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A strategic creative who helps purpose-driven brands tell better stories and create meaningful impact.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bio */}
        <section className="max-w-3xl mb-20">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a strategic creative consultant specializing in brand strategy, digital campaigns, and visual storytelling. 
              My work sits at the intersection of strategic thinking and hands-on execution—helping organizations clarify 
              their message, connect with their audiences, and grow with intention.
            </p>
            <p>
              With a background in digital marketing, humanitarian work, and creative research, I bring a unique perspective 
              that combines analytical rigor with creative intuition. I believe the best work happens when strategy informs 
              creativity, and creativity challenges strategy.
            </p>
            <p>
              I'm especially drawn to working with mission-driven organizations—nonprofits, social enterprises, and brands 
              using business as a force for good. These are the projects where I can bring both my strategic expertise and 
              my values to the table.
            </p>
          </div>
        </section>

        {/* What I Do */}
        <section className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">What I do</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Brand Strategy & Identity</h3>
              <p className="text-muted-foreground leading-relaxed">
                I help brands clarify who they are, what they stand for, and how they show up in the world. From positioning 
                and messaging to visual identity systems, I create cohesive brand experiences that resonate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Digital Campaigns</h3>
              <p className="text-muted-foreground leading-relaxed">
                I design and execute integrated campaigns that connect with audiences and drive measurable results. Whether 
                it's social media, paid advertising, or content strategy, I bring both creative vision and performance focus.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Research & Insights</h3>
              <p className="text-muted-foreground leading-relaxed">
                I approach creative work with a researcher's mindset—digging into audience behavior, market trends, and 
                strategic opportunities to inform smarter, more effective creative decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Visual Design & Creative Direction</h3>
              <p className="text-muted-foreground leading-relaxed">
                From concept to execution, I create compelling visual work across digital and print. I also provide creative 
                direction and consulting to help teams elevate their output and streamline their processes.
              </p>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Background</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I studied [Your Field] at [Your University], where I developed a foundation in both creative practice and 
              strategic thinking. Since then, I've worked across multiple industries—from tech startups to established 
              nonprofits—helping organizations communicate more effectively and grow sustainably.
            </p>
            <p>
              My work has been recognized by [awards/publications if applicable], and I've had the privilege of partnering 
              with mission-driven organizations doing meaningful work in [social impact areas you care about].
            </p>
            <p>
              When I'm not working, you'll find me [personal interests that humanize you—photography, traveling, reading, etc.].
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">How I work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-2">Strategy first</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every creative decision should be grounded in strategic thinking. I start by understanding the problem 
                before jumping to solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-2">Collaboration over ego</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The best work happens through partnership. I listen first, challenge constructively, and value your 
                expertise as much as my own.
              </p>
            </div>
            <div className="bg-card p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-2">Quality over quantity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'd rather do fewer projects exceptionally well than stretch myself thin. You deserve my full attention 
                and best work.
              </p>
            </div>
            <div className="bg-card p-6 rounded-sm">
              <h3 className="text-lg font-medium mb-2">Impact over vanity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pretty work that doesn't achieve your goals is just decoration. I care about measurable outcomes and 
                lasting value.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card p-12 rounded-sm text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Let's work together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you're working on something meaningful and need a strategic partner who brings both creative vision 
            and analytical rigor, I'd love to hear from you.
          </p>
          <Button asChild size="lg">
            <Link href="/work-with-me">
              Start a conversation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
