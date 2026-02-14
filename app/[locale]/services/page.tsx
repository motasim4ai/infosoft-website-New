import { Code, Cloud, Network, Headset, HardDrive, Globe, GraduationCap } from "lucide-react";
import { Link } from "@/navigation";

const services = [
  {
    id: "software-development",
    name: "Software Development",
    description: "Custom software solutions built to your specifications. From enterprise applications to mobile apps, we deliver high-quality software that meets your business needs.",
    icon: Code,
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services. Move your business to the cloud with confidence and enjoy flexibility, security, and cost savings.",
    icon: Cloud,
  },
  {
    id: "networking",
    name: "Networking",
    description: "Network design, implementation, and maintenance. Build a reliable and secure network infrastructure that supports your business operations.",
    icon: Network,
  },
  {
    id: "technical-support",
    name: "Technical Support",
    description: "24/7 expert technical support for all our products. Our dedicated support team is always ready to help you resolve issues quickly.",
    icon: Headset,
  },
  {
    id: "hardware-supply",
    name: "Hardware Supply",
    description: "Quality hardware and equipment procurement. From servers to POS terminals, we supply the hardware you need for your IT infrastructure.",
    icon: HardDrive,
  },
  {
    id: "web-development",
    name: "Web Development",
    description: "Modern, responsive websites and web applications. Create a strong online presence with custom web solutions that engage your audience.",
    icon: Globe,
  },
  {
    id: "training",
    name: "Training",
    description: "Comprehensive training programs for your team. Master our software and maximize your investment with expert-led training sessions.",
    icon: GraduationCap,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-text-secondary">
              End-to-end IT solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <div className="glass-card p-8 card-hover h-full">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Choose Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Expert Team",
                  description: "Certified professionals with years of experience"
                },
                {
                  title: "Proven Process",
                  description: "Systematic approach ensuring quality delivery"
                },
                {
                  title: "Local Presence",
                  description: "Six branches across Saudi Arabia"
                },
                {
                  title: "Quick Response",
                  description: "Fast turnaround times for all service requests"
                },
              ].map((item, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
