"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, PenTool, BarChart3, Layers } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-card py-12 md:py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-medium mb-6 text-balance">
              Hi, I'm Andy.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a technical marketer and creative strategist who believes the best digital experiences are built, not just designed.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bio - The "Origin Story" */}
        <section className="max-w-3xl mb-20">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
               My work ethic was forged early, starting at age 14 on my family's farm in rural Michigan. That experience instilled a deep appreciation for process, patience, and the satisfaction of nurturing a project from seed to harvest.
            </p>
            <p>
              I carried these lessons with me to college, where I studied Digital Marketing and eCommerce at Western Michigan University. Early on, I realized that the most successful campaigns weren't just about virality or luck, but rather systems that tie businesses and customers together.
            </p>
            <p>
              Rather than hand off a strategy and hope for the best, I seek to build the engine that drives it. Whether it's a scalable brand identity, a conversion-optimized campaign, or a shopify store.
            </p>
          </div>
        </section>

        {/* The Toolkit - Proving the "Technical" Claim */}
        <section className="max-w-4xl mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">My Toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Development */}
            <div className="bg-card p-8 rounded-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-primary" size={24} />
                <h3 className="text-xl font-medium">Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub", "Vercel", "Shopify", "VS Code"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Strategy & Data */}
            <div className="bg-card p-8 rounded-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-primary" size={24} />
                <h3 className="text-xl font-medium">Strategy & Data</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Google Analytics 4", "Semrush", "Screaming Frog", "Prompt Engineering", "SEO/SEM", "A/B Testing", "Conversion Optimization", "Market Research"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Design */}
            <div className="bg-card p-8 rounded-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <PenTool className="text-primary" size={24} />
                <h3 className="text-xl font-medium">Design</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Adobe Creative Suite", "Canva", "Wireframing", "UI/UX", "Visio", "Squarespace"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="bg-card p-8 rounded-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="text-primary" size={24} />
                <h3 className="text-xl font-medium">Content & Ops</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Google Workspace", "MS 365 Copilot", "NetSuite", "Asana","Email Marketing", "OpenAI APIs", "Copywriting", "Project Management"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Philosophy - "How I Work" Upgrade */}
        <section className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Philosophy</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-medium mb-2">People {'>'} Pixels</h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology exists to serve people, not the other way around. I build digital experiences that respect the user's time, attention, and intelligence, because good ethics is good business.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-medium mb-2">Data-informed, human-centric</h3>
              <p className="text-muted-foreground leading-relaxed">
                Data is fascinating, but spreadsheets don't buy products - people do. Let's use analytics to find the opportunity, then use empathy and creativity to connect with the human on the other side of the screen.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-medium mb-2">Impact over Impression</h3>
              <p className="text-muted-foreground leading-relaxed">
                Let's solve real problems for real people. If it doesn't help the user or move the needle for the business, it's just noise.
              </p>
            </div>
          </div>
        </section>

        {/* Personal / Offline Section */}
        <section className="max-w-5xl mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">When I'm offline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                While I love the digital world, I believe the best inspiration comes from stepping away from the screen.
              </p>
              <p>
                I deeply enjoy exploring new places, especially when it's with the people closest to me. You can often find me at any rock concert, bike trail, or dive bar around Michigan.
              </p>
              <p>
                I'm also a firm believer in using technology for good. My passion for humanitarian work shapes everything I do - and build, ensuring that we aren't just making things "faster" or "profit-optimized," but actually better for the people using them.
              </p>
            </div>
            
            {/* The Personal Photo */}
            <div className="relative aspect-[4/5] w-full md:w-5/6 ml-auto rounded-sm overflow-hidden bg-muted">
              <Image
                src="/images/museum-portrait.jpg"
                alt="Andy at the Art Museum"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card p-12 rounded-sm text-center max-w-3xl border border-border mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Ready to build?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a full-stack digital overhaul or a creative director for your next campaign, I'm here to help.
          </p>
          <Button asChild size="lg">
            <Link href="/work-with-me">
              Start a project
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
