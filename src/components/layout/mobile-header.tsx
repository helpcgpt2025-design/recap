"use client";

import { useSidebar, SidebarTrigger } from "@/components/ui/sidebar";
import { Logo } from "@/components/icons";
import Link from "next/link";

export default function MobileHeader() {
    const { isMobile } = useSidebar();

    if (!isMobile) {
        return null;
    }

    return (
        <header className="flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <Logo className="h-6 w-6 text-primary" />
                <span className="font-headline text-xl font-bold text-foreground">RECAP</span>
            </Link>
            <SidebarTrigger />
        </header>
    );
}
