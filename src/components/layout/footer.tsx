import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "@/components/icons";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { href: "/#about", label: "About RECAP" },
  { href: "/#technology", label: "Technology" },
  { href: "/#mission", label: "Mission Goals" },
  { href: "/#contact", label: "Contact Us" },
];

const contactInfo = [
  { icon: Mail, value: "contact@recap-mission.com" },
  { icon: Phone, value: "8977017599" },
  { icon: MapPin, value: "Hyderabad, India" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="py-8 text-center">
            <p className="text-sm text-muted-foreground">
                Powered by Team VAJRA
            </p>
        </div>
        <div className="grid grid-cols-1 gap-8 py-12 border-t border-border/50 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Image src="/images/logo.png" alt="RECAP Logo" width={240} height={65} />
            </Link>
            <p className="text-sm text-muted-foreground">
              Recoverable Capsule for Orbital Debris Collection. Securing Earth's orbital environment for future generations through advanced autonomous systems.
            </p>
             <div className="flex items-center gap-2 text-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-muted-foreground">Mission Status:</span>
                <span className="font-semibold text-primary">Active</span>
             </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3">
              {contactInfo.map((info) => (
                <li key={info.value} className="flex items-center gap-3">
                  <info.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-foreground">Get Involved</h3>
            <p className="text-sm text-muted-foreground">Join us in our mission to keep space clean and safe for everyone.</p>
            <div className="flex flex-col space-y-2">
                <Button asChild>
                    <Link href="/login">Join the Mission</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="#">Watch Demo</Link>
                </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 border-t border-border/50 py-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RECAP Mission. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                Mission Updates
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
