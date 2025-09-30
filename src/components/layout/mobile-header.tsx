"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#technology", label: "Technology" },
  { href: "#mission", label: "Mission" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center border-b pb-4">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <Image src="/images/logo.png" alt="RECAP Logo" width={120} height={32} />
                </Link>
            </div>
            <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link, index) => (
                <SheetClose asChild key={link.href}>
                    <Link
                        href={link.href}
                        className={cn(
                            "text-lg font-medium text-muted-foreground transition-colors hover:text-primary",
                            pathname === link.href && "text-primary"
                        )}
                        >
                        {link.label}
                    </Link>
                 </SheetClose>
                ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2">
                <SheetClose asChild>
                    <Button variant="outline" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                </SheetClose>
                <SheetClose asChild>
                    <Button className="glowing-btn" asChild>
                        <Link href="/login">Get Started</Link>
                    </Button>
                </SheetClose>
            </div>
        </div>
    )
}
