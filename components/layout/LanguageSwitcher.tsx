"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 p-1 glass-card">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
          locale === "en"
            ? "bg-primary text-white"
            : "text-text-secondary hover:text-primary"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("ar")}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
          locale === "ar"
            ? "bg-primary text-white"
            : "text-text-secondary hover:text-primary"
        }`}
      >
        عربي
      </button>
    </div>
  );
}
