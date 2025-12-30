import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Download, Calendar, User, BookOpen, ShieldAlert } from "lucide-react"

// PRIVACY PROTECTION: This tells search engines NOT to index this page.
export const metadata = {
  title: 'Qualitative Consumer Research | Protected',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ConsumerResearchPage() {
  return (
    <div className="pb-20">
      {/* Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 mb-8">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-primary font-medium uppercase tracking-wider">
            <span>Market Research</span>
            <span>•</span>
            <span>Qualitative Analysis</span>
            <span className="flex items-center text-amber-600">
              <ShieldAlert size={14} className="mr-1" /> 
              Confidential Study
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-balance leading-tight">
            Generational Shifts in Consumer Behavior: A Qualitative Analysis of the 65+ Demographic
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            An ethnographic study exploring how digital transformation, economic volatility, and aging influence purchasing habits in the Baby Boomer cohort.
          </p>
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border py-8">
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Calendar size={16} className="mr-2" />
                Timeline
              </div>
              <div className="font-medium">Fall 2025</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <User size={16} className="mr-2" />
                Methodology
              </div>
              <div className="font-medium">Ethnographic Interview</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <BookOpen size={16} className="mr-2" />
                Format
              </div>
              <div className="font-medium">22-Page Report</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <FileText size={16} className="mr-2" />
                Subject
              </div>
              <div className="font-medium">Single Male, 68 (Anon)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Abstract & Key Findings */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Abstract */}
            <section>
              <h2 className="text-2xl font-medium mb-4">Executive Summary</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  This research utilizes semi-structured home interviews and field observations to construct a "Means-End Chain" analysis of Subject A, a 68-year-old male retiree. The study isolates the tension between deep-seated generational conditioning (frugality stemming from post-Depression era parents) and the disruptive convenience of modern digital tools.
                </p>
                <p>
                  The findings reveal a "Practicality Paradox": while the subject outwardly rejects modern trends and "gadgets," his behavior has been fundamentally reshaped by algorithmic convenience (Amazon) and AI-assisted decision making. The research highlights the shift from shopping as a social ritual (knowing the local grocer) to a purely transactional efficiency model.
                </p>
              </div>
            </section>

            {/* Key Findings Box */}
            <section className="bg-muted/30 p-8 rounded-sm border border-border">
              <h3 className="text-xl font-medium mb-6">Key Insights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>The "Work Horse" Mentality:</strong> Purchasing decisions are driven by utility and durability rather than status. Brand loyalty is high but fragile - maintained only as long as quality (e.g., "Smithfield Bacon") remains consistent.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>Technological Dissonance:</strong> The subject explicitly claims to dislike technology ("I don't wear a watch"), yet implicitly relies on it for high-frequency purchases, citing "point and click" ease as a primary driver.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>Erosion of Social Commerce:</strong> A nostalgic longing for the "personal connection" of commerce in the 1970s has been replaced by a "get in, get out" mentality in physical retail spaces.</span>
                </li>
              </ul>
            </section>

          </div>

          {/* Right Column: The "Asset" (PDF Preview) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* PDF Card */}
            <div className="bg-card border border-border rounded-sm p-2 shadow-sm">
              <a 
                href="/portfolio/consumer-behavior-study.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[3/4] bg-muted relative rounded-sm overflow-hidden mb-4 group cursor-pointer block"
              >
                {/* PDF Cover Image - REPLACED HERE */}
                <Image 
                  src="/portfolio/consumer-research-cover.jpg" 
                  alt="Consumer Research Report Cover"
                  fill 
                  className="object-cover" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium flex items-center">
                    <BookOpen size={20} className="mr-2" /> Read Research
                  </span>
                </div>
              </a>

              <div className="p-4">
                <a 
                  href="/portfolio/consumer-behavior-study.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mb-3 block"
                >
                  <Button className="w-full" size="lg">
                    <BookOpen size={18} className="mr-2" />
                    Read Full Report
                  </Button>
                </a>
                
                <a 
                  href="/portfolio/consumer-behavior-study.pdf" 
                  download="Goheen_Consumer_Research_Fall2025.pdf"
                  className="w-full block"
                >
                  <Button variant="outline" className="w-full">
                    <Download size={18} className="mr-2" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>

            {/* Context Card */}
            <div className="bg-muted/30 p-6 rounded-sm">
              <h4 className="text-sm font-medium mb-3 uppercase tracking-wider text-muted-foreground">About this project</h4>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Conducted for the MKTG 4770 Consumer Research course. The study required identifying a subject outside the researcher's demographic cohort to analyze purchasing behaviors through a semi-structured interview format.
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2 font-medium">Privacy Note</p>
                <p className="text-sm italic font-medium text-foreground/80">
                  Identity redacted for privacy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
