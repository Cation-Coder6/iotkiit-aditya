import ProjectAnimation from "./animations/ProjectAnimation";

const ProjectHeader = () => {
  return (
    <div className="min-w-full pt-20 flex flex-col justify-center p-10">
      <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
        <div className="absolute inset-0 -m-2 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 rounded-3xl sm:rounded-3xl" />
        <div className="relative bg-white shadow-2xl m-1.5 rounded-3xl sm:rounded-3xl">
          <div className="flex items-center justify-start pt-6 pl-6">
            <span className="w-3 h-3 bg-red-400 rounded-full mr-2" />
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
            <span className="w-3 h-3 bg-green-400 rounded-full mr-2" />
          </div>
          <div className="px-20 py-6 sm:mt-8">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="md:mr-16 xl:mr-32">
                <div className="lg:2/6 xl:w-2/4 mt-10 sm:mt-20 lg:mt-0 lg:ml-16 text-left">
                  <div className="text-4xl mt-4 sm:mt-0 sm:text-5xl uppercase font-semibold text-gray-900 leading-none">Our Work<br/><span>&amp; Projects</span></div>
                  <div className="mt-8 -mb-2 text-xl font-light text-true-gray-500 antialiased">A better experience for yout attendees and less stress yout team.</div>
                </div>
                <div class="mt-6 lg:mt-20 lg:ml-20 text-left">
            <bottom type="button" class="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </bottom>
          </div>
              </div>
              <div className="md:w-1/3 -mt-16">
                <ProjectAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectHeader;

