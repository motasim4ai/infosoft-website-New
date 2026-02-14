"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="glass-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <Button asChild size="lg">
            <Link href="/request-demo">
              {t("button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
