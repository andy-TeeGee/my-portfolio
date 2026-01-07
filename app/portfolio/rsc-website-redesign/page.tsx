import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Layout, Users, Zap } from "lucide-react";

export default function RSCWebRedesignPage() {
  return (
    <article className="pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to portfolio
        </Link>

        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-primary font-medium uppercase tracking-wider">
            <span>Web Design</span>
            <span>•</span>
            <span>UX Strategy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium mb-6 text-balance leading-tight">
            Laying the Foundation: Web Development for the Trades
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            A ground-up redesign focused on converting site visitors into qualified leads for a regional construction firm with 20+ years of legacy work.
          </p>
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border py-8">
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Layout size={16} className="mr-2" />
                Status
              </div>
              <div className="font-medium">In Development</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Users size={16} className="mr-2" />
                Client
              </div>
              <div className="font-medium">Rob Seth Construction</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Zap size={16} className="mr-2" />
                Role
              </div>
              <div className="font-medium">Web Designer & Strategist</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Layout size={16} className="mr-2" />
                Timeline
              </div>
              <div className="font-medium">Q4 2025 - Q1 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-16">
          
          {/* The Challenge */}
          <div>
            <h2 className="text-3xl font-medium mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Rob Seth Construction had an outdated website that failed to showcase their craftsmanship or convert visitors into inquiries. With a portfolio spanning custom homes, renovations, and commercial projects, they needed a digital presence that matched the quality of their physical work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The existing site suffered from poor mobile responsiveness, slow load times, and a lack of clear CTAs, leaving potential clients confused about next steps.
            </p>
          </div>

          {/* Strategic Approach */}
          <div className="border-t pt-12">
            <h2 className="text-3xl font-medium mb-8">Strategic Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-sm border">
                <div className="text-4xl font-light text-muted-foreground/30 mb-4">01</div>
                <h3 className="text-lg font-medium mb-2">User Research</h3>
                <p className="text-sm text-muted-foreground">
                  Began with stakeholder interviews and competitor analysis to identify gaps in the customer journey.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border">
                <div className="text-4xl font-light text-muted-foreground/30 mb-4">02</div>
                <h3 className="text-lg font-medium mb-2">Conversion-First Design</h3>
                <p className="text-sm text-muted-foreground">
                  Prioritized clear CTAs, streamlined contact forms, and portfolio showcases to drive qualified leads.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border">
                <div className="text-4xl font-light text-muted-foreground/30 mb-4">03</div>
                <h3 className="text-lg font-medium mb-2">Mobile-First Build</h3>
                <p className="text-sm text-muted-foreground">
                  Designed responsive layouts optimized for on-site browsing by homeowners and contractors.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="border-t pt-12">
            <h2 className="text-3xl font-medium mb-6">Key Features in Development</h2>
            <ul className="space-y-4">
              {[
                'Easily navigatable capabilities with subcategories (kitchen, bath, renovation)',
                'Integrated contact forms with automated lead routing',
                'SEO-optimized service pages targeting regional search traffic',
                'Fast-loading image galleries showcasing craftsmanship details',
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Progress Note */}
          <div className="bg-muted/30 p-8 rounded-sm border border-border">
            <h3 className="font-medium mb-3">Project Status</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This redesign is currently in active development. The site architecture and wireframes are complete, with full deployment scheduled for Q1 2026. Early prototypes have already received positive feedback from stakeholders for improved clarity and visual appeal.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl bg-card p-12 rounded-sm text-center border">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Need a web presence that converts?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I design sites that turn visitors into customers.
          </p>
          <Button asChild size="lg">
            <Link href="/work-with-me">
              Let's Talk
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
