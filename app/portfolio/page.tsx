"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "Brand Strategy", "Digital Campaigns", "Research & Insights", "Visual Design", "Social Impact"]

const projects = [
  {
    id: "depatie-campaign",
    title: "Depatie Fluid Power: Digital Transformation & 8x Growth",
    category: "Digital Campaigns",
    year: "2025",
    tags: ["Campaign", "Owned Media", "Strategy"],
    image: "/portfolio/depatie-campaign-overview-cover.jpg",
    description: "Owned media campaign for industrial B2B company, driving awareness and lead generation.",
  },
  {
    id: "doors-poster",
    title: "The Doors: Visual Identity for a Posthumous Release",
    category: "Visual Design",
    year: "2023",
    tags: ["Visual Design", "Identity", "Print"],
    image: "portfolio/doors-poster.jpg",
    description: "Promotional poster design commemorating the new release of the album Live In Bakersfield.",
  },
  {
    id: "systems-analysis-research",
    title: "Mechanisms of GenAI: A Strategic Framework for Digital Platforms",
    category: "Research & Insights",
    year: "2025",
    tags: ["Research", "Systems Analysis", "Social Impact", "Editorial"],
    image: "portfolio/systems-analysis-research-diagram.jpg",
    description: "A comprehensive research paper on mechanisms of generative AI as my final class project.",
  },
  {
    id: "mammha-rebrand",
    title: "Mammha: Building a Brand for Maternal Mental Health",
    category: "Brand Strategy",
    year: "2025",
    tags: ["Identity", "Strategy", "Visual Design"],
    image: "portfolio/mammha-rebrand-cover.png",
    description: "To increase market presence, we developed a fresh brand identity for a growing tech startup.",
  },
  {
    id: "dmsa-relaunch",
    title: "Revitalizing the DMSA: A Strategic Turnaround",
    category: "Digital Campaigns",
    year: "2026",
    tags: ["Identity", "Strategy", "Leadership"],
    image: "/portfolio/dmsa-hero.jpg",
    description: "Rebranding and restructuring the Digital Marketing Student Association to better serve marketing students at WMU.",
  },
  {
    id: "consumer-research",
    title: "Generational Shifts in Consumer Behavior: A Qualitative Analysis of the 65+ Demographic",
    category: "Research & Insights",
    year: "2025",
    tags: ["Research", "Consumer Behavior", "Strategy"],
    image: "portfolio/consumer-habits-research.jpg",
    description: "A qualitative research paper analyzing consumer habits among aging populations.",
  },
 {
    id: "rsc-website-redesign",
    title: "Laying the Foundation: Web Development for the Trades",
    category: "Visual Design",
    year: "2025",
    tags: ["Identity", "Strategy", "Visual Design"],
    image: "portfolio/rsc-web-design.jpg",
    description: "Complete website redesign for regional construction company.",
  },
  {
    id: "waste-reduction-proposal",
    title: "Behavioral Economics & Strategic Waste Reduction",
    category: "Social Impact",
    year: "2025",
    tags: ["Research", "Environmental", "Strategy"],
    image: "portfolio/waste-reduction-proposal.jpg",
    description: "A project proposal to reduce waste on Western Michigan University's campus through strategic initiatives.",
  },
  {
    id: "vehicle-wrapping",
    title: "Applied Design: The Art of Vehicle Wrapping",
    category: "Visual Design",
    year: "2022",
    tags: ["Identity", "Visual Design", "Print"],
    image: "portfolio/vehicle-wrapping-design.jpg",
    description: "Vehicle wrapping, printing and design for local businesses.",
  },
  {
    id: "paw-spa-campaign",
    title: "The Paw Spa: Integrated Brand Campaign",
    category: "Digital Campaigns",
    year: "2025",
    tags: ["Identity", "Strategy", "Visual Design"],
    image: "portfolio/paw-spa-ad-campaign.png",
    description: "Proposed ad campaign and creative brief for a new market entrant in the pet care industry.",
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-medium mb-4">Portfolio</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Select projects spanning from digital campaigns to visual design and academic research. Each project reflects a commitment to creativity, strategic thinking, and impactful results.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={cn("transition-all", selectedCategory === category && "shadow-sm")}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`} className="group">
            <article>
              <div className="aspect-[4/3] bg-muted rounded-sm overflow-hidden mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-medium group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">{project.category}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-sm text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
