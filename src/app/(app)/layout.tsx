import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import ScrollProgress from "@/components/scroll-progress";
import { AppHeader } from "@/components/layout/mobile-header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className="min-h-screen">
          {children}
        </div>
        <ScrollProgress />
      </SidebarInset>
    </SidebarProvider>
  );
}
