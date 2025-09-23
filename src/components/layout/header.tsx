"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#technology", label: "Technology" },
  { href: "#mission", label: "Mission" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const activeSection = useActiveSection(["about", "technology", "mission", "contact"]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">RECAP</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                `#${activeSection}` === link.href && "text-primary"
              )} 
              prefetch={false}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard">Customer Login</Link>
          </Button>
          <Button className="glowing-btn" asChild>
             <Link href="/admin">Admin Portal</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
