"use client";

import { useState } from "react";
import { Link } from "@/navigation";
import { Monitor, Diamond, UtensilsCrossed, ShoppingCart, FileText, Smartphone } from "lucide-react";

const products = [
  {
    id: "infosoft-13",
    name: "Infosoft 13",
    description: "Complete ERP and accounting system with GL, AP/AR, inventory, multi-branch support, and ZATCA e-invoicing",
    category: "ERP",
    icon: Monitor,
  },
  {
    id: "motamayez-lite",
    name: "Motamayez Lite",
    description: "Lightweight accounting solution perfect for SMEs and startups",
    category: "Accounting",
    icon: Monitor,
  },
  {
    id: "gold-management",
    name: "Gold Management",
    description: "Specialized system for gold and jewelry businesses with live pricing and RFID tracking",
    category: "Specialized",
    icon: Diamond,
  },
  {
    id: "restaurant-cafe",
    name: "Restaurant & Cafe",
    description: "Complete POS system with table management, kitchen display, and delivery integration",
    category: "POS",
    icon: UtensilsCrossed,
  },
  {
    id: "supermarket",
    name: "Supermarket",
    description: "Retail POS with barcode scanning, inventory control, and loyalty programs",
    category: "POS",
    icon: ShoppingCart,
  },
  {
    id: "e-invoicing",
    name: "E-Invoicing",
    description: "ZATCA Fatoora compliance solution for seamless electronic invoicing",
    category: "Compliance",
    icon: FileText,
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps",
    description: "Mobile inventory, attendance tracking, and gold reporting applications",
    category: "Mobile",
    icon: Smartphone,
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "ERP", "Accounting", "POS", "Specialized", "Compliance", "Mobile"];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-lg text-text-secondary">
              Comprehensive solutions for every business need
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? "glass-button text-white"
                    : "bg-gray-100 text-text-secondary hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="glass-card p-6 card-hover h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-semibold text-primary mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                    <p className="text-text-secondary">{product.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
