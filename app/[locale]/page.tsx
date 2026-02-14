import HeroSection from "@/components/sections/home/HeroSection";
import StatsSection from "@/components/sections/home/StatsSection";
import WhoWeAreSection from "@/components/sections/home/WhoWeAreSection";
import ProductsGridSection from "@/components/sections/home/ProductsGridSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import WhyChooseSection from "@/components/sections/home/WhyChooseSection";
import CTASection from "@/components/sections/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhoWeAreSection />
      <ProductsGridSection />
      <ServicesSection />
      <WhyChooseSection />
      <CTASection />
    </>
  );
}
