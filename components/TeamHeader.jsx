const TeamHeader = () => {
  return (
    <div className="w-full">
      <div className="flex bg-white" style={{ height: 400 }}>
        <div className="flex items-center text-center lg:text-left px-18 md:px-12 lg:w-1/2">
          <div>
            <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 pb-8 -mt-4">
              Meet The <span className="text-indigo-600"> Team</span>
            </h3>
            <p className="mt-2 text-sm text-gray-500 md:text-base">Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilisation work.</p>
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