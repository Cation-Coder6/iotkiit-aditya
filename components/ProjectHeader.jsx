import ProjectAnimation from "./animations/ProjectAnimation";

const ProjectHeader = () => {
  return (
    <div className="flex flex-wrap md items-center h-2/3">
      <div className="bg-white w-full md:w-1/2 h-2/3">
        <div className="mx-12 sm:pl-6 md:mx-12 md:pl-0 lg:ml-40 lg:mr-12">
          <h1 className="text-6xl font-bold mt-16">Our Work</h1>
          <div className="flex mt-10 font-light text-gray-500">
            <div className="pr-4">
              <span className="uppercase">Projects</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">25</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Papers</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">17</p>
            </div>
            {/* <div className="pr-4">
              <span className="uppercase"></span>
              <p className="text-2xl text-gray-900 font-semibold pt-2"></p>
            </div> */}
          </div>
          <div className="description w-full sm:w-full md:w-2/3 mt-12 text-gray-500 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
        </div>
      </div>
      <div className="bg-transparent w-full sm:w-full md:w-1/2 h-2/3 max-w-2xl">
        <div className=" pt-20 flex flex-col justify-center p-10">
          <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
            <div className="absolute inset-0 -m-2 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 rounded-3xl sm:rounded-3xl" />
            <div className="relative bg-white shadow-2xl m-1.5 rounded-3xl sm:rounded-3xl">
              <div className="flex items-center justify-start pt-6 pl-6">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-2" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2" />
              </div>
              <div className="px-20 py-6 sm:mt-0">
                <div className="flex flex-col-reverse md:flex-row items-center mx-20">
                  <div className="sm:m-1/2 sm:-ml-16 md:-ml-0">
                  <span className="text-xl text-gray-900  mb-1 sm:-ml-10">App Title</span><br />
                  <span className="text-sm text-gray-600  mb-1 sm:-ml-10">Workflow Lorem</span>
                  <div className="sm:-ml-0 md:-ml-28 lg:-ml-0 ">
                  <ProjectAnimation />
                  </div>
                    <div class="lg:ml-5 text-left">
                      <bottom type="button" class="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                      </bottom>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProjectHeader;

