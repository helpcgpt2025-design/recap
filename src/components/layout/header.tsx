import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">RECAP</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" prefetch={false}>
            About
          </Link>
          <Link href="/#technology" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" prefetch={false}>
            Technology
          </Link>
          <Link href="/#mission" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" prefetch={false}>
            Mission
          </Link>
           <Link href="/#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" prefetch={false}>
            Contact
          </Link>
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
