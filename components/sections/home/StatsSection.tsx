"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
}

function StatItem({ value, suffix = "", label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const stepValue = value / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            if (currentStep <= steps) {
              setCount(Math.min(Math.round(stepValue * currentStep), value));
            } else {
              clearInterval(timer);
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-text-secondary">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value={37} suffix="+" label={t("years")} />
            <StatItem value={5500} suffix="+" label={t("organizations")} />
            <StatItem value={15} suffix="+" label={t("products")} />
            <StatItem value={6} label={t("branches")} />
          </div>
        </div>
      </div>
    </section>
  );
}
