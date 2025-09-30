"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function WelcomeAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 4000); // Start fading out after 4 seconds

        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 5000); // Completely hide after 5 seconds

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000",
                isFadingOut ? "opacity-0" : "opacity-100"
            )}
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col items-center gap-4 animate-fade-in-up">
                <h1 className="font-headline text-4xl font-bold text-white md:text-6xl">
                    Welcome to <span className="text-gradient">RECAP</span>
                </h1>
                <Image src="/images/logo.png" alt="RECAP Logo" width={240} height={65} />
            </div>
        </div>
    );
}
