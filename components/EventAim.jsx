const Aim = () => {
  return (
    <div className="xl:w-1/2 md:w-1/2 p-4">
      <p className="flex items-center text-gray-600 mb-2">
        <span className="w-20 h-20 mr-2 inline-flex items-center justify-center  bg-blue-100 text-blue-500 mb-4 rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </span >
        <h1 className=" text-justify text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h1>

      </p>
      <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
    </div>
  )

}

const EventAim = () => {
  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row sm:flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-1 md:mb-0 items-center text-center">
        <div className="flex flex-wrap w-full mb-20 flex-col items-start text-left px-5">
          <h1 className=" text-6xl font-medium  title-font mb-2 text-gray-900">Crafted For</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
        </div>
        <div className="flex flex-wrap md:flex-row sm:flex-col -m-4">
        {[1, 2, 3, 4].map((_) => (
        <Aim />
      ))}
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-1/3 md:w-1/3  w-5/6 py-10">
        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
      </div>
    </div>

  )
}

export default EventAim;