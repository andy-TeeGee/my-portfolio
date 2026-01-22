import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Users, Rocket } from "lucide-react";

export default function DMSARelaunchPage() {
  return (
    <article className="pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to portfolio
        </Link>

        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-primary font-medium uppercase tracking-wider">
            <span>Nonprofit</span>
            <span>•</span>
            <span>Digital Strategy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium mb-6 text-balance leading-tight">
            Revitalizing the DMSA: A Strategic Turnaround
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Leading the relaunch of a student organization's digital presence, operational systems, and member engagement strategy after years of dormancy.
          </p>
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border py-8">
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Rocket size={16} className="mr-2" />
                Status
              </div>
              <div className="font-medium">Active Relaunch</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Users size={16} className="mr-2" />
                Organization
              </div>
              <div className="font-medium">DMSA at WMU</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Globe size={16} className="mr-2" />
                Role
              </div>
              <div className="font-medium">Creative Director</div>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <Rocket size={16} className="mr-2" />
                Timeline
              </div>
              <div className="font-medium">Fall 2025 - Present</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-16">
          
          {/* The Challenge */}
          <div>
            <h2 className="text-3xl font-medium mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Digital Marketing Student Association had been in decline for several years, leaving a gap in professional development opportunities for marketing students. As an incoming director, myself and the board inherited limited digital infrastructure, no value generation, and no brand presence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We needed to rebuild an entire organization's operational and digital ecosystem from scratch while recruiting members and securing funding, all within a single semester.
            </p>
          </div>

          {/* Strategic Priorities */}
          <div className="border-t pt-12">
            <h2 className="text-3xl font-medium mb-8">Relaunch Strategy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-sm border">
                <div className="text-4xl font-light text-muted-foreground/30 mb-4">01</div>
                <h3 className="text-lg font-medium mb-2">Digital Foundation</h3>
                <p className="text-sm text-muted-foreground">
                  Built value, social media presence, and more importantly, a close-knit team to establish organizational legitimacy and reach.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border">
                <div className="text-4xl font-light text-muted-foreground/30 mb-4">02</div>
                <h3 className="text-lg font-medium mb-2">Member Acquisition</h3>
                <p className="text-sm text-muted-foreground">
                  Designed recruitment campaigns targeting marketing students through orientation events and digital outreach.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border">
                <div className="text-4xl font-light text-muted-foreground/30 mb-4">03</div>
                <h3 className="text-lg font-medium mb-2">Value Programming</h3>
                <p className="text-sm text-muted-foreground">
                  Partnered with industry professionals to deliver workshops, networking events, and true portfolio-building opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Initiatives */}
          <div className="border-t pt-12">
            <h2 className="text-3xl font-medium mb-6">Key Initiatives in Progress</h2>
            <ul className="space-y-4">
              {[
                'Value generation through ideating workshops, speaker series, and student-led campaigns',
                'Social media strategy driving weekly engagement and event promotion',
                'Operational systems for member tracking, event management, and communications',
                'Partnership outreach to secure funding and speaker opportunities',
              ].map((initiative, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{initiative}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Progress Note */}
          <div className="bg-muted/30 p-8 rounded-sm border border-border">
            <h3 className="font-medium mb-3">Relaunch Status</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DMSA is currently in active relaunch phase. Core systems are operational, with the first semester of programming scheduled for Spring 2026. Early momentum includes successful executive board recruitment and positive faculty engagement.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl bg-card p-12 rounded-sm text-center border">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Building something from scratch?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I specialize in launching digital systems that scale.
          </p>
          <Button asChild size="lg">
            <Link href="/work-with-me">
              Let's Talk
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
