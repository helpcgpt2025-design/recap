import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PlayCircle, Rocket, Telescope, Wrench } from "lucide-react";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
const promoImage = PlaceHolderImages.find(img => img.id === 'promo-video-thumbnail');
const capsuleImage = PlaceHolderImages.find(img => img.id === 'satellite-capsule');

export default function Home() {
  return (
    <>
      <section className="relative h-[80vh] min-h-[600px] w-full">
        {heroImage && (
           <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="glow-text text-primary">RECAP:</span> Recoverable Capsule
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Cleaning Space, Securing Orbits.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="glowing-btn">
              <Link href="#">Join the Mission</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#technology">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Telescope className="h-10 w-10 text-primary mb-4"/>
                <CardTitle className="font-headline">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To create a sustainable future for space exploration by actively removing orbital debris and mitigating collision risks.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Wrench className="h-10 w-10 text-primary mb-4"/>
                <CardTitle className="font-headline">The Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our autonomous capsule uses advanced AI and robotics to safely capture and de-orbit space junk, burning it up on re-entry.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Rocket className="h-10 w-10 text-primary mb-4"/>
                <CardTitle className="font-headline">Mission Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Systematically clear high-risk orbits, providing a safer operational environment for current and future satellite missions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="technology" className="py-12 md:py-24 bg-secondary/20">
        <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interactive Mission Demo</h2>
            <p className="text-muted-foreground">
              Explore our RECAP capsule, the heart of our debris collection system. This 3D model demonstrates the capsule's key features and maneuverability in orbit. Interact with the model to learn more.
            </p>
          </div>
          <div className="flex items-center justify-center">
             {capsuleImage && (
                <Image
                  src={capsuleImage.imageUrl}
                  alt={capsuleImage.description}
                  width={400}
                  height={400}
                  className="rounded-full object-cover transition-transform duration-500 hover:rotate-[360deg] hover:scale-105"
                  data-ai-hint={capsuleImage.imageHint}
                />
             )}
          </div>
        </div>
      </section>

      <section id="mission" className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See RECAP in Action</h2>
                <p className="mt-4 text-muted-foreground">Watch our promotional video to understand the scale of the orbital debris problem and how RECAP is poised to solve it.</p>
            </div>
            <div className="mt-8 relative aspect-video max-w-4xl mx-auto overflow-hidden rounded-lg group">
                {promoImage && (
                    <Image
                        src={promoImage.imageUrl}
                        alt={promoImage.description}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={promoImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-20 w-20 text-white/70 transition-all group-hover:text-white group-hover:scale-110" />
                </div>
            </div>
        </div>
      </section>
      
      <section id="contact" className="py-12 md:py-24 border-t border-border/50">
        <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="text-muted-foreground">
              Have a question about our mission, technology, or partnership opportunities? Reach out to our team.
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full glowing-btn">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
