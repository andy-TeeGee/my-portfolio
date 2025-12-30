import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Download, Calendar, User, BookOpen, Leaf } from "lucide-react"

export const metadata = {
  title: 'Behavioral Economics & Strategic Waste Reduction | Portfolio',
  description: 'A behavioral intervention proposal for sustainable campus dining.',
}

export default function WasteReductionPage() {
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
            <span>Behavioral Psychology</span>
            <span>•</span>
            <span>Sustainability</span>
            <span className="flex items-center text-emerald-600">
              <Leaf size={14} className="mr-1" /> 
              Environmental Impact
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-balance leading-tight">
            Behavioral Economics & Strategic Waste Reduction
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            A dual-behavior intervention proposal leveraging environmental psychology to transition campus dining to compostable packaging and improve student disposal behavior.
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
                Course
              </div>
              <div className="font-medium">Behavioral Approaches to Sustainability</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <BookOpen size={16} className="mr-2" />
                Format
              </div>
              <div className="font-medium">11-Page Proposal</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <FileText size={16} className="mr-2" />
                Focus
              </div>
              <div className="font-medium">Intervention Design</div>
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
                  Western Michigan University's dining facilities generate approximately 32,000 pounds of solid waste monthly, primarily from single-use packaging. This proposal outlines a comprehensive intervention to transition 7 campus dining locations to BPI-certified compostable materials while simultaneously addressing the "behavioral gap" in student disposal habits.
                </p>
                <p>
                  Drawing on research from environmental psychology (O'Connor et al., Sussman & Gifford), the strategy moves beyond simple signage. It proposes a restructuring of the physical environment (bin placement) and the introduction of "Compost Ambassadors" to leverage social modeling, projecting a 40-50% reduction in landfill waste within the first academic year.
                </p>
              </div>
            </section>

            {/* Key Findings Box */}
            <section className="bg-muted/30 p-8 rounded-sm border border-border">
              <h3 className="text-xl font-medium mb-6">Strategic Interventions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>Convenience Drives Compliance:</strong> Research indicates that redesigning infrastructure (strategic bin placement at natural exit points) creates a higher lift in compliance than educational campaigns alone.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>Social Modeling {">"} Information:</strong> Peer influence is a critical driver. The proposal introduces "Student Ambassadors" during peak hours to model correct sorting behavior, which research shows is more effective than tabletop signage.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>The Cost of Friction:</strong> Education without infrastructure is futile. Providing compostable bins without transitioning the packaging creates user friction and contamination; the two must launch simultaneously for success.</span>
                </li>
              </ul>
            </section>

          </div>

          {/* Right Column: The "Asset" (PDF Preview) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* PDF Card */}
            <div className="bg-card border border-border rounded-sm p-2 shadow-sm">
              <a 
                href="/portfolio/waste-reduction-proposal.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[3/4] bg-muted relative rounded-sm overflow-hidden mb-4 group cursor-pointer block"
              >
                {/* PDF Cover Image */}
                <Image 
                  src="/portfolio/waste-reduction-proposal-cover.jpg" 
                  alt="Waste Reduction Proposal Cover"
                  fill 
                  className="object-cover" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium flex items-center">
                    <BookOpen size={20} className="mr-2" /> Read Proposal
                  </span>
                </div>
              </a>

              <div className="p-4">
                <a 
                  href="/portfolio/waste-reduction-proposal.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mb-3 block"
                >
                  <Button className="w-full" size="lg">
                    <BookOpen size={18} className="mr-2" />
                    Read Full Proposal
                  </Button>
                </a>
                
                <a 
                  href="/portfolio/waste-reduction-proposal.pdf" 
                  download="Goheen_Waste_Reduction_Proposal.pdf"
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
                Developed for the Department of Psychology (PSY 3456), this proposal applies behavioral economic principles to solve institutional sustainability challenges.
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2 font-medium">Formal Title</p>
                <p className="text-sm italic font-medium text-foreground/80">
                  "Reducing Campus Waste: Compostable Packaging in WMU Cafeterias"
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
