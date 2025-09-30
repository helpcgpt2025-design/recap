import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import GlowingCursor from '@/components/glowing-cursor';
import WelcomeAnimation from '@/components/welcome-animation';

export const metadata: Metadata = {
  title: 'RECAP Portal',
  description: 'Recoverable Capsule for Orbital Debris Collection',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <WelcomeAnimation />
        <GlowingCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
