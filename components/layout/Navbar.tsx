"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-navbar" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xl">
                I
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-xl text-gradient">Infosoft</div>
                <div className="text-xs text-text-secondary">Since 1987</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-text-primary hover:text-primary transition-colors font-medium"
              >
                {t("home")}
              </Link>
              <Link
                href="/about-us"
                className="text-text-primary hover:text-primary transition-colors font-medium"
              >
                {t("aboutUs")}
              </Link>
              <Link
                href="/products"
                className="text-text-primary hover:text-primary transition-colors font-medium"
              >
                {t("products")}
              </Link>
              <Link
                href="/services"
                className="text-text-primary hover:text-primary transition-colors font-medium"
              >
                {t("services")}
              </Link>
              <Link
                href="/clients"
                className="text-text-primary hover:text-primary transition-colors font-medium"
              >
                {t("clients")}
              </Link>
              <Link
                href="/blog"
                className="text-text-primary hover:text-primary transition-colors font-medium"
              >
                {t("blog")}
              </Link>
              <Link
                href="/support"
                className="text-text-primary hover:text-primary transition-colors font-medium"
              >
                {t("support")}
              </Link>
              <Link
                href="/contact-us"
                className="text-text-primary hover:text-primary transition-colors font-medium"
              >
                {t("contactUs")}
              </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Button asChild className="hidden md:inline-flex">
                <Link href="/request-demo">{t("requestDemo")}</Link>
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-text-primary hover:text-primary"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
