"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Download, Calendar, User, Target, Zap } from "lucide-react"

export default function PawSpaPage() {
  const project = {
    title: "The Paw Spa: Integrated Brand Campaign",
    overview:
      "A comprehensive strategic campaign designed to reposition at-home pet care from a stressful chore into a moment of connection. Developed as a full-funnel marketing strategy targeting the 'Overwhelmed Pet Parent' persona.",
    year: "2025",
    course: "Advertising & Promotion",
    role: "Campaign Strategist",
    category: "Brand Strategy",
    
    pdfPath: "/portfolio/paw-spa-campaign.pdf",
    coverImage: "/portfolio/paw-spa-cover.jpg",
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
            <span>Digital Campaigns</span>
            <span>•</span>
            <span>Brand Strategy</span>
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
              <div className="font-medium">{project.year}</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <User size={16} className="mr-2" />
                Course
              </div>
              <div className="font-medium">{project.course}</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Target size={16} className="mr-2" />
                Focus
              </div>
              <div className="font-medium">Consumer Insight</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Zap size={16} className="mr-2" />
                Role
              </div>
              <div className="font-medium">{project.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Strategy Breakdown */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* The Insight */}
            <section>
              <h2 className="text-2xl font-medium mb-4">The Core Insight</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  For millions of pet owners, bath time is a battleground. My research identified a specific psychographic segment: <strong>"The Overwhelmed Pet Parent."</strong> This demographic (Ages 24–42, Urban/Suburban) loves their pets but dreads the physical and emotional toll of grooming.
                </p>
                <p>
                  The strategy pivots away from functional benefits (cleanliness) to emotional benefits (confidence). The campaign tagline, <em>"Confident Care for the Pet You Love,"</em> positions the product not as a tool, but as an enabler of better pet parenting.
                </p>
              </div>
            </section>

            {/* Strategic Pillars Box */}
            <section className="bg-muted/30 p-8 rounded-sm border border-border">
              <h3 className="text-xl font-medium mb-6">Campaign Pillars</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>Empathetic Brand Personality:</strong> Supportive, efficient, and calm. The voice acts as a partner in reducing chaos.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>Chaos-to-Calm Creative:</strong> Visual storytelling that contrasts the stress of traditional bathing with the serenity of the Paw Spa experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>Full-Funnel Execution:</strong> From awareness TV spots to conversion-focused social reels.</span>
                </li>
              </ul>
            </section>

             <section>
              <h2 className="text-2xl font-medium mb-4">The Target Audience</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                 <div className="bg-card border p-6 rounded-sm">
                    <h4 className="font-medium mb-2 text-primary">Demographics</h4>
                    <p className="text-sm text-muted-foreground">Ages 24-42, Urban/Suburban, HHI $50k-$85k. Often young professionals balancing career and pet care.</p>
                 </div>
                 <div className="bg-card border p-6 rounded-sm">
                    <h4 className="font-medium mb-2 text-primary">Pain Points</h4>
                    <p className="text-sm text-muted-foreground">Fear of hurting the pet, physical exhaustion, and the high cost of frequent professional grooming.</p>
                 </div>
              </div>
            </section>

          </div>

          {/* Right Column: The Asset (PDF) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* PDF Card */}
            <div className="bg-card border border-border rounded-sm p-2 shadow-sm sticky top-24">
              <div className="aspect-video bg-muted relative rounded-sm overflow-hidden mb-4 flex items-center justify-center text-muted-foreground group cursor-pointer">
                 
                 {/* UNCOMMENTED THIS BLOCK SO IMAGE RENDERS */}
                 <Image 
                    src={project.coverImage} 
                    alt="Campaign Deck Cover" 
                    fill 
                    className="object-cover transition-opacity duration-300 group-hover:opacity-90" 
                 /> 

                 {/* Added overlay so icon shows on hover */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FileText size={48} className="mx-auto mb-2 text-white" />
                    <span className="text-sm text-white font-medium">Preview Deck</span>
                 </div>
              </div>

              <div className="p-4">
                <a 
                  href={project.pdfPath}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mb-3 block"
                >
                  <Button className="w-full" size="lg">
                    <FileText size={18} className="mr-2" />
                    View Slides
                  </Button>
                </a>
                
                <a 
                  href={project.pdfPath}
                  download="Paw_Spa_Campaign_Brief.pdf"
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
              <h4 className="text-sm font-medium mb-3 uppercase tracking-wider text-muted-foreground">Deliverable</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A 19-page comprehensive campaign strategy deck including creative briefs, media planning, and persona development.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
