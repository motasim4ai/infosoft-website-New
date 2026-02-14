"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WhoWeAreSection() {
  const t = useTranslations("whoWeAre");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("title")}</h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              {t("description")}
            </p>
            <Button asChild>
              <Link href="/about-us">
                {t("cta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          <div className="glass-card p-8 aspect-video flex items-center justify-center">
            <div className="text-center text-text-secondary">
              <div className="text-6xl mb-4">🏢</div>
              <p>Company Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
