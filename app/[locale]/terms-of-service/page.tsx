export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg text-text-secondary">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-text-secondary mb-6">
                By accessing our website and using our services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                prohibited from using our services.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Use License</h2>
              <p className="text-text-secondary mb-4">
                Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                <li>Modify or copy our materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Service Terms</h2>
              <p className="text-text-secondary mb-6">
                Our software and services are provided under specific license agreements. Terms include:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                <li>Software licenses are non-transferable</li>
                <li>Updates and support are provided as per service agreement</li>
                <li>Misuse of services may result in termination</li>
                <li>Client data remains the property of the client</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Disclaimer</h2>
              <p className="text-text-secondary mb-6">
                Our services are provided &quot;as is&quot;. Infosoft makes no warranties, expressed or implied, 
                and hereby disclaims all warranties, including without limitation, implied warranties of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Limitations</h2>
              <p className="text-text-secondary mb-6">
                In no event shall Infosoft or its suppliers be liable for any damages arising out of the use or 
                inability to use our services, even if Infosoft has been notified of the possibility of such damages.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Governing Law</h2>
              <p className="text-text-secondary mb-6">
                These terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Contact Information</h2>
              <p className="text-text-secondary">
                For questions about these Terms of Service, contact us at:<br />
                Email: info@infosoft.com.sa<br />
                Phone: 920012306
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
