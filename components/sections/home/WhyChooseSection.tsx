"use client";

import { useTranslations } from "next-intl";
import { Award, Users, Shield, Clock, MapPin, Lightbulb } from "lucide-react";

const icons = [Award, Users, Shield, Clock, MapPin, Lightbulb];

export default function WhyChooseSection() {
  const t = useTranslations("whyChoose");

  const reasons = [
    "reason1",
    "reason2",
    "reason3",
    "reason4",
    "reason5",
    "reason6",
  ];

  return (
    <section className="py-20 gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <div key={reason} className="glass-card p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t(`${reason}.title`)}
                </h3>
                <p className="text-text-secondary">
                  {t(`${reason}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
