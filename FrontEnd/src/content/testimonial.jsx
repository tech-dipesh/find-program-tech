import Software1 from "../assets/software1.jpg"
import Software2 from "../assets/software2.jpg"
export default function Testimonial(){
  return (
    <>
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Build a sample Project</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Join with me for building a project for all of us develeloper.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-600 dark:text-gray-300 mb-6">"Be First to feature here"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 mr-4"><img src="https://i.postimg.cc/K8wWMRWj/image.png" alt="Senior Software Developer" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">"Your Respected Name"</h4>
                    <p className="text-gray-500 dark:text-gray-400">Senior Engineer</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-600 dark:text-gray-300 mb-6">"You could be here"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 mr-4"><img className="rounded-4xl" src="https://i.postimg.cc/K8wWMRWj/image.png" alt="Software develeloper junior" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">"Your Respected Name"</h4>
                    <p className="text-gray-500 dark:text-gray-400">"Junior Developer"</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}