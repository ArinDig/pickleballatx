import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Pickleball ATX - Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
          <p className="text-gray-700 mb-4">
            We may collect personal information when you:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Contact us through our contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Use our services</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
          <p className="text-gray-700 mb-4">
            We automatically collect certain information when you visit our website:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website</li>
            <li>Device information</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-3">Cookies and Tracking Technologies</h3>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Improve website functionality</li>
            <li>Analyze website traffic</li>
            <li>Personalize content</li>
            <li>Serve relevant advertisements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries</li>
            <li>Send newsletters and updates (with your consent)</li>
            <li>Analyze website usage and performance</li>
            <li>Serve personalized advertisements</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          
          <h3 className="text-xl font-medium text-gray-800 mb-3">Google AdSense</h3>
          <p className="text-gray-700 mb-4">
            We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your visits to our site and other sites on the Internet. You can opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google Ad Settings
            </a>.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-3">Google Analytics</h3>
          <p className="text-gray-700 mb-4">
            We use Google Analytics to analyze website traffic. Google Analytics uses cookies to collect information about your use of our website. You can opt out of Google Analytics by installing the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>To trusted service providers who assist us in operating our website</li>
            <li>When required by law</li>
            <li>To protect our rights and safety</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date."
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Email: <a href="mailto:info@pickleballatx.org" className="text-green-600 hover:underline">info@pickleballatx.org</a></li>
            <li>Website: <a href="https://pickleballatx.org" className="text-green-600 hover:underline">pickleballatx.org</a></li>
          </ul>
        </section>

        <div className="border-t pt-6 mt-8">
          <p className="text-sm text-gray-500">
            This Privacy Policy is effective as of {new Date().toLocaleDateString()} and was last updated on {new Date().toLocaleDateString()}.
          </p>
        </div>
      </div>
    </div>
  )
}
