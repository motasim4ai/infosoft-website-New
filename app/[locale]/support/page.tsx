import { Search, FileText, Download, Headphones } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Center</h1>
            <p className="text-lg text-text-secondary mb-8">We&apos;re here to help</p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for help..."
                  className="pl-12 h-14 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: FileText,
                title: "FAQ",
                description: "Find answers to common questions"
              },
              {
                icon: FileText,
                title: "Knowledge Base",
                description: "Detailed guides and tutorials"
              },
              {
                icon: Download,
                title: "Downloads",
                description: "Software updates and manuals"
              },
              {
                icon: Headphones,
                title: "Remote Support",
                description: "Get remote assistance from our team"
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass-card p-6 text-center card-hover">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-text-secondary mb-4">{item.description}</p>
                  <Button variant="outline" size="sm">Explore</Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How do I install Infosoft 13?",
                  answer: "Installation instructions are provided in the user manual. Our technical team can also assist with installation."
                },
                {
                  question: "Is ZATCA e-invoicing included?",
                  answer: "Yes, all our products are ZATCA compliant and include e-invoicing functionality."
                },
                {
                  question: "What are your support hours?",
                  answer: "We provide 24/7 technical support via phone, email, and remote assistance."
                },
                {
                  question: "Can I try before I buy?",
                  answer: "Yes, we offer free demos. Contact us to schedule a demonstration."
                },
              ].map((item, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                  <p className="text-text-secondary">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg text-text-secondary mb-8">
              Our support team is ready to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Call: 920012306</Button>
              <Button size="lg" variant="outline">Email Support</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
