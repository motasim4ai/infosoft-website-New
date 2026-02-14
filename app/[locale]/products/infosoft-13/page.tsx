import { Monitor, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function Infosoft13Page() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
              <Monitor className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Infosoft 13
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Complete ERP and Accounting System for Modern Businesses
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
                Infosoft 13 is our flagship enterprise resource planning (ERP) and accounting solution, designed specifically for Saudi businesses. With comprehensive modules covering all aspects of business management, Infosoft 13 helps organizations streamline operations, ensure compliance, and drive growth.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Built with over 37 years of experience in the Saudi market, Infosoft 13 supports multi-branch operations, multiple currencies, and is fully compliant with ZATCA e-invoicing regulations.
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
                  title: "General Ledger (GL)",
                  description: "Comprehensive chart of accounts, journal entries, and financial reporting"
                },
                {
                  title: "Accounts Payable/Receivable",
                  description: "Manage supplier and customer accounts with aging reports"
                },
                {
                  title: "Inventory Management",
                  description: "Track stock levels, movements, and valuations across multiple warehouses"
                },
                {
                  title: "Multi-Branch Support",
                  description: "Centralized management of multiple locations with branch-specific reporting"
                },
                {
                  title: "ZATCA E-Invoicing",
                  description: "Fully compliant with Saudi ZATCA Fatoora Phase 1 & 2 requirements"
                },
                {
                  title: "Point of Sale (POS)",
                  description: "Integrated POS system for retail and hospitality operations"
                },
                {
                  title: "Human Resources",
                  description: "Employee management, payroll, and attendance tracking"
                },
                {
                  title: "Fixed Assets",
                  description: "Track and depreciate company assets with comprehensive reporting"
                },
                {
                  title: "Purchase Management",
                  description: "Purchase orders, goods receipt, and supplier management"
                },
                {
                  title: "Sales Management",
                  description: "Sales orders, invoicing, and customer relationship management"
                },
                {
                  title: "Financial Reports",
                  description: "Balance sheet, income statement, cash flow, and custom reports"
                },
                {
                  title: "Multi-Currency",
                  description: "Support for multiple currencies with automatic conversion"
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Infosoft 13</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "ZATCA Certified",
                  description: "Fully compliant with Saudi e-invoicing regulations"
                },
                {
                  title: "Proven Track Record",
                  description: "Trusted by 5,500+ organizations across Saudi Arabia"
                },
                {
                  title: "Scalable Solution",
                  description: "Grows with your business from SME to enterprise"
                },
                {
                  title: "Local Support",
                  description: "Arabic interface with 24/7 local technical support"
                },
                {
                  title: "Regular Updates",
                  description: "Continuous improvements and new features"
                },
                {
                  title: "Customizable",
                  description: "Adapt the system to your specific business needs"
                },
              ].map((benefit, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-text-secondary">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Schedule a demo to see Infosoft 13 in action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-demo">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact-us">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
