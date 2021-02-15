const UpcomingCard = ({index,title,desc,link,date,year,imgUrl}) => {
  return (
        <div class="flex relative pt-10 pb-14 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{index}</div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-28 h-28 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <img class="w-18 h-14" src={imgUrl}>
              </img>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              
            <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 mt-1 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{date}</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">{year}</span>
          </div>
          <div class="flex-grow pl-6">
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">{title}</h1>
            <p class="leading-relaxed mb-2">{desc}</p>
            <a class="text-indigo-500 inline-flex items-center" href={link} target="_blank">Register Now
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </div>
        </div>
      </div>

            </div>
          </div>

  )
}

export default UpcomingCard;