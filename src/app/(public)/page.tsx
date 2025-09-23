import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Crosshair, Shield, Globe, Zap, Database, Mail, Phone, MapPin, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
const aboutImage = PlaceHolderImages.find(img => img.id === 'about-recap');
const missionImage = PlaceHolderImages.find(img => img.id === 'mission-earth');

const stats = [
  { value: "500k+", label: "Debris Objects Tracked" },
  { value: "99.9%", label: "Mission Success Rate" },
  { value: "24/7", label: "Orbital Monitoring" },
];

const technologyFeatures = [
    {
        icon: Crosshair,
        title: "Precision Targeting",
        description: "Advanced AI algorithms identify and track debris with millimeter precision in real-time.",
    },
    {
        icon: Zap,
        title: "Autonomous Recovery",
        description: "Self-navigating capsules execute complex orbital maneuvers for debris collection missions.",
    },
    {
        icon: Shield,
        title: "Satellite Protection",
        description: "Proactive debris removal safeguards critical communication and navigation satellites.",
    },
    {
        icon: Globe,
        title: "Global Coverage",
        description: "Comprehensive monitoring and collection across all Earth orbital zones and trajectories.",
    },
    {
        icon: Database,
        title: "Real-time Telemetry",
        description: "Live mission data streaming with instant alerts and comprehensive status monitoring.",
    },
    {
        icon: Zap,
        title: "Mission Analytics",
        description: "Detailed reports and predictive analytics for future debris mitigation strategies.",
    },
];

const missionGoals = [
    {
        title: "Immediate Threat Removal",
        description: "Target and collect the most dangerous debris objects that pose immediate collision risks to active satellites.",
    },
    {
        title: "Sustainable Operations",
        description: "Establish ongoing monitoring and collection protocols to maintain clean orbital environments.",
    },
    {
        title: "Future-Ready Infrastructure",
        description: "Build scalable systems that can adapt to growing space activity and emerging debris challenges.",
    },
]

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "contact@recap-mission.com"
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+1 (555) 123-SPACE"
    },
    {
        icon: MapPin,
        title: "Mission Control",
        value: "Houston Space Center, Texas, USA"
    },
]

export default function Home() {
  return (
    <>
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        
           <Image
            src="/hero-banner.jpg"
            alt="A satellite collecting orbital debris with Earth in the background."
            fill
            className="object-cover"
            priority
          />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="container mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="relative z-10 flex h-full max-w-2xl flex-col items-start justify-center text-left">
            
            <Badge variant="secondary" className="mb-4 bg-black/30 backdrop-blur-sm border-primary/30">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Mission Active
            </Badge>
            
            <h1 className="font-headline text-5xl font-bold tracking-tight text-primary glow-text sm:text-6xl md:text-7xl lg:text-8xl" style={{ textShadow: '0 0 15px hsl(var(--primary) / 0.8), 0 0 30px hsl(var(--primary) / 0.5)' }}>
              RECAP
            </h1>
            <p className="mt-2 max-w-4xl text-2xl text-foreground/90 md:text-3xl font-bold">
              Recoverable Capsule for Orbital Debris Collection
            </p>
            <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
              Cleaning Space, Securing Orbits. Advanced autonomous systems for collecting and managing orbital debris to protect critical satellite infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <Button asChild size="lg" className="glowing-btn">
                <Link href="/dashboard">Join the Mission <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 w-full max-w-5xl">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-primary/20 bg-black/30 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                  <p className="font-headline text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About RECAP</h2>
              <div>
                <h3 className="font-headline text-2xl font-bold">Our Vision</h3>
                <p className="mt-2 text-muted-foreground">
                  To create a sustainable orbital environment by removing dangerous space debris that threatens active satellites and future missions. We envision clean, safe orbital paths for the next generation of space exploration.
                </p>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold">Why It Matters</h3>
                <p className="mt-2 text-muted-foreground">
                  With over 500,000 pieces of debris orbiting Earth, the risk to critical infrastructure is unprecedented. Our technology provides the solution needed to protect billions of dollars in satellite assets and ensure continued space accessibility.
                </p>
              </div>
            </div>
            <div>
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section id="technology" className="py-12 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Advanced Technology</h2>
            <p className="mt-4 text-muted-foreground">
              Our cutting-edge systems combine AI, autonomous navigation, and precision engineering to deliver unmatched debris collection capabilities.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyFeatures.map((feature) => (
                <Card key={feature.title} className="tech-card bg-transparent border-primary/20 transition-all">
                    <CardHeader className="flex flex-col items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg border border-primary/30">
                            <feature.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Mission <span className="text-primary">Goals</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Our comprehensive approach to orbital debris management focuses on immediate threat mitigation and long-term sustainability.
                    </p>
                    <ul className="space-y-6">
                        {missionGoals.map((goal, index) => (
                           <li key={goal.title} className="flex items-start gap-4">
                               <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/30 flex-shrink-0">
                                   <div className="relative flex h-3 w-3">
                                        <div className={`animate-ping absolute inline-flex h-full w-full rounded-full ${index === 0 ? 'bg-primary/75' : 'bg-primary/50'} opacity-75`}></div>
                                        <div className={`relative inline-flex rounded-full h-3 w-3 ${index === 0 ? 'bg-primary' : 'bg-primary/50'}`}></div>
                                   </div>
                               </div>
                               <div>
                                   <h3 className="font-headline text-xl font-bold">{goal.title}</h3>
                                   <p className="text-muted-foreground">{goal.description}</p>
                               </div>
                           </li>
                        ))}
                    </ul>
                </div>
                <div>
                  {missionImage && (
                      <Image
                          src={missionImage.imageUrl}
                          alt={missionImage.description}
                          width={600}
                          height={600}
                          className="rounded-lg object-cover"
                          data-ai-hint={missionImage.imageHint}
                      />
                  )}
                </div>
            </div>
        </div>
      </section>
      
      <section id="contact" className="py-12 md:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                    Ready to join the mission? Contact our team to learn more about RECAP technology and partnership opportunities.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="hud-card">
                    <CardHeader>
                        <CardTitle className="font-headline">Send us a Message</CardTitle>
                        <CardDescription>We'd love to hear from you. Fill out the form and we'll be in touch soon.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name *</Label>
                                    <Input id="name" placeholder="Your full name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email *</Label>
                                    <Input id="email" type="email" placeholder="your.email@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="organization">Organization</Label>
                                <Input id="organization" placeholder="Your company or institution" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message *</Label>
                                <Textarea id="message" placeholder="Tell us about your interest in RECAP or any questions you have..." className="min-h-[120px]" />
                            </div>
                            <Button type="submit" size="lg" className="w-full glowing-btn">
                                <Send className="mr-2"/> Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {contactInfo.map(info => (
                           <Card key={info.title} className="hud-card">
                               <CardHeader className="flex flex-row items-center gap-4">
                                   <div className="bg-primary/10 p-3 rounded-lg border border-primary/30">
                                       <info.icon className="h-6 w-6 text-primary" />
                                   </div>
                                   <div>
                                       <CardTitle className="font-headline text-lg">{info.title}</CardTitle>
                                       <p className="text-muted-foreground text-sm">{info.value}</p>
                                   </div>
                               </CardHeader>
                           </Card>
                        ))}
                    </div>
                    <Card className="hud-card">
                        <CardHeader>
                            <CardTitle className="font-headline">Partnership Opportunities</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Interested in collaborating on space debris solutions? Let's explore partnership opportunities.</p>
                            <Button variant="outline">Learn More</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
