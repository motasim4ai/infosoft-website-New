export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-lg text-text-secondary">
              Success Partners Across Saudi Arabia
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Trusted by 5,500+ Organizations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="glass-card p-6 flex items-center justify-center aspect-video">
                  <div className="text-6xl">🏢</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Industry Sectors
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Retail & Supermarkets",
                "Restaurants & Hospitality",
                "Gold & Jewelry",
                "Manufacturing",
                "Healthcare",
                "Education",
                "Real Estate",
                "Trading & Distribution",
                "Professional Services",
              ].map((sector, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="text-4xl mb-3">✓</div>
                  <h3 className="text-xl font-bold">{sector}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Ahmed Al-Qahtani",
                  company: "Al-Qahtani Trading",
                  text: "Infosoft 13 transformed our business operations. The system is reliable and the support team is exceptional."
                },
                {
                  name: "Sara Mohammed",
                  company: "Golden Palace Jewelry",
                  text: "The Gold Management system is perfect for our needs. RFID integration made inventory tracking so easy."
                },
                {
                  name: "Khalid Abdullah",
                  company: "Fresh Market Supermarket",
                  text: "Best POS system we've used. Fast, reliable, and the e-invoicing integration is seamless."
                },
              ].map((testimonial, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="text-4xl mb-4 text-primary">"</div>
                  <p className="text-text-secondary mb-6">{testimonial.text}</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
