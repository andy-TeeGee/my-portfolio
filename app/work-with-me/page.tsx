"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { TextAnimate } from "@/components/visuals/text-animate"

export default function WorkWithMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-card py-12 md:py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <TextAnimate
              animation="blurInUp"
              by="word"
              as="h1"
              className="text-4xl md:text-6xl font-medium mb-6 text-balance"
              duration={0.8}
              delay={0.1}
            >
              Let's build something that works as good as it looks.
            </TextAnimate>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I don't just make things pretty. I bridge the gap between creative vision and business strategy to build brands, campaigns, and digital experiences that actually drive results.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Brand Strategy",
                description:
                  "Translating core business values into distinct, cohesive systems that stand out in crowded markets.",
                includes: ["Market Positioning & Research", "Brand & Visual Identity", "Value Generation", "Graphic Design"],
              },
              {
                title: "Creative & Digital Campaigns",
                description:
                  "Data-backed creative campaigns designed to engage audiences and drive conversion across digital channels.",
                includes: ["Go-to-Market Strategy", "Creative Direction", "Content Creation", "Ad Creative & Copywriting"],
              },
              {
                title: "eCommerce & Website Design",
                description:
                  "Designing responsive, high-converting storefronts and promotional sites that balance aesthetics with performance.",
                includes: ["SEO-First Architecture", "User Interface (UI) Design", "Platform Development", "Conversion Optimization"],
              },
              {
                title: "Digital Operations & Consulting",
                description:
                  "Bridging the gap between creative vision and technical implementation.",
                includes: ["Workflow Optimization", "Tech Stack Integration", "QA & Compliance", "Stakeholder Management"],
              },
            ].map((service, i) => (
              <div key={i} className="bg-card p-8 rounded-sm border border-border">
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
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

        {/* Selected Clients */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Select Partners</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Partnering with ambitious organizations to scale their digital presence and operational efficiency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                name: "Depatie", 
                src: "/logos/Trustedby_Depatie.jpg", 
                url: "https://www.depatie.com"
              },
              { 
                name: "Mammha", 
                src: "/logos/Trustedby_Mammha.jpg", 
                url: "https://www.mammha.com" 
              },
              { 
                name: "Blu-M Studios", 
                src: "/logos/Trustedby_BluM.jpg", 
              },
              { 
                name: "Rob Seth Construction", 
                src: "/logos/Trustedby_RSC.jpg", 
              },
            ].map((client, i) => (
              <a
                key={i}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[16/9] bg-white rounded-sm border border-border overflow-hidden block hover:border-primary/50 transition-colors"
              >
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Working with Andrew transformed not just our brand, but how we think about our business and our customers. His insights paired with his execution exceeded all expectations.",
                author: "Mary Glerum",
                role: "CEO, Blu-M Studios",
              },
              {
                quote:
                  "Andy's ability to use creativity, outreach, and owned media to increase our online presence has been a game-changer for our business growth.",
                author: "Rob Seth",
                role: "Owner, Rob Seth Construction",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-sm">
                <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">What is your typical project timeline?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Project timelines vary based on scope and complexity. A typical brand identity project takes 3-6 weeks, a site can take anywhere from 1-7 week(s), 
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
                Yes! I work with clients all over the US, and would love to expand abroad! Most of my work can be done remotely with virtual
                meetings and collaborative tools. For promotional projects or intensive workshops, I can travel to your
                location if needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Why choose you over an agency?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Most agencies separate "creative" from "technical." 
                I build them together. 
                Because I understand the code, the SEO, the customer, and the business strategy behind the design, I create work that doesn't just look good, but deploys correctly, ranks higher, and converts faster.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Contact Form */}
        <section className="max-w-3xl">
          <div className="bg-card p-8 md:p-12 rounded-sm">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Project Inquiry</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and I'll get back to you within 2 business days to discuss your project!
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input
                    id="budget"
                    placeholder="e.g., $1k - $10k+"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In *</Label>
                <Input
                  id="service"
                  placeholder="e.g., Brand Refresh, Content Marketing, SEO?"
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
              <a href="mailto:andrewtgoheen@gmail.com" className="text-primary hover:underline">
                andrewtgoheen@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
