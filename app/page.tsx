import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, PenTool, Lightbulb } from "lucide-react";
import OrbitingCircles from "@/components/visuals/orbiting-circles";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Padding reduced by ~15% (py-16 md:py-24) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
          
          {/* Left Side: Your Content */}
          <div className="flex-1 max-w-4xl lg:text-left text-center mx-auto lg:mx-0">
            <p className="text-sm text-muted-foreground mb-6 tracking-wide uppercase">
              Strategic Creative for Purpose-Driven Brands
            </p>
            <h1 className="text-5xl md:text-7xl font-normal italic mb-8 text-balance leading-tight">
              Hi, I'm Andy.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-pretty">
              I partner with purpose-driven organizations to build brands and campaigns 
              that resonate with audiences and create lasting impact. From strategy to 
              execution, I bring clarity, creativity, and a commitment to work that matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-base">
                <Link href="/work-with-me">
                  Work with me
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
                <Link href="/portfolio">View portfolio</Link>
              </Button>
            </div>
          </div>

          {/* Right Side: The Orbiting Circles Animation */}
          <div className="flex-1 mt-16 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative flex h-[500px] w-full max-w-[500px] flex-col items-center justify-center overflow-hidden">
              
              {/* --- INNER ORBIT --- */}
              <OrbitingCircles
                className="border bg-background/90 shadow-sm"
                iconSize={36}
                duration={30}
                delay={0}
                radius={80}
              >
                <BarChart3 className="size-5 text-primary" />
              </OrbitingCircles>
              
              <OrbitingCircles
                className="border bg-background/90 shadow-sm"
                iconSize={36}
                duration={30}
                delay={7.5}
                radius={80}
                path={false}
              >
                <PenTool className="size-5 text-foreground" />
              </OrbitingCircles>

               <OrbitingCircles
                className="border bg-background/90 shadow-sm"
                iconSize={36}
                duration={30}
                delay={15} 
                radius={80}
                path={false}
              >
                <Target className="size-5 text-primary" />
              </OrbitingCircles>

               <OrbitingCircles
                className="border bg-background/90 shadow-sm"
                iconSize={36}
                duration={30}
                delay={22.5}
                radius={80}
                path={false}
              >
                <Lightbulb className="size-5 text-foreground" />
              </OrbitingCircles>


              {/* --- OUTER ORBIT --- */}
              {/* Swapped: Target is now first (delay 0), Lightbulb is second (delay 10) */}
              
              <OrbitingCircles
                className="border bg-background/90 shadow-sm"
                iconSize={60}
                radius={190}
                duration={40}
                delay={0}
                reverse
              >
                <Target className="size-[29px] text-primary" />
              </OrbitingCircles>
              
              <OrbitingCircles
                className="border bg-background/90 shadow-sm"
                iconSize={60}
                radius={190}
                duration={40}
                delay={10}
                reverse
                path={false}
              >
                <Lightbulb className="size-[29px] text-foreground" />
              </OrbitingCircles>

              <OrbitingCircles
                className="border bg-background/90 shadow-sm"
                iconSize={60}
                radius={190}
                duration={40}
                delay={20}
                reverse
                path={false}
              >
                <BarChart3 className="size-[29px] text-primary" />
              </OrbitingCircles>

              <OrbitingCircles
                className="border bg-background/90 shadow-sm"
                iconSize={60}
                radius={190}
                duration={40}
                delay={30}
                reverse
                path={false}
              >
                <PenTool className="size-[29px] text-foreground" />
              </OrbitingCircles>
              
            </div>
          </div>

        </div> 
      </section>

      {/* Featured Work Preview */}
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-medium mb-4">Selected work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A curated collection of recent projects spanning digital campaigns, graphic design, web development, academic papers, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Depatie Fluid Power: Digital Transformation & 8x Growth",
                category: "Digital Campaigns",
                year: "2025",
                image: "/depatie-campaign-overview-cover.jpg",
              },
              {
                title: "The Doors: Visual Identity for a Posthumous Release",
                category: "Visual Design",
                year: "2023",
                image: "/doors-poster.jpg",
              },
              {
                title: "Deconstructing GenAI: A Technical Systems Analysis",
                category: "Research & Insights",
                year: "2025",
                image: "/systems-analysis-research-paper.png",
              },
              {
                title: "Mammha: Building a Brand for Maternal Mental Health",
                category: "Brand Strategy",
                year: "2025",
                image: "/mammha-rebrand-overview-cover.jpg",
              },
             
            ].map((project, i) => (
              <Link key={i} href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, "-")}`} className="group">
                <div className="aspect-[4/3] bg-muted rounded-sm overflow-hidden mb-4">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">View all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium mb-6">What I do</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
             I bridge the gap between creative vision and business strategy. I don't just design assets; 
            I build brands, campaigns, and digital systems that drive measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Brand Strategy",
              description:
                "Translating core business values into distinct, cohesive systems that stand out in crowded markets.",
            },
            {
              title: "Creative & Digital Campaigns",
              description:
                "Data-backed creative campaigns designed to engage audiences and drive conversion across digital channels.",
            },
            {
              title: "eCommerce & Website Design",
              description: "Designing responsive, high-converting storefronts and promotional sites that balance aesthetics with performance.",
            },
            {
              title: "Digital Operations & Consulting",
              description:
                "Bridging the gap between creative vision and technical implementation.",
            },
            
          ].map((service, i) => (
            <div key={i} className="bg-card p-8 rounded-sm">
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/work-with-me">
              Let's work together
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
