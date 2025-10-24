import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Pickleball ATX - Learn about the terms and conditions for using our website.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using Pickleball ATX ("the Website"), you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
          <p className="text-gray-700 mb-4">
            Permission is granted to temporarily download one copy of the materials on Pickleball ATX for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the Website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The materials on Pickleball ATX are provided on an 'as is' basis. Pickleball ATX makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
          <p className="text-gray-700 mb-4">
            In no event shall Pickleball ATX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Pickleball ATX, even if Pickleball ATX or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accuracy of Materials</h2>
          <p className="text-gray-700 mb-4">
            The materials appearing on Pickleball ATX could include technical, typographical, or photographic errors. Pickleball ATX does not warrant that any of the materials on its website are accurate, complete, or current. Pickleball ATX may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links</h2>
          <p className="text-gray-700 mb-4">
            Pickleball ATX has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Pickleball ATX of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
          <p className="text-gray-700 mb-4">
            Pickleball ATX may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of Texas and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Email: <a href="mailto:info@pickleballatx.org" className="text-green-600 hover:underline">info@pickleballatx.org</a></li>
            <li>Website: <a href="https://pickleballatx.org" className="text-green-600 hover:underline">pickleballatx.org</a></li>
          </ul>
        </section>

        <div className="border-t pt-6 mt-8">
          <p className="text-sm text-gray-500">
            These Terms of Service are effective as of {new Date().toLocaleDateString()} and were last updated on {new Date().toLocaleDateString()}.
          </p>
        </div>
      </div>
    </div>
  )
}
