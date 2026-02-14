import { ShoppingCart, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function SupermarketPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
              <ShoppingCart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Supermarket POS</h1>
            <p className="text-lg text-text-secondary mb-8">Retail Point of Sale for Modern Stores</p>
            <Button asChild size="lg">
              <Link href="/request-demo">Request a Demo <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
            <div className="glass-card p-8">
              <p className="text-lg text-text-secondary leading-relaxed">
                Our Supermarket POS system is built for retail stores of all sizes. With barcode scanning, inventory management, and customer loyalty programs, streamline your checkout process and boost sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Barcode Scanning", description: "Fast checkout with barcode and QR code support" },
                { title: "Inventory Control", description: "Real-time stock tracking and low stock alerts" },
                { title: "Loyalty Programs", description: "Build customer loyalty with points and rewards" },
                { title: "Promotions & Discounts", description: "Create flexible promotional campaigns" },
                { title: "Multiple Payment Methods", description: "Cash, card, digital wallets, and split payments" },
                { title: "Weighing Scale Integration", description: "Connect scales for fresh produce pricing" },
                { title: "Shelf Label Printing", description: "Print price labels and product tags" },
                { title: "Multi-Store Management", description: "Manage multiple store locations centrally" },
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Modernize Your Retail Store</h2>
            <p className="text-lg text-text-secondary mb-8">See our system in action</p>
            <Button asChild size="lg">
              <Link href="/request-demo">Request Demo <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
