"use client";

import { useTranslations } from "next-intl";
import { Code, Cloud, Network, Headset, HardDrive, Globe, GraduationCap } from "lucide-react";

const serviceIcons = {
  softwareDevelopment: Code,
  cloudSolutions: Cloud,
  networking: Network,
  technicalSupport: Headset,
  hardwareSupply: HardDrive,
  webDevelopment: Globe,
  training: GraduationCap,
};

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    "softwareDevelopment",
    "cloudSolutions",
    "networking",
    "technicalSupport",
    "hardwareSupply",
    "webDevelopment",
    "training",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-text-secondary">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = serviceIcons[service as keyof typeof serviceIcons];
            return (
              <div key={service} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-3">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{t(`${service}.name`)}</h3>
                <p className="text-sm text-text-secondary">
                  {t(`${service}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
