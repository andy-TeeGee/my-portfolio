import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, User, Layers, Hammer } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

export default function VehicleWrappingPage() {
  const project = {
    title: "Applied Design: The Art of Vehicle Wrapping",
    
    // 1. HERO SUMMARY (Short Hook)
    overview:
      "Designing for vehicle wraps is a unique challenge where 2D graphics must translate perfectly onto complex 3D surfaces. Over this period, I designed, printed, and installed full wraps for over 15 commercial vehicles, mastering the intersection of digital precision and physical application.",
    
    // 2. THE CHALLENGE (Detailed Body Text - EDIT HERE)
    challenge:
      "Vehicle wrapping is unforgiving. Unlike a web page, you can't resize the canvas. The challenge was to create high-impact branding that remained legible at 60mph while navigating door handles, complex body curves, and safe zones. This required creating 1:1 scale templates and managing massive print files to ensure zero pixelation on output. Each installation demanded not just design skills, but physical craftsmanship to stretch and mold vinyl without distortion.",

    process: [
      {
        phase: "Templating & Measurement",
        description:
          "Creating accurate 1:1 scale vector templates of each specific vehicle model, accounting for door handles, curves, and safe zones.",
      },
      {
        phase: "Design & Layout",
        description:
          "Designing high-impact visuals that remain legible at 60mph. Managing huge file sizes and ensuring resolution quality for large-format output.",
      },
      {
        phase: "Production & Install",
        description:
          "Hands-on execution: RIP software management, printing, laminating, and the meticulous physical installation process requiring patience and precision.",
      },
    ],
    
    // UPDATED IMAGE PATHS
    images: [
      "/portfolio/vehicle-wrapping-welding.jpg", 
      "/portfolio/vehicle-wrapping-towing.jpg", 
      "/portfolio/vehicle-wrapping-firetruck.jpg", 
      "/portfolio/vehicle-wrapping-anime.jpg", 
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
            <span>Physical Design</span>
            <span>•</span>
            <span>Large Format</span>
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
              <div className="font-medium">2022</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <User size={16} className="mr-2" />
                Client
              </div>
              <div className="font-medium">Commercial Fleets</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Layers size={16} className="mr-2" />
                Category
              </div>
              <div className="font-medium">Physical Design</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Hammer size={16} className="mr-2" />
                Role
              </div>
              <div className="font-medium">Designer & Installer</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Left: The Challenge (Uses new unique text) */}
            <div className="lg:col-span-8">
                <h2 className="text-2xl font-medium mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {project.challenge}
                </p>
                
                <h3 className="text-xl font-medium mb-4">Skills Deployed</h3>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                    {['Large Format Design', 'Print Production', 'Vinyl Installation', 'Client Management'].map((service, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Right: Production Stats */}
            <div className="lg:col-span-4 space-y-6">
                 <div className="bg-muted/30 p-6 rounded-lg border">
                    <h3 className="font-medium mb-4">Production Stats</h3>
                     <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-border/50 pb-2">
                            <span className="text-sm text-muted-foreground">Vehicles Wrapped</span>
                            <span className="font-medium">15+</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/50 pb-2">
                            <span className="text-sm text-muted-foreground">Design Scale</span>
                            <span className="font-medium">1:1 Real World</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Client Satisfaction</span>
                            <span className="font-medium">100%</span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        {/* Process & Gallery */}
        <section className="mb-24">
             <h2 className="text-3xl font-medium mb-8">The Process: Digital to Physical</h2>
             <div className="grid md:grid-cols-3 gap-8 mb-16">
                {project.process.map((step, i) => (
                    <div key={i} className="bg-card border p-6 rounded-sm">
                        <div className="text-4xl font-light text-muted-foreground/30 mb-4">0{i+1}</div>
                        <h3 className="text-lg font-medium mb-2">{step.phase}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                ))}
             </div>

             <div className="space-y-4">
                 <h2 className="text-3xl font-medium mb-8">Installation Gallery</h2>
                 <ImageGallery images={project.images} />
             </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 p-12 rounded-sm text-center border border-primary/10">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Have a complex design challenge?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From digital screens to physical fleets, I handle the details.
          </p>
          <Button asChild size="lg">
            <Link href="/work-with-me">
              Let's Work Together
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
