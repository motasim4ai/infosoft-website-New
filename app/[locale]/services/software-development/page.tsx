import { Code, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Development</h1>
            <p className="text-lg text-text-secondary mb-8">Custom Software Solutions for Your Business</p>
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
                Our software development team creates custom applications tailored to your specific business requirements. With expertise in modern technologies and proven development methodologies, we deliver solutions that drive business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Enterprise Applications", description: "Scalable systems for large organizations" },
                { title: "Web Applications", description: "Modern web-based solutions" },
                { title: "Mobile Apps", description: "iOS and Android applications" },
                { title: "API Development", description: "RESTful APIs and integrations" },
                { title: "Database Design", description: "Optimized database architecture" },
                { title: "Maintenance & Support", description: "Ongoing support and updates" },
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
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Solution?</h2>
            <p className="text-lg text-text-secondary mb-8">Contact us to discuss your project</p>
            <Button asChild size="lg">
              <Link href="/contact-us">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
