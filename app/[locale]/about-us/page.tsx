import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'about' });
  
  return {
    title: `${t('title')} | Infosoft`,
    description: t('subtitle'),
  };
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Infosoft
            </h1>
            <p className="text-lg text-text-secondary">
              Leading IT solutions provider in Saudi Arabia since 1987
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="glass-card p-8">
              <p className="text-lg text-text-secondary leading-relaxed">
                Founded in 1987 in Jeddah, Infosoft has grown to become one of Saudi Arabia&apos;s most trusted IT solution providers. With over three decades of experience, we have successfully served more than 5,500 organizations across various industries. Our journey began with a vision to transform businesses through innovative technology, and today we stand as a testament to that commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                To be the leading provider of innovative IT solutions in the Middle East, empowering businesses to achieve their full potential through digital transformation.
              </p>
            </div>
            <div className="glass-card p-8">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                To deliver world-class IT solutions that drive business growth, enhance operational efficiency, and create lasting value for our clients through continuous innovation and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {[
                { year: "1987", event: "Company founded in Jeddah, Saudi Arabia" },
                { year: "1995", event: "Launched first ERP solution for Saudi market" },
                { year: "2005", event: "Expanded to 5 branches across the Kingdom" },
                { year: "2015", event: "Introduced cloud-based solutions" },
                { year: "2020", event: "ZATCA e-invoicing compliance achieved" },
                { year: "2025", event: "Serving 5,500+ organizations nationwide" },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-gradient">{item.year}</div>
                  </div>
                  <div className="flex-1 glass-card p-6">
                    <p className="text-lg">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: "01", title: "Industry Leader", desc: "37+ years of proven expertise" },
                { num: "02", title: "Nationwide Presence", desc: "6 branches across Saudi Arabia" },
                { num: "03", title: "Trusted Partner", desc: "5,500+ satisfied clients" },
                { num: "04", title: "Certified Solutions", desc: "ZATCA compliant systems" },
                { num: "05", title: "24/7 Support", desc: "Always available for our clients" },
                { num: "06", title: "Innovation First", desc: "Cutting-edge technology solutions" },
              ].map((item) => (
                <div key={item.num} className="glass-card p-6 flex gap-4">
                  <div className="text-4xl font-bold text-gradient">{item.num}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.desc}</p>
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
