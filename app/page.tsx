import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          <p className="text-sm text-muted-foreground mb-6 tracking-wide uppercase">
            Strategic Creative for Purpose-Driven Brands
          </p>
          <h1 className="text-5xl md:text-7xl font-normal italic mb-8 text-balance leading-tight">
            Hi, I'm Andy.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl text-pretty">
            I partner with purpose-driven organizations to build brands and campaigns 
            that resonate with audiences and create lasting impact. From strategy to 
            execution, I bring clarity, creativity, and a commitment to work that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
                title: "Brand Identity Refresh",
                category: "Branding",
                year: "2024",
                image: "/modern-brand-identity.png",
              },
              {
                title: "Editorial Campaign",
                category: "Photography",
                year: "2024",
                image: "/editorial-fashion-photography.jpg",
              },
              {
                title: "Product Launch",
                category: "Campaigns",
                year: "2024",
                image: "/product-launch-campaign.png",
              },
              {
                title: "Visual System",
                category: "Graphic Design",
                year: "2023",
                image: "/visual-design-system.jpg",
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
            I bring a holistic approach to creative problem-solving, combining strategic thinking with hands-on
            execution across multiple disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Graphic Design",
              description:
                "Visual identity systems, print collateral, and digital design that communicates with clarity and impact.",
            },
            {
              title: "Campaigns",
              description:
                "Integrated creative campaigns that capture attention and drive engagement across all touchpoints.",
            },
            {
              title: "Creative Direction",
              description: "Strategic vision and execution guidance to ensure cohesive, compelling creative output.",
            },
            {
              title: "Photography",
              description:
                "Commercial and editorial photography that tells authentic stories and elevates brand narratives.",
            },
            {
              title: "Branding",
              description:
                "Comprehensive brand development from strategy and positioning to visual expression and guidelines.",
            },
            {
              title: "Consulting",
              description: "Expert guidance on creative strategy, process optimization, and team collaboration.",
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
