"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Sidebar, 
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, TestTube, FileText, User, LifeBuoy, Users, Database, LogOut } from 'lucide-react';

const customerLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/classify", label: "Debris Analyzer", icon: TestTube },
  { href: "/reports", label: "Reports", icon: FileText },
];

const adminLinks = [
  { href: "/admin", label: "Admin Overview", icon: Users },
  { href: "/admin/missions", label: "Mission Data", icon: Database },
];


export function AppSidebar() {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith('/admin');

  // In a real app, you'd get the user role from a session
  const userRole = isAdminPath ? 'admin' : 'customer';

  const links = userRole === 'admin' ? adminLinks : customerLinks;

  return (
    <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="RECAP Logo" width={240} height={65} />
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {links.map((link) => (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(link.href)}
                  tooltip={{ children: link.label }}
                >
                  <Link href={link.href}>
                    <link.icon/>
                    <span>{link.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
             <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={{ children: 'Profile' }}>
                <Link href="#">
                  <User />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={{ children: 'Support' }}>
                <Link href="/#contact">
                  <LifeBuoy />
                  <span>Support</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={{ children: 'Logout' }}>
                <Link href="/">
                  <LogOut />
                  <span>Logout</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  );
}
