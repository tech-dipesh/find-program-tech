import Software1 from "../assets/Software1.jpg"
import Software2 from "../assets/Software2.jpg"
export default function Testimonial(){
  return (
    <>
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Developers</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Join thousands of developers who found their perfect tools for the tool tracking, and new knowlede on the new tools.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-600 dark:text-gray-300 mb-6">"It just build we can say that it is not perfect but with everyone helps, we can make the perfect tool."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 overflow-hidden rounded-full rounded-full bg-gray-200 dark:bg-gray-700 mr-4"><img src={Software2} alt="Senior Software Developer" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">John Developer</h4>
                    <p className="text-gray-500 dark:text-gray-400">Senior Engineer</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-600 dark:text-gray-300 mb-6">"I forget everytime what tools are there exist with what i am trying to learning i am simple came to this platform, and simple look at it."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 mr-4"><img className="rounded-4xl" src={Software1} alt="Software develeloper junior" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Random Nepal</h4>
                    <p className="text-gray-500 dark:text-gray-400">Junior Developer</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}