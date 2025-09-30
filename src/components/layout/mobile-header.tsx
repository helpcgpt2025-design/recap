"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SheetClose, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";

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
                    <Image src="/images/logo.png" alt="RECAP Logo" width={240} height={65} />
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


export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/50 px-4 backdrop-blur-sm sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <SidebarTrigger className="sm:hidden" />
        <div className="flex-1" />
    </header>
  );
}
