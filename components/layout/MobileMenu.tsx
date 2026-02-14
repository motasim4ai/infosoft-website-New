"use client";

import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="font-bold text-xl text-gradient">Infosoft</div>
            <button
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col gap-2 px-6">
              <Link
                href="/"
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-text-primary hover:bg-primary/10 hover:text-primary transition-colors font-medium"
              >
                {t("home")}
              </Link>
              <Link
                href="/about-us"
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-text-primary hover:bg-primary/10 hover:text-primary transition-colors font-medium"
              >
                {t("aboutUs")}
              </Link>
              <Link
                href="/products"
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-text-primary hover:bg-primary/10 hover:text-primary transition-colors font-medium"
              >
                {t("products")}
              </Link>
              <Link
                href="/services"
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-text-primary hover:bg-primary/10 hover:text-primary transition-colors font-medium"
              >
                {t("services")}
              </Link>
              <Link
                href="/clients"
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-text-primary hover:bg-primary/10 hover:text-primary transition-colors font-medium"
              >
                {t("clients")}
              </Link>
              <Link
                href="/blog"
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-text-primary hover:bg-primary/10 hover:text-primary transition-colors font-medium"
              >
                {t("blog")}
              </Link>
              <Link
                href="/support"
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-text-primary hover:bg-primary/10 hover:text-primary transition-colors font-medium"
              >
                {t("support")}
              </Link>
              <Link
                href="/contact-us"
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-text-primary hover:bg-primary/10 hover:text-primary transition-colors font-medium"
              >
                {t("contactUs")}
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="p-6 border-t">
            <Button asChild className="w-full">
              <Link href="/request-demo" onClick={onClose}>
                {t("requestDemo")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
