import Footer from "../Layout/footer";
import MainNavbar from "../Layout/mainNavbar";

export default function ContactForm() {
  return (
    <>
    <MainNavbar/>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
      <div className="text-center mb-8 mt-20">
          <div className="mb-4 inline-block p-4 bg-indigo-50 rounded-full w-12 h-12 ">
            <i className="fa-solid fa-envelope text-xl text-indigo-600"></i>
          </div>
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-2">Please note that i am solo and have the work lot to do in daily basis, but i will try to reply asap;</p>
      </div>

      <form className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address (Optional)
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="john@gmail.com"
              />
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject (Optional)
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Select a subject</option>
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Partnership Opportunity</option>
              <option>Feedback/Suggestions</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message *
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
              placeholder="Type your message here..."
              required
              maxLength={500}
            />
          </label>
          <p className="text-right text-sm text-gray-500 mt-1">Max 500 characters</p>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
    <Footer/>
    </>
  )
}