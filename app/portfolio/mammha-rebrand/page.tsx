"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, User, Layers, PenTool } from "lucide-react"

export default function MammhaPage() {
  const project = {
    title: "Mammha: Building a Brand for Maternal Mental Health",
    overview:
      "A complete brand overhaul for a Femtech startup dedicated to screening, treatment, and support for maternal mental health. The rebrand transformed a clinical, fragmented identity into a warm, accessible, and scalable system ready for seed-stage investment.",
    year: "2025",
    client: "Mammha",
    role: "Digital Marketer & Strategist",
    category: "Brand Identity",
    
    // NARRATIVE SECTIONS
    challenge: 
      "Mammha has an incredibly powerful mission - saving mothers' lives through early screening and treatment, but their visual identity felt dated and unrefined. In order to increase the current number of users, it was important the brand felt more approachable and trustworthy. The goal was to humanize the medical data without losing professional credibility.",
    
    solution:
      "By combining bold colors with soft, rounded typography and organic shapes, we created a brand identity that feels both modern and compassionate. The new logo includes 3 figures holding another up, symbolizing community support, the very thing Mammha embodies. Above all, the new brand system is designed to be flexible and scalable, allowing Mammha to adapt as they grow and expand their services.",

    // IMAGE ASSETS (Update these unique social paths!)
    images: {
        hero: "/portfolio/mammha-rebrand-hero.png", 
        palette: "/portfolio/mammha-brand-palette.jpg",   
        typography: "/portfolio/mammha-typography.jpg",  // Renamed for clarity 
        web: "/portfolio/mammha-web.jpg",       
        
        // UNIQUE SOCIALS
        social1: "/portfolio/mammha-social-post-1.png", // e.g. /portfolio/mammha-social-post-1.jpg
        social2: "/portfolio/mammha-social-post-2.png", // e.g. /portfolio/mammha-social-post-2.jpg
        social3: "/portfolio/mammha-social-post-3.png"  // e.g. /portfolio/mammha-social-post-3.jpg
    }
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
            <span>Femtech</span>
            <span>•</span>
            <span>Rebrand</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-balance leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            {project.overview}
          </p>
          
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
                Client
              </div>
              <div className="font-medium">{project.client}</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Layers size={16} className="mr-2" />
                Category
              </div>
              <div className="font-medium">{project.category}</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <PenTool size={16} className="mr-2" />
                Role
              </div>
              <div className="font-medium">{project.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: The Strategic Pivot */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 items-center">
            <div className="lg:col-span-5">
                <h2 className="text-2xl font-medium mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {project.challenge}
                </p>
                <h3 className="text-xl font-medium mb-4">Services Delivered</h3>
                <ul className="grid grid-cols-2 gap-2">
                    {['Brand Strategy', 'Value Creation', 'Graphic Design', 'Content Creation', 'Web Design', 'Copywriting', 'Positioning', 'Communications'].map((service, i) => (
                        <li key={i} className="flex items-center text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:col-span-7">
                <div className="aspect-[2/1] bg-muted rounded-sm overflow-hidden relative border">
                    <Image 
                       src={project.images.hero} 
                       alt="Mammha Rebrand Hero" 
                       fill 
                       className="object-cover" 
                    />
                </div>
            </div>
        </div>

        {/* SECTION 2: The New System */}
        <div className="mb-24">
            <div className="max-w-2xl mb-12">
                <h2 className="text-2xl font-medium mb-6">The New System</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                 <div className="aspect-[2/1] bg-muted rounded-sm overflow-hidden relative border">
                     <Image src={project.images.palette} alt="Brand Palette" fill className="object-cover" />
                 </div>
                 <div className="aspect-[2/1] bg-muted rounded-sm overflow-hidden relative border">
                     <Image src={project.images.typography} alt="Typography & Detail" fill className="object-cover" />
                 </div>
            </div>
        </div>

        {/* SECTION 3: Application */}
        <div className="mb-24">
             <h2 className="text-2xl font-medium mb-8">Digital Application</h2>
             {/* Large Web Mockup */}
             <div className="aspect-video bg-muted rounded-sm overflow-hidden relative border mb-6">
                 <Image src={project.images.web} alt="Website Mockup" fill className="object-cover" />
             </div>
             
             {/* Social Grid - Now using unique images */}
             <div className="grid grid-cols-3 gap-6">
                 {[project.images.social1, project.images.social2, project.images.social3].map((img, i) => (
                     <div key={i} className="aspect-square bg-muted rounded-sm overflow-hidden relative border">
                         <Image src={img} alt={`Social Asset ${i+1}`} fill className="object-cover" />
                     </div>
                 ))}
             </div>
        </div>

        {/* CTA */}
        <section className="bg-primary/5 p-12 rounded-sm text-center border border-primary/10">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Building a purpose-driven brand?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
             Let's create an identity that resonates with your mission.
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
