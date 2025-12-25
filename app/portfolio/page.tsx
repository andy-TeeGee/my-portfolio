"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "Brand Strategy", "Digital Campaigns", "Research & Insights", "Visual Design", "Social Impact"]

const projects = [
  {
    id: "brand-identity-refresh",
    title: "Brand Identity Refresh",
    category: "Social Impact",
    year: "2024",
    tags: ["Identity", "Strategy", "Visual Design"],
    image: "/modern-brand-identity.png",
    description: "Complete brand overhaul for a sustainable lifestyle company",
  },
  {
    id: "editorial-campaign",
    title: "Editorial Campaign",
    category: "Visual Design",
    year: "2024",
    tags: ["Visual Design", "Editorial", "Fashion"],
    image: "/editorial-fashion-Visual Design.jpg",
    description: "Seasonal fashion editorial for international magazine",
  },
  {
    id: "product-launch",
    title: "Product Launch",
    category: "Digital Campaigns",
    year: "2024",
    tags: ["Campaign", "Digital", "Print"],
    image: "/product-launch-campaign.png",
    description: "Integrated campaign for tech product launch",
  },
  {
    id: "visual-system",
    title: "Visual System",
    category: "Brand Strategy",
    year: "2023",
    tags: ["Design System", "UI/UX", "Social Impact"],
    image: "/visual-design-system.jpg",
    description: "Comprehensive design system for SaaS platform",
  },
  {
    id: "cultural-festival",
    title: "Cultural Festival",
    category: "Research & Insights",
    year: "2023",
    tags: ["Research & Insights Direction", "Event", "Social Impact"],
    image: "/cultural-festival-Social Impact.jpg",
    description: "Full Research & Insights direction for annual cultural event",
  },
  {
    id: "architecture-series",
    title: "Architecture Series",
    category: "Visual Design",
    year: "2023",
    tags: ["Visual Design", "Architecture", "Editorial"],
    image: "/architectural-Visual Design.png",
    description: "Documentary series on modern urban architecture",
  },
  {
    id: "restaurant-Social Impact",
    title: "Restaurant Social Impact",
    category: "Social Impact",
    year: "2023",
    tags: ["Identity", "Print", "Environmental"],
    image: "/restaurant-Social Impact-design.jpg",
    description: "Complete Social Impact package for boutique restaurant",
  },
  {
    id: "social-campaign",
    title: "Social Campaign",
    category: "Digital Campaigns",
    year: "2023",
    tags: ["Social Media", "Digital", "Content"],
    image: "/social-media-campaign.png",
    description: "Multi-platform social media campaign for nonprofit",
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
          A collection of selected projects spanning multiple Research & Insights disciplines. Each project represents a unique
          challenge and collaborative journey.
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
