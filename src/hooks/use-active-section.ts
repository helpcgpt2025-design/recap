"use client";

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], rootMargin = '-50% 0px -50% 0px') {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => el && observer.observe(el));

    // Fallback for top of page
    const handleScroll = () => {
        const isTop = window.scrollY < 200;
        if (isTop) {
            setActiveSection(null);
        }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}
