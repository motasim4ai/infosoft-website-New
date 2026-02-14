import { Network, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function NetworkingPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
              <Network className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Networking Services</h1>
            <p className="text-lg text-text-secondary mb-8">Professional Network Design & Implementation</p>
            <Button asChild size="lg">
              <Link href="/contact-us">Get Started <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto glass-card p-8">
            <p className="text-lg text-text-secondary leading-relaxed">
              Build a reliable and secure network infrastructure with our professional networking services. From LAN/WAN setup to WiFi solutions and network security.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
