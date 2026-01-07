import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Database, Star, PenTool, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DepatieCampaignPage() {
  return (
    <article className="pb-20">
      {/* 1. IMPACT HERO */}
      <div className="bg-foreground text-background py-20 md:py-32 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Button 
            asChild 
            variant="ghost" 
            size="sm" 
            className="mb-8 bg-background text-muted-foreground hover:bg-background hover:text-[#972527] transition-colors rounded-sm"
          >
            <Link href="/portfolio">
              <ArrowLeft className="mr-2" size={16} />
              Back to portfolio
            </Link>
          </Button>

          <div className="max-w-5xl">
            <Badge variant="outline" className="mb-6 text-primary-foreground border-primary-foreground/30 py-1.5 px-4 text-sm uppercase tracking-wide">
              B2B Digital Transformation
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 text-balance leading-tight">
              <span style={{ color: '#feb914' }}>Depatie Fluid Power</span>: <span className="text-muted-foreground">Digital Transformation & 8x Growth</span>
            </h1>

            {/* The "Big Wins" Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-background/20 pt-12">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-foreground">8x</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Impression Growth</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-foreground">15k</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">SKUs Optimized</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-foreground">100+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Assets Created</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-foreground">4.6<span className="text-2xl">★</span></div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Avg National Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Sticky Navigation */}
          <div className="lg:col-span-4 space-y-8">
             <div className="sticky top-24 space-y-8">
                <div className="bg-card p-6 rounded-sm border">
                  <h3 className="font-medium text-lg mb-4">Project Context</h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <span className="block text-foreground font-medium mb-1">Role</span>
                      Digital Marketing Lead (Internship)
                    </div>
                    <div>
                      <span className="block text-foreground font-medium mb-1">Focus</span>
                      Organic Growth, SEO, Content Strategy, Web Design, User Experience, Data Automation, Owned Media
                    </div>
                    <div>
                      <span className="block text-foreground font-medium mb-1">Tools</span>
                      Google Workspace (Google Marketing Platform), Microsoft 365 Copilot, NetSuite, Semrush, Adobe Creative Suite, Postman, OpenAI API
                    </div>
                  </div>
                </div>

                <nav className="hidden lg:block space-y-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Case Study Sections</p>
                  {['The Challenge', 'Customer Intelligence', 'GMC Optimization', 'Content & Design', 'Review Campaign'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`} 
                       className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-sm transition-colors">
                      {item}
                    </a>
                  ))}
                </nav>
             </div>
          </div>

          {/* RIGHT COLUMN: The Narrative Content */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* 1. Overview */}
            <section id="the-challenge" className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-medium mb-6">The Challenge: An Analog Giant in a Digital World</h2>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Despite being an industrial leader, Depatie Fluid Power’s digital footprint didn't reflect their scale. Facing a legacy interface that obscured over 15,000 SKUs, the company needed a complete digital awareness strategy. My work here focused on elevating brand visibility and exposure to capture B2B market share and secure a place in buyer's consideration set.


              </p>
            </section>

            {/* 2. NEW SECTION: AI-Powered Customer Intelligence */}
            <section id="customer-intelligence" className="border-t pt-12">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                    <Brain size={24} />
                 </div>
                 <h2 className="text-3xl font-medium">AI-Powered Customer Intelligence</h2>
               </div>
               
               <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                 Cleaning, Automating, and Scaling Customer Segmentation
               </p>

               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-card p-6 rounded-sm border">
                    <h4 className="font-medium mb-2">The Problem</h4>
                    <p className="text-sm text-muted-foreground">
                      With tens of thousands of active customers across hundreds of industries, we lacked the infrastructure to segment and prioritize outreach effectively. Broad targeting meant wasted effort and missed SQL opportunities.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-sm border">
                    <h4 className="font-medium mb-2">The Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      I collaborated with our business analyst intern to build an AI-powered automation that classifies every customer by SIC/NAICS codes in real-time. The system scrapes public data, validates industry fit, and auto-populates our CRM, with no manual input required.
                    </p>
                  </div>
               </div>

               <p className="text-base text-muted-foreground leading-relaxed mb-8">
                 This wasn't just a technical project; it was a strategic shift in how we think about customer data. By integrating the OpenAI API directly into our ERP workflow, we transformed a static customer list into a dynamic, actionable database. Now, every new sign-up is automatically categorized by industry vertical, enabling hyper-targeted campaigns and smarter territory planning for our sales team.
               </p>

               {/* Stats Grid */}
               <div className="grid grid-cols-3 gap-6 bg-muted/30 p-6 rounded-sm border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">59k+</div>
                    <div className="text-xs uppercase text-muted-foreground">Records Classified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">100%</div>
                    <div className="text-xs uppercase text-muted-foreground">Automated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">Real-time</div>
                    <div className="text-xs uppercase text-muted-foreground">Data Updates</div>
                  </div>
               </div>

               <div className="aspect-video bg-muted rounded-sm flex items-center justify-center text-muted-foreground mt-8">
                 [Image: CRM Dashboard showing auto-classified customer segments by industry vertical]
               </div>
            </section>

            {/* 3. GMC Optimization */}
            <section id="gmc-optimization" className="border-t pt-12">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Database size={24} />
                 </div>
                 <h2 className="text-3xl font-medium">15,000 SKUs: Managing Big Data</h2>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-card p-6 rounded-sm border">
                    <h4 className="font-medium mb-2">The Problem</h4>
                    <p className="text-sm text-muted-foreground">Data fragmentation was a major bottleneck. The inventory was never synced with Google Merchant Center, because of this, missing GTINs, non-standardized titles, and no categorization resulted in an initial feed rejection rate of 40%.</p>
                  </div>
                  <div className="bg-card p-6 rounded-sm border">
                    <h4 className="font-medium mb-2">The Solution</h4>
                    <p className="text-sm text-muted-foreground">I engineered a bulk-optimization workflow. By standardizing attributes and mapping categories, we achieved a 80% approval rate, instantly taking the brand from zero listings to broad search visibility.</p>
                  </div>
               </div>
               
               <div className="aspect-video bg-muted rounded-sm flex items-center justify-center text-muted-foreground mb-4">
                 [Image: GMC Dashboard showing green approval bars & impressions spike]
               </div>
            </section>

            {/* 4. Content & Design */}
            <section id="content-design" className="border-t pt-12">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                    <PenTool size={24} />
                 </div>
                 <h2 className="text-3xl font-medium">Fueling Growth with Owned Media</h2>
               </div>

               <p className="text-lg text-muted-foreground mb-8">
                 We prioritized organic growth over paid acquisition. I built a strong content strategy, producing over 100+ branded assets ranging from technical diagrams to social graphics. This consistent visual language established Depatie as an industry authority on LinkedIn and beyond.
               </p>

               {/* Visual Grid for Design Assets */}
               <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="aspect-square bg-muted rounded-sm flex items-center justify-center text-muted-foreground">
                    [Image: Social Graphic 1]
                  </div>
                  <div className="aspect-square bg-muted rounded-sm flex items-center justify-center text-muted-foreground">
                     [Image: Technical Diagram / Spec Sheet]
                  </div>
                  <div className="aspect-square bg-muted rounded-sm flex items-center justify-center text-muted-foreground">
                     [Image: Email Campaign Header]
                  </div>
                  <div className="aspect-square bg-muted rounded-sm flex items-center justify-center text-muted-foreground">
                     [Image: Website Banner]
                  </div>
               </div>
               <p className="text-sm text-muted-foreground italic text-center">
                 A cohesive visual system deployed across LinkedIn, Meta, and Web.
               </p>
            </section>

            {/* 5. Review Campaign */}
            <section id="review-campaign" className="border-t pt-12">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600 dark:text-yellow-400">
                    <Star size={24} />
                 </div>
                 <h2 className="text-3xl font-medium">Building a 4.6 Star Reputation</h2>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center p-6 border rounded-sm">
                    <div className="text-3xl font-bold mb-1">100% Growth</div>
                    <div className="text-xs uppercase text-muted-foreground">Across previously dormant profiles</div>
                  </div>
                  <div className="text-center p-6 border rounded-sm">
                    <div className="text-3xl font-bold mb-1">4.6/5 Stars</div>
                    <div className="text-xs uppercase text-muted-foreground">Average Across 8 Locations</div>
                  </div>
                  <div className="text-center p-6 border rounded-sm">
                    <div className="text-3xl font-bold mb-1">Top 3 Map Pack</div>
                    <div className="text-xs uppercase text-muted-foreground">Improved local SEO visibility</div>
                  </div>
               </div>
            </section>

          </div>
        </div>

        {/* CTA */}
        <section className="mt-32 mb-20 bg-card p-12 rounded-sm text-center border">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Need similar results?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I specialize in turning complex data into revenue-generating marketing systems.
          </p>
          <Button asChild size="lg">
            <Link href="/work-with-me">
              Start a Conversation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </section>

      </div>
    </article>
  );
}