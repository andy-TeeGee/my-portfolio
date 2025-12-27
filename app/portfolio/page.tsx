"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "Brand Strategy", "Digital Campaigns", "Research & Insights", "Visual Design", "Social Impact"]

const projects = [
  {
    id: "b2b-digital-campaign",
    title: "Industrial B2B Digital Awareness Campaign",
    category: "Digital Campaigns",
    year: "2025",
    tags: ["Campaign", "Owned Media", "Strategy"],
    image: "/depatie-campaign-overview-cover.jpg",
    description: "Owned media campaign for industrial B2B company, driving awareness and lead generation.",
  },
  {
    id: "Femtech-startup-rebrand",
    title: "FemTech Startup Rebrand & Identity Refresh",
    category: "Brand Strategy",
    year: "2025",
    tags: ["Identity", "Strategy", "Visual Design"],
    image: "/mammha-rebrand-overview-cover.jpg",
    description: "To increase market presence, we developed a fresh brand identity for a growing tech startup.",
  },
  {
    id: "systems-analysis-research",
    title: "Systems Analysis & Design Research on Generative AI",
    category: "Research & Insights",
    year: "2025",
    tags: ["Research", "Systems Analysis", "Social Impact", "Editorial"],
    image: "/systems-analysis-research-paper.png",
    description: "A comprehensive research paper on mechanisms of generative AI as my final class project.",
  },
  {
    id: "doors-poster",
    title: "The Doors - Live In Bakersfield Promotional Posters",
    category: "Visual Design",
    year: "2023",
    tags: ["Visual Design", "Identity", "Print"],
    image: "/doors-poster.jpg",
    description: "Promotional poster design commemorating the new release of the album Live In Bakersfield.",
  },
  {
    id: "rsc-website-redesign",
    title: "Construction Company Website Development & Redesign",
    category: "Visual Design",
    year: "2025",
    tags: ["Identity", "Strategy", "Visual Design"],
    image: "/rsc-web-design.jpg",
    description: "Complete website redesign for regional construction company.",
  },
  {
    id: "dmsa-relaunch",
    title: "Digital Marking Student Association (DMSA) Rebrand, Relaunch, and Restructure",
    category: "Digital Campaigns",
    year: "2026",
    tags: ["Identity", "Strategy", "Leadership"],
    image: "/dmsa-relanch.jpg",
    description: "Rebranding and restructuring the Digital Marketing Student Association to better serve marketing students at WMU.",
  },
  {
    id: "consumer-habits-research",
    title: "Consumer Marketing Research on Aging Populations",
    category: "Research & Insights",
    year: "2025",
    tags: ["Research", "Consumer Behavior", "Strategy"],
    image: "/consumer-habits-research.jpg",
    description: "A qualitative research paper analyzing consumer habits among aging populations.",
  },
  {
    id: "paw-spa-creative-brief",
    title: "Paw Spa - Creative Brief & Ad Campaign",
    category: "Digital Campaigns",
    year: "2025",
    tags: ["Identity", "Strategy", "Visual Design"],
    image: "/paw-spa-ad-campaign.jpg",
    description: "Proposed ad campaign and creative brief for a new market entrant in the pet care industry.",
  },
  {
    id: "waste-reduction-proposal",
    title: "WMU Campus Waste Reduction Proposal",
    category: "Social Impact",
    year: "2025",
    tags: ["Research", "Environmental", "Strategy"],
    image: "/waste-reduction-proposal.jpg",
    description: "A project proposal to reduce waste on Western Michigan University's campus through strategic initiatives.",
  },
  {
    id: "vehicle-wrapping-design",
    title: "Vehicle Wrapping & Design",
    category: "Visual Design",
    year: "2022",
    tags: ["Identity", "Visual Design", "Print"],
    image: "/vehicle-wrapping-design.jpg",
    description: "Vehicle wrapping and design for local businesses.",
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
