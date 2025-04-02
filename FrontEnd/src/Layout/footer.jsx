import { Link } from "react-router-dom"
export default function Footer(){
  return (
    <>
<footer className="bg-[#101828] z-40 text-white mt-2">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      {/* About Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">DevList</h3>
        <p className="text-gray-200 text-sm leading-relaxed">
          Connecting developers with the perfect tools since 2025. Community, open, and transparent.
        </p>
        <div className="flex space-x-4">
          <Link className="hover:text-blue-200 transition-colors" to="https://github.com/tech-dipesh"><i className="fa-brands fa-github"></i>
          </Link>
          <Link className="hover:text-blue-200 transition-colors" to="https://wa.me/+9779745400194"><i className="fa-brands fa-whatsapp"></i></Link>
          <Link className="hover:text-blue-200 transition-colors" to="https://linkedin.com/in/dipeshacademy"><i className="fa-brands fa-linkedin"></i></Link>
        </div>
      </div>

      {/* Resources */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">Link</h4>
        <ul className="space-y-4">
          <p className="text-gray-200 hover:text-white transition-colors text-sm"><Link to="https://github.com/tech-dipesh/find-program-tech/blob/main/README.md">Documentation</Link></p>
          <p className="text-gray-200 hover:text-white transition-colors text-sm"><Link to="/">Blog (Coming Soon)</Link></p>
          <p className="text-gray-200 hover:text-white transition-colors text-sm"><Link to="/">Tutorials (Coming Soon)</Link></p>
        </ul>
      </div>

      {/* Contribute */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">Contribute</h4>
        <div className="space-y-2">
          <Link className="inline-flex items-center text-gray-200 hover:text-white transition-colors text-sm" to="https://github.com/tech-dipesh/find-program-tech/issues"><i className="fa-brands fa-github mr-3"></i></Link>
          <p className="text-gray-200 text-xs mt-4 leading-relaxed">
            Found an issue? Help us improve by submitting a PR or opening an issue.
          </p>
        </div>
      </div>

      {/* Legal */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">Miscellaneous</h4>
        <ul className="space-y-5">
          <p className="text-gray-200 hover:text-white transition-colors text-sm"><Link to="">Why? (Coming Soon)</Link></p>
          <p className="text-gray-200 hover:text-white transition-colors text-sm"><Link to="">Future Plan? (Coming Soon)</Link></p>
          <p className="text-gray-200 hover:text-white transition-colors text-sm"><Link to="">Help Me? (Coming Soon)</Link></p>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-blue-400/20 pt-8">
      <p className="text-center text-2xl text-blue-100">
        © 2024 DevList. Open source under MIT License. Made with <Link className="underline" to="https://linkedin.com/in/dipeshacademy">❤️ by developers worldwide.</Link>
      </p>
    </div>
  </div>
</footer>
    </>
  )
}