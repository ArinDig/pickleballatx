import Link from 'next/link'
import { GiPickle } from 'react-icons/gi'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors mb-4">
              <GiPickle className="text-3xl" />
              <span className="text-xl font-bold">Pickleball ATX</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your comprehensive guide to pickleball courts in Austin, Texas. Find free and paid courts,
              indoor and outdoor facilities, and everything you need to enjoy pickleball in ATX.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courts" className="hover:text-primary-400 transition-colors">
                  All Courts
                </Link>
              </li>
              <li>
                <Link href="/courts/free" className="hover:text-primary-400 transition-colors">
                  Free Courts
                </Link>
              </li>
              <li>
                <Link href="/courts/indoor" className="hover:text-primary-400 transition-colors">
                  Indoor Courts
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="https://www.atxdogparks.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  Austin Dog Parks
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Pickleball
                </Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-primary-400 transition-colors">
                  Submit a Court
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-primary-400 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Pickleball ATX. All rights reserved.</p>
          <p className="mt-2">
            Made with love for the Austin pickleball community
          </p>
        </div>
      </div>
    </footer>
  )
}

