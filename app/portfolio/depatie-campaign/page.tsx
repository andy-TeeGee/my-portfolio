import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BarChart3, Globe, Database, Star, PenTool } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DepatieCampaignPage() {
  return (
    <article className="pb-20">
      {/* 1. IMPACT HERO */}
      <div className="bg-foreground text-background py-20 md:py-32 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* UPDATED BUTTON: Hover text is now exactly #972527 */}
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
                      Organic Growth, SEO, Content Strategy
                    </div>
                    <div>
                      <span className="block text-foreground font-medium mb-1">Tools</span>
                      Google Merchant Center, SEMRush, Adobe Creative Suite
                    </div>
                  </div>
                </div>

                <nav className="hidden lg:block space-y-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Case Study Sections</p>
                  {['The Challenge', 'GMC Optimization', 'Content & Design', 'Review Campaign'].map((item) => (
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
                Depatie Fluid Power is a powerhouse in industrial distribution, but their digital footprint didn't match their physical inventory. With over 15,000 SKUs hidden behind a legacy interface and zero visibility on Google Shopping, they were leaving massive revenue on the table.
              </p>
              <p>
                My directive was clear: modernize the digital infrastructure, make the inventory discoverable, and drive organic traffic through strategic content and design—without relying on paid spend.
              </p>
            </section>

            {/* 2. GMC Optimization */}
            <section id="gmc-optimization" className="border-t pt-12">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Database size={24} />
                 </div>
                 <h2 className="text-3xl font-medium">15,000 SKUs: Taming the Data Beast</h2>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-card p-6 rounded-sm border">
                    <h4 className="font-medium mb-2">The Problem</h4>
                    <p className="text-sm text-muted-foreground">Product data was fragmented. Missing GTINs, inconsistent titles, and no categorization meant Google Merchant Center rejected 80% of the feed.</p>
                  </div>
                  <div className="bg-card p-6 rounded-sm border">
                    <h4 className="font-medium mb-2">The Solution</h4>
                    <p className="text-sm text-muted-foreground">I engineered a bulk-optimization workflow. By standardizing attributes and mapping categories, we achieved a 99% approval rate.</p>
                  </div>
               </div>
               
               <div className="aspect-video bg-muted rounded-sm flex items-center justify-center text-muted-foreground mb-4">
                 [Image: GMC Dashboard showing green approval bars & impressions spike]
               </div>
            </section>

            {/* 3. Content & Design (The New Section) */}
            <section id="content-design" className="border-t pt-12">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                    <PenTool size={24} />
                 </div>
                 <h2 className="text-3xl font-medium">Fueling Growth with Owned Media</h2>
               </div>

               <p className="text-lg text-muted-foreground mb-8">
                 We didn't buy our traffic; we built it. I developed a high-velocity content engine, producing over 100+ branded assets ranging from technical diagrams to social graphics. This consistent visual language established Depatie as an industry authority on LinkedIn and beyond.
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
                 A cohesive visual system deployed across LinkedIn, Email, and Web.
               </p>
            </section>

            {/* 4. Review Campaign */}
            <section id="review-campaign" className="border-t pt-12">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600 dark:text-yellow-400">
                    <Star size={24} />
                 </div>
                 <h2 className="text-3xl font-medium">From Ghost Town to 4.6 Stars</h2>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center p-6 border rounded-sm">
                    <div className="text-3xl font-bold mb-1">100+</div>
                    <div className="text-xs uppercase text-muted-foreground">New Reviews</div>
                  </div>
                  <div className="text-center p-6 border rounded-sm">
                    <div className="text-3xl font-bold mb-1">4.6</div>
                    <div className="text-xs uppercase text-muted-foreground">National Avg</div>
                  </div>
                  <div className="text-center p-6 border rounded-sm">
                    <div className="text-3xl font-bold mb-1">#1</div>
                    <div className="text-xs uppercase text-muted-foreground">Regional Ranking</div>
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
