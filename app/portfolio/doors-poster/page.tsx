import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, User, Layers, PenTool } from "lucide-react"

export default function DoorsPosterPage() {
  const project = {
    title: "The Doors: Visual Identity for a Posthumous Release",
    
    // 1. HERO SUMMARY (Short Hook)
    overview:
      "Commissioned by GarageLand, and working closely with Kerry Faust, the two of us designed a promotional poster for The Doors' new album, \"Live in Bakersfield,\" aimed at commemorating the release and driving engagement with their legacy fan base and new listeners.",
    
    // 2. THE ASSIGNMENT (Detailed Body Text)
    assignment: 
      "We needed to capture the raw, psychedelic energy of the 1970 live performance while maintaining a polished, archival quality suitable for a modern release. The final deliverables included a limited-edition lithograph poster and a suite of digital assets for GarageLand to utilize. The biggest challenge was limited the color pallete to only 5 colors for the lithographic printing process, while still conveying the vibrant energy of The Doors' live performance.",

    process: [
      {
        phase: "Archival Research",
        description:
          "Deep-dive into the band's 1970 tour archives to reference specific period-accurate typography, color palettes, and imagery from the Bakersfield era.",
      },
      {
        phase: "Concept Development",
        description:
          "Explored three distinct visual directions: 'Pure Psychedelic', 'Modern Minimalist', and the chosen 'Archival Grit' direction that bridged the gap between eras.",
      },
      {
        phase: "Execution & Print Prep",
        description:
          "Finalized high-fidelity vector assets and managed the complex pre-press process, ensuring color accuracy for large-format lithographic printing.",
      },
    ],
    
    images: [
      "/portfolio/doors-progress1.jpg", 
      "/portfolio/doors-progress2.jpg", 
      "/portfolio/doors-progress3.jpg", 
      "/portfolio/doors-progress4.jpg", 
    ],
  }

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
            <span>Visual Design</span>
            <span>•</span>
            <span>Brand Identity</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-balance leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            {project.overview}
          </p>
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border py-8">
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Calendar size={16} className="mr-2" />
                Year
              </div>
              <div className="font-medium">2023</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <User size={16} className="mr-2" />
                Client
              </div>
              <div className="font-medium">GarageLand + The Doors Estate</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Layers size={16} className="mr-2" />
                Category
              </div>
              <div className="font-medium">Visual Identity</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <PenTool size={16} className="mr-2" />
                Role
              </div>
              <div className="font-medium">Graphic Designer</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Left: The Assignment */}
            <div className="lg:col-span-8">
                <h2 className="text-2xl font-medium mb-6">The Assignment</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {project.assignment}
                </p>
                
                <h3 className="text-xl font-medium mb-4">Services Delivered</h3>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                    {['Poster Design', 'Visual Identity', 'Merchandise Design'].map((service, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Right: Key Metrics */}
            <div className="lg:col-span-4 space-y-6">
                 <div className="bg-muted/30 p-6 rounded-lg border">
                    <h3 className="font-medium mb-4">Project Impact</h3>
                     <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-border/50 pb-2">
                            <span className="text-sm text-muted-foreground">Role Type</span>
                            <span className="font-medium">Collaboration</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/50 pb-2">
                            <span className="text-sm text-muted-foreground">Medium</span>
                            <span className="font-medium">Print & Digital</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Reach</span>
                            <span className="font-medium">Global Fanbase</span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        {/* Process & Gallery */}
        <section className="mb-24">
             <h2 className="text-3xl font-medium mb-8">Design Process</h2>
             <div className="grid md:grid-cols-3 gap-8 mb-16">
                {project.process.map((step, i) => (
                    <div key={i} className="bg-card border p-6 rounded-sm">
                        <div className="text-4xl font-light text-muted-foreground/30 mb-4">0{i+1}</div>
                        <h3 className="text-lg font-medium mb-2">{step.phase}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                ))}
             </div>

             <div className="space-y-8">
                 <h2 className="text-3xl font-medium mb-8">Visual Gallery</h2>
                 
                 {/* Custom Aspect Ratio Grid (3:4 Ratio) */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((img, i) => (
                      <div key={i} className="relative w-full aspect-[3/4] bg-muted rounded-sm overflow-hidden border">
                         <Image 
                           src={img} 
                           alt={`Doors Poster Progress ${i + 1}`}
                           fill
                           className="object-cover"
                           sizes="(max-width: 768px) 100vw, 50vw"
                         />
                      </div>
                    ))}
                 </div>
             </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 p-12 rounded-sm text-center border border-primary/10">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Need visual design with impact?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From legacy acts to modern startups, I build identities that last.
          </p>
          <Button asChild size="lg">
            <Link href="/work-with-me">
              Start a Conversation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
