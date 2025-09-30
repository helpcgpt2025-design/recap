import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/scroll-progress";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "@/components/layout/mobile-header";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Sheet>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollProgress />
      </div>
      <SheetContent side="left" className="pr-0 bg-background">
        <MobileNav />
      </SheetContent>
    </Sheet>
  );
}
