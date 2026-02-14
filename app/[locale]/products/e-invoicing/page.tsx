import { FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function EInvoicingPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">E-Invoicing Solution</h1>
            <p className="text-lg text-text-secondary mb-8">ZATCA Fatoora Compliance Made Easy</p>
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
                Ensure full compliance with Saudi ZATCA e-invoicing regulations. Our solution handles both Phase 1 (Generation) and Phase 2 (Integration) requirements, making electronic invoicing seamless for your business.
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
                { title: "Phase 1 & 2 Compliant", description: "Full compliance with ZATCA Fatoora requirements" },
                { title: "QR Code Generation", description: "Automatic QR code on all invoices" },
                { title: "XML Format", description: "Generate invoices in ZATCA-approved XML format" },
                { title: "Digital Signature", description: "Cryptographic signing of all invoices" },
                { title: "Real-time Integration", description: "Direct integration with ZATCA platform" },
                { title: "Invoice Archiving", description: "Secure storage of all electronic invoices" },
                { title: "Compliance Reports", description: "Track submission status and compliance" },
                { title: "Multi-Language", description: "Support for Arabic and English invoices" },
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
            <h2 className="text-3xl font-bold mb-4">Stay ZATCA Compliant</h2>
            <p className="text-lg text-text-secondary mb-8">Get started with e-invoicing today</p>
            <Button asChild size="lg">
              <Link href="/request-demo">Request Demo <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
