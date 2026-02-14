import { UtensilsCrossed, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function RestaurantCafePage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
              <UtensilsCrossed className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Restaurant & Cafe POS
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Complete Point of Sale System for Food & Beverage
            </p>
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
                Our Restaurant & Cafe POS system is designed for modern food service businesses. With table management, kitchen display integration, and delivery platform connectivity, manage your restaurant operations seamlessly from order to payment.
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
                { title: "Table Management", description: "Visual floor plan with real-time table status" },
                { title: "Kitchen Display System", description: "Send orders directly to kitchen screens" },
                { title: "Delivery Integration", description: "Connect with HungerStation, Jahez, and more" },
                { title: "Menu Management", description: "Easily update menu items, prices, and modifiers" },
                { title: "Split Bills", description: "Split payments by item, percentage, or custom amount" },
                { title: "Customer Display", description: "Show order details to customers in real-time" },
                { title: "Waiter Management", description: "Track server performance and tips" },
                { title: "Reservation System", description: "Manage table bookings and customer preferences" },
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
            <h2 className="text-3xl font-bold mb-4">Boost Your Restaurant Efficiency</h2>
            <p className="text-lg text-text-secondary mb-8">Schedule a demo today</p>
            <Button asChild size="lg">
              <Link href="/request-demo">Request Demo <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
