import { Headset, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function TechnicalSupportPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
              <Headset className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Support</h1>
            <p className="text-lg text-text-secondary mb-8">24/7 Expert Support When You Need It</p>
            <Button asChild size="lg">
              <Link href="/contact-us">Contact Support <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto glass-card p-8">
            <p className="text-lg text-text-secondary leading-relaxed">
              Our dedicated support team is available 24/7 to help you resolve any technical issues. With multiple support channels and fast response times.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
