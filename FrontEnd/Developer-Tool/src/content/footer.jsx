export default function Footer(){
  return (
    <>
<footer className="bg-[#101828] text-white mt-2">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      {/* About Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">DevList</h3>
        <p className="text-gray-200 text-sm leading-relaxed">
          Connecting developers with the perfect tools since 2025. Community, open, and transparent.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-200 transition-colors">
           <i class="fa-brands fa-github"></i>
          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
          <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
          <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Resources */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">Resources</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Documentation</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Blog</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Tutorials</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">API Status</a></li>
        </ul>
      </div>

      {/* Contribute */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">Contribute</h4>
        <div className="space-y-2">
          <a href="#" className="inline-flex items-center text-gray-200 hover:text-white transition-colors text-sm">
          <i class="fa-brands fa-github mr-3"></i>
            GitHub Repository
          </a>
          <p className="text-gray-200 text-xs mt-4 leading-relaxed">
            Found an issue? Help us improve by submitting a PR or opening an issue.
          </p>
        </div>
      </div>

      {/* Legal */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">Legal</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Terms of Service</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Code of Conduct</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-blue-400/20 pt-8">
      <p className="text-center text-2xl text-blue-100">
        © 2024 DevList. Open source under MIT License. Made with <a className="underline" href="https://linkedin.com/in/dipeshacademy">❤️ by developers worldwide.</a>
      </p>
    </div>
  </div>
</footer>
    </>
  )
}