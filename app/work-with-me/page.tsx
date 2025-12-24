"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"

export default function WorkWithMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be added later (Supabase, etc.)
    console.log("Form submitted:", formData)
  }

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-card py-12 md:py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
              Let's create something remarkable together
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I partner with forward-thinking brands and organizations to solve complex creative challenges through
              strategic thinking and exceptional craft.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Brand Strategy & Identity",
                description:
                  "Comprehensive brand development from positioning and strategy to visual identity systems and guidelines.",
                includes: ["Brand positioning", "Visual identity", "Brand guidelines", "Collateral design"],
              },
              {
                title: "Creative Campaigns",
                description:
                  "Integrated creative campaigns that capture attention and drive meaningful engagement across channels.",
                includes: ["Campaign strategy", "Creative direction", "Asset production", "Multi-channel execution"],
              },
              {
                title: "Photography & Visual Content",
                description:
                  "Commercial and editorial photography that tells authentic stories and elevates brand narratives.",
                includes: ["Commercial photography", "Editorial shoots", "Content strategy", "Image curation"],
              },
              {
                title: "Creative Direction & Consulting",
                description:
                  "Strategic guidance and hands-on direction to elevate creative output and streamline processes.",
                includes: ["Creative strategy", "Team direction", "Process optimization", "Quality assurance"],
              },
            ].map((service, i) => (
              <div key={i} className="bg-card p-8 rounded-sm border border-border">
                <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.includes.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center">
                      <Check size={16} className="text-primary mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            With over a decade of experience across multiple creative disciplines, I bring a unique perspective that
            combines strategic thinking with hands-on execution. My work has helped brands of all sizes—from startups to
            Fortune 500 companies—communicate more effectively and connect more authentically with their audiences.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe the best creative work happens at the intersection of clear strategy, exceptional craft, and
            genuine collaboration. I partner closely with clients to understand their challenges, explore possibilities,
            and deliver work that makes a meaningful impact.
          </p>
        </section>

        {/* Selected Clients */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Trusted by</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I've had the privilege of working with innovative companies across industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Client One",
              "Client Two",
              "Client Three",
              "Client Four",
              "Client Five",
              "Client Six",
              "Client Seven",
              "Client Eight",
            ].map((client, i) => (
              <div
                key={i}
                className="aspect-[16/9] bg-muted rounded-sm flex items-center justify-center text-sm text-muted-foreground font-medium"
              >
                {client}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Working with [Name] transformed not just our brand, but how we think about our business. The strategic insights paired with beautiful execution exceeded all expectations.",
                author: "Sarah Johnson",
                role: "CEO, Sustainable Living Co.",
              },
              {
                quote:
                  "Rare combination of strategic thinking and creative excellence. [Name] understood our vision immediately and brought it to life in ways we hadn't imagined.",
                author: "Michael Chen",
                role: "Marketing Director, Tech Startup",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-sm">
                <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">What is your typical project timeline?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Project timelines vary based on scope and complexity. A typical brand identity project takes 6-8 weeks,
                while campaign work might range from 4-12 weeks. I'll provide a detailed timeline during our initial
                consultation based on your specific needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How do you structure your fees?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                I typically work on a project basis with fixed fees agreed upon before starting. For ongoing
                relationships, I offer monthly retainers. I'm happy to discuss what structure works best for your needs
                and budget during our initial conversation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Do you work with clients remotely?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes! I work with clients all over the world. Most of my projects are conducted remotely with virtual
                meetings and collaborative tools. For photography projects or intensive workshops, I can travel to your
                location when needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">What makes your approach different?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                I bring a multidisciplinary perspective that connects strategy with execution. Rather than working in
                silos, I consider how all creative touchpoints work together to tell a cohesive story. This holistic
                approach leads to more effective, integrated creative solutions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Contact Form */}
        <section className="max-w-3xl">
          <div className="bg-card p-8 md:p-12 rounded-sm">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Start a project</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and I'll get back to you within 24 hours to discuss your project.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input
                    id="budget"
                    placeholder="e.g., $10k-$25k"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In *</Label>
                <Input
                  id="service"
                  placeholder="e.g., Brand Identity, Campaign, Photography"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, timeline, and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Send inquiry
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-6">
              Prefer email? Reach me directly at{" "}
              <a href="mailto:hello@creativestudio.com" className="text-primary hover:underline">
                hello@creativestudio.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
