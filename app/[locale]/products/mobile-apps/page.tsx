import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Applications</h1>
            <p className="text-lg text-text-secondary mb-8">Business Management On-the-Go</p>
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
                Extend your business management capabilities with our suite of mobile applications. Available for iOS and Android, manage inventory, track attendance, and access reports from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Available Apps</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Mobile Inventory", description: "Count stock, check prices, and manage inventory from your mobile device" },
                { title: "Attendance Tracker", description: "Employee check-in/out with GPS location and photo capture" },
                { title: "Gold Reporter", description: "Daily gold prices and inventory reports for jewelry businesses" },
                { title: "Sales Dashboard", description: "Real-time sales analytics and performance metrics" },
                { title: "Customer Portal", description: "Let customers view invoices and make payments" },
                { title: "Field Sales", description: "Create orders and manage customers in the field" },
                { title: "Expense Tracking", description: "Submit and approve expense claims on the go" },
                { title: "Warehouse Management", description: "Receive goods and manage transfers from mobile" },
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
            <h2 className="text-3xl font-bold mb-4">Manage Your Business Anywhere</h2>
            <p className="text-lg text-text-secondary mb-8">Explore our mobile solutions</p>
            <Button asChild size="lg">
              <Link href="/request-demo">Request Demo <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
