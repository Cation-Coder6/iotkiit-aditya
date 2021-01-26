

const TeamHeader = () => {
  return (
      <div className="w-full">
         <img src="/images/flower.svg" className="absolute lg:top-3/5 -z-1 top-1/2  right-5 lg:-mt-5 lg:left-14 lg:w-52 "  />
        <div className="flex bg-transparent" >
          <div className="flex items-center text-center lg:text-left px-18 md:px-12 py-12 lg:w-1/2">
            <div className="p-10">
              <h3 className="text-5xl sm:text-5xl leading-normal font-extrabold tracking-tight uppercase text-gray-900 pb-8 -mt-4">
                
                Meet &nbsp;the <div className="py-1"></div><span className="text-indigo-600">IOT LAB Team</span>
                
              </h3>
              <p className="mt-0 text-xl text-gray-500 md:text-xl pr-20 lg:pr-20 font-light leading-relaxed text-justify">Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilisation work.</p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
            <div className="h-full object-cover mb-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)' }}>
              <div className="h-full bg-black opacity-25" />
            </div>
          </div>
        </div>
      </div>

  )
}

export default TeamHeader;