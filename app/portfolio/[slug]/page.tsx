import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

// This would eventually come from MDX files or a CMS
const getProjectData = (slug: string) => {
  return {
    title: "Brand Identity Refresh",
    category: "Branding",
    year: "2024",
    client: "Sustainable Living Co.",
    tags: ["Identity", "Strategy", "Visual Design"],
    overview:
      "A comprehensive brand refresh for a sustainable lifestyle company looking to expand their market presence while staying true to their environmental values. The project encompassed strategic repositioning, visual identity development, and comprehensive brand guidelines.",
    role: "Lead Creative Director & Designer",
    services: ["Brand Strategy", "Visual Identity", "Guidelines", "Collateral Design"],
    process: [
      {
        phase: "Discovery & Research",
        description:
          "Conducted stakeholder interviews, competitive analysis, and audience research to understand brand positioning and opportunities.",
      },
      {
        phase: "Strategy Development",
        description:
          "Developed brand positioning, messaging framework, and visual direction based on research insights.",
      },
      {
        phase: "Identity Design",
        description:
          "Created comprehensive visual identity system including logo, typography, color palette, and graphic elements.",
      },
      {
        phase: "Implementation",
        description:
          "Applied new identity across touchpoints and created detailed guidelines for consistent brand expression.",
      },
    ],
    outcome: {
      description:
        "The refreshed brand successfully positioned the company as a premium, trustworthy leader in sustainable living. Brand awareness increased by 45% in the first quarter following launch.",
      metrics: [
        { label: "Brand awareness increase", value: "45%" },
        { label: "Social engagement", value: "+120%" },
        { label: "Customer satisfaction", value: "4.8/5" },
      ],
    },
    images: [
      "/brand-identity-system-overview.jpg",
      "/brand-logo-variations-and-usage.jpg",
      "/brand-color-palette-and-typography.jpg",
      "/brand-collateral-designs.jpg",
      "/brand-environmental-applications.jpg",
      "/brand-digital-applications.jpg",
    ],
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  return (
    <article className="pb-20" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero */}
      <div className="bg-card py-12 md:py-20 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2" size={16} />
              Back to portfolio
            </Link>
          </Button>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-sm text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-medium mb-6 text-balance">{project.title}</h1>
            <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div>
                <span className="block font-medium text-foreground mb-1">Client</span>
                {project.client}
              </div>
              <div>
                <span className="block font-medium text-foreground mb-1">Year</span>
                {project.year}
              </div>
              <div>
                <span className="block font-medium text-foreground mb-1">Category</span>
                {project.category}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview */}
        <section className="max-w-3xl mb-20">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.overview}</p>
        </section>

        {/* Role & Services */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Role</h2>
            <p className="text-lg text-muted-foreground">{project.role}</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Services</h2>
            <ul className="space-y-3">
              {project.services.map((service, i) => (
                <li key={i} className="text-lg text-muted-foreground flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="max-w-3xl mb-20">
          <h2 className="text-2xl md:text-3xl font-medium mb-8">Process</h2>
          <div className="space-y-8">
            {project.process.map((step, i) => (
              <div key={i} className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-medium mb-2">{step.phase}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mb-20">
          <ImageGallery images={project.images} />
        </section>

        {/* Outcome */}
        <section className="max-w-3xl mb-20">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Outcome</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.outcome.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.outcome.metrics.map((metric, i) => (
              <div key={i} className="bg-card p-6 rounded-sm">
                <div className="text-3xl font-medium text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card p-12 rounded-sm text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Interested in working together?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your creative vision to life.
          </p>
          <Button asChild size="lg">
            <Link href="/work-with-me">
              Get in touch
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </section>
      </div>
    </article>
  )
}
