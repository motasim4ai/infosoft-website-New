import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="text-sm font-semibold text-primary mb-4">Compliance</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ZATCA Phase 2: What Your Business Needs to Know
            </h1>
            <div className="flex items-center gap-6 text-text-secondary">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Infosoft Team
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                January 15, 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="glass-card p-8 mb-8">
              <div className="text-8xl text-center mb-6">📄</div>
            </div>

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Saudi Arabia&apos;s ZATCA (Zakat, Tax and Customs Authority) has mandated e-invoicing for all businesses, 
                and Phase 2 implementation is now underway. Understanding these requirements is crucial for maintaining 
                compliance and avoiding penalties.
              </p>

              <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
                What is ZATCA Phase 2?
              </h2>
              <p>
                Phase 2, also known as the Integration Phase, requires businesses to integrate their e-invoicing 
                solutions with ZATCA&apos;s platform. This goes beyond Phase 1&apos;s generation requirements to include 
                real-time reporting and validation of invoices.
              </p>

              <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
                Key Requirements
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Real-time integration with ZATCA platform</li>
                <li>Cryptographic stamping of invoices</li>
                <li>Sequential invoice numbering</li>
                <li>QR code generation with specific data fields</li>
                <li>XML format compliance (UBL 2.1)</li>
              </ul>

              <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
                How Infosoft Can Help
              </h2>
              <p>
                All Infosoft products are fully compliant with ZATCA Phase 2 requirements. Our e-invoicing solution 
                includes automatic integration, real-time validation, and comprehensive reporting features.
              </p>

              <p>
                Contact our team today to ensure your business is ready for ZATCA Phase 2 compliance.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Button asChild size="lg">
                <Link href="/request-demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
