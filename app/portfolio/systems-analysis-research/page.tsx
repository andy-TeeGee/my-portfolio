"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Download, Calendar, User, BookOpen } from "lucide-react"

export default function GenAIResearchPage() {
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
            <span>Academic Research</span>
            <span>•</span>
            <span>Systems Analysis</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-balance leading-tight">
            Mechanisms of GenAI: A Strategic Framework for Digital Platforms
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Analyzing how Generative AI transforms platform governance, democratizes innovation, and redefines value creation in ecosystem economies.
          </p>
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border py-8">
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Calendar size={16} className="mr-2" />
                Timeline
              </div>
              <div className="font-medium">Fall 2025</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <User size={16} className="mr-2" />
                Role
              </div>
              <div className="font-medium">Student & Researcher</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <BookOpen size={16} className="mr-2" />
                Format
              </div>
              <div className="font-medium">9-Page White Paper</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <FileText size={16} className="mr-2" />
                Focus
              </div>
              <div className="font-medium">Platform Ecosystem Theory</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Abstract & Key Findings */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Abstract */}
            <section>
              <h2 className="text-2xl font-medium mb-4">Executive Summary</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Generative AI is not just a feature; but a mechanism that fundamentally reshapes the architecture of digital platforms. This research identifies four critical drivers of this transformation: Intelligent Automation, Democratization, Hyper-Personalization, and Collaborative Innovation.
                </p>
                <p>
                  By analyzing current Information Systems (IS) literature and platform ecosystem theory, this paper argues that GenAI challenges traditional "boundary resources" (like APIs). It proposes a new governance framework where AI acts as an active mediator, lowering barriers for non-technical creators while simultaneously creating new risks around quality control and bias.
                </p>
              </div>
            </section>

            {/* Key Findings Box */}
            <section className="bg-muted/30 p-8 rounded-sm border border-border">
              <h3 className="text-xl font-medium mb-6">Strategic Mechanisms</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>Intelligent Automation:</strong> Moving beyond static tools to AI that actively mediates value creation between platform owners and users.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>Democratization of Innovation:</strong> How lowering technical barriers (via Natural Language Processing) creates an explosion of "complementor" participation.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span><strong>The Governance Paradox:</strong> The tension between enabling generative freedom and maintaining quality control (hallucinations/bias) in a non-deterministic system.</span>
                </li>
              </ul>
            </section>

          </div>

          {/* Right Column: The "Asset" (PDF Preview) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* PDF Card */}
            <div className="bg-card border border-border rounded-sm p-2 shadow-sm">
              <a 
                href="/portfolio/genai-mechanisms.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[3/4] bg-muted relative rounded-sm overflow-hidden mb-4 group cursor-pointer block"
              >
                {/* PDF Cover Image */}
                <Image 
                  src="/portfolio/systems-analysis-research-cover.jpg" 
                  alt="GenAI Research Paper Cover"
                  fill 
                  className="object-cover" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium flex items-center">
                    <BookOpen size={20} className="mr-2" /> Read Paper
                  </span>
                </div>
              </a>

              <div className="p-4">
                <a 
                  href="/portfolio/genai-mechanisms.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mb-3 block"
                >
                  <Button className="w-full" size="lg">
                    <BookOpen size={18} className="mr-2" />
                    Read Full Paper
                  </Button>
                </a>
                
                <a 
                  href="/portfolio/genai-mechanisms.pdf" 
                  download="Goheen_GenAI_Mechanisms.pdf"
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
              <h4 className="text-sm font-medium mb-3 uppercase tracking-wider text-muted-foreground">About this project</h4>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Conducted as an advanced Systems Analysis study at Western Michigan University, this research synthesizes leading Information Systems (IS) literature to propose a novel framework for AI governance in multi-sided platform markets.
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2 font-medium">Formal Academic Title</p>
                <p className="text-sm italic font-medium text-foreground/80">
                  "Mechanisms of Generative AI on Digital Platforms: A Framework for Value Creation and Stakeholder Interaction"
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
