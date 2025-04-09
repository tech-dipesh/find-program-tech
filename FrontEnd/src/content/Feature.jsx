export default function Feature(){
  return (
    <>
     <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How i build the Tool?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A Open Source Tool where you will find real developement tools.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl cursor-pointer">Gained experience working on a full-stack project.
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">This was my second full-stack project, built using the MERN stack..</p>
              </div>
              <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl cursor-pointer">Used React for the first time
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400"> I’m still a beginner on react, I’m building projects around React and TailwindCss for frontend.</p>
              </div>
              <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl cursor-pointer">Faced real-time development errors.
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">While many developers fear errors, I actually enjoy solving them — maybe that’s what makes me passionate about developmen</p>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}