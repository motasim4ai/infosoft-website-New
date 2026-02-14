import { Cloud, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function CloudSolutionsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Solutions</h1>
            <p className="text-lg text-text-secondary mb-8">Scalable Infrastructure for Modern Businesses</p>
            <Button asChild size="lg">
              <Link href="/contact-us">Get Started <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
            <div className="glass-card p-8">
              <p className="text-lg text-text-secondary leading-relaxed">
                Transform your IT infrastructure with our cloud solutions. We help businesses migrate to the cloud, optimize costs, and scale effortlessly while maintaining security and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Cloud Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Cloud Migration", description: "Seamless transition from on-premise to cloud" },
                { title: "Cloud Hosting", description: "Reliable and secure cloud hosting services" },
                { title: "Backup & Recovery", description: "Automated backup and disaster recovery" },
                { title: "Cloud Security", description: "Enterprise-grade security measures" },
                { title: "Cost Optimization", description: "Reduce costs with efficient cloud usage" },
                { title: "24/7 Monitoring", description: "Continuous monitoring and support" },
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
            <h2 className="text-3xl font-bold mb-4">Move to the Cloud Today</h2>
            <p className="text-lg text-text-secondary mb-8">Let&apos;s discuss your cloud strategy</p>
            <Button asChild size="lg">
              <Link href="/contact-us">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
