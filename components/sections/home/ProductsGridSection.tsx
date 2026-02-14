"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Monitor, Diamond, UtensilsCrossed, ShoppingCart, FileText, Smartphone } from "lucide-react";

const productIcons = {
  infosoft13: Monitor,
  goldManagement: Diamond,
  restaurantCafe: UtensilsCrossed,
  supermarket: ShoppingCart,
  eInvoicing: FileText,
  mobileApps: Smartphone,
};

export default function ProductsGridSection() {
  const t = useTranslations("products");

  const products = [
    { key: "infosoft13", slug: "infosoft-13" },
    { key: "goldManagement", slug: "gold-management" },
    { key: "restaurantCafe", slug: "restaurant-cafe" },
    { key: "supermarket", slug: "supermarket" },
    { key: "eInvoicing", slug: "e-invoicing" },
    { key: "mobileApps", slug: "mobile-apps" },
  ];

  return (
    <section className="py-20 gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-text-secondary">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ key, slug }) => {
            const Icon = productIcons[key as keyof typeof productIcons];
            return (
              <Link key={key} href={`/products/${slug}`}>
                <div className="glass-card p-6 card-hover h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {t(`${key}.name`)}
                  </h3>
                  <p className="text-text-secondary">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
