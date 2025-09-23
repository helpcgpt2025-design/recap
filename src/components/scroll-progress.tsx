"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Rocket } from "lucide-react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    
    if (totalHeight > 0) {
        setProgress((scrollPosition / totalHeight) * 100);
    } else {
        setProgress(0);
    }

    if (scrollPosition > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/50 backdrop-blur-sm transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg className="absolute inset-0 h-full w-full" width="56" height="56" viewBox="0 0 44 44">
        <circle
          className="text-primary/10"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r="20"
          cx="22"
          cy="22"
        />
        <circle
          className="text-primary"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r="20"
          cx="22"
          cy="22"
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>
      <Rocket className="h-6 w-6 text-primary" />
    </button>
  );
}
