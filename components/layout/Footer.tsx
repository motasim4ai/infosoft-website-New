"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const t = useTranslations();
  const nav = useTranslations("nav");
  const footer = useTranslations("footer");

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xl">
                I
              </div>
              <div>
                <div className="font-bold text-lg">Infosoft</div>
                <div className="text-xs text-gray-400">Since 1987</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">{footer("tagline")}</p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>920012306</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@infosoft.com.sa</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{footer("quickLinks")}</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {nav("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {nav("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {nav("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {nav("clients")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {nav("blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {nav("support")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {nav("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">{footer("ourProducts")}</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/products/infosoft-13"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Infosoft 13
                </Link>
              </li>
              <li>
                <Link
                  href="/products/gold-management"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Gold Management
                </Link>
              </li>
              <li>
                <Link
                  href="/products/restaurant-cafe"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Restaurant & Cafe
                </Link>
              </li>
              <li>
                <Link
                  href="/products/supermarket"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Supermarket
                </Link>
              </li>
              <li>
                <Link
                  href="/products/e-invoicing"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  E-Invoicing
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mobile-apps"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">{footer("newsletter")}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {footer("newsletterText")}
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                {footer("subscribe")}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>{footer("copyright")}</p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                {t("legal.privacyPolicy")}
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-primary transition-colors"
              >
                {t("legal.termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
