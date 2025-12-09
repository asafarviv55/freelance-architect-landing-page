export default function Footer() {
  return (
    <footer className="px-6 py-16 sm:px-8 lg:px-12 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  MVP Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SaaS Platforms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Architecture
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Insights on product architecture and scaling startups.</p>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white text-sm placeholder-gray-500 border border-gray-800 focus:border-gray-700 outline-none"
            />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Senior Software Architect. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
