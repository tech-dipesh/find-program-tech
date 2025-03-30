import { Link } from "react-router-dom"
export default function Cta(){
  return (
    <>
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to help Me Grow and learning?</h2>
          <p className="text-blue-100 mb-8 text-xl">Join Us With Simply Signing Up!</p>
          <Link className="bg-white text-blue-600 px-12 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105" to="/signup">Get Started Free</Link>
        </div>
      </section>
    </>
  )
}