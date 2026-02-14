import { Diamond, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function GoldManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
              <Diamond className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gold Management System
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Specialized Solution for Gold & Jewelry Businesses
            </p>
            <Button asChild size="lg">
              <Link href="/request-demo">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
            <div className="glass-card p-8">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Our Gold Management System is specifically designed for gold and jewelry businesses in Saudi Arabia. With features tailored to the unique requirements of the gold trade, including live gold pricing, karat tracking, and RFID integration, this system helps jewelers manage their inventory with precision and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Live Gold Pricing",
                  description: "Real-time gold price updates integrated from international markets"
                },
                {
                  title: "Karat Management",
                  description: "Track different gold karats (24K, 22K, 21K, 18K) with automatic pricing"
                },
                {
                  title: "RFID Integration",
                  description: "Tag and track jewelry items using RFID technology"
                },
                {
                  title: "Workmanship Calculation",
                  description: "Calculate and track making charges per item"
                },
                {
                  title: "Stone Management",
                  description: "Manage precious stones and gems with detailed specifications"
                },
                {
                  title: "Repair Tracking",
                  description: "Track repair orders and customer jewelry in workshop"
                },
                {
                  title: "Barcode Labels",
                  description: "Generate and print barcode labels for each item"
                },
                {
                  title: "Consignment Management",
                  description: "Manage consignment gold from suppliers"
                },
              ].map((feature, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Perfect for Jewelry Businesses
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              See how our system can streamline your gold business operations
            </p>
            <Button asChild size="lg">
              <Link href="/request-demo">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
