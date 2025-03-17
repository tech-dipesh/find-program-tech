export default function Feature(){
  return (
    <>
     <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose DevTools Hub?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A Open Source Tool where you will find real developement tools.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl cursor-pointer">Real-time Voting
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">User From the around the world can vote for any beloved Tech Tools, It also have the upvote and downvote System.</p>
              </div>
              <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl cursor-pointer">Open Source
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">If you find any tool that doesn't exist on our platform, simple you can Add here, also you can improve any mistakes on the previous tools.</p>
              </div>
              <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl cursor-pointer">Get new Tools Insights
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">As a software developer, you can't remember all of the tools that exist on the marketplace and their uses, simple came to our website and find relevent tools, that matched your requirements.</p>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}