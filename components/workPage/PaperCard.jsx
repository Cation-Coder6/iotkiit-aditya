const BlogCard = () => {
    return (
<div className="p-8 max-w-sm">
  <div className="shadow-xl rounded-lg">
    <div style={{backgroundImage: 'url("https://miro.medium.com/max/489/1*_sNdxn9jmPiofZMhc0XJlw.png")'}} className="h-64 bg-gray-200 bg-cover bg-center rounded-lg flex items-center justify-center">
      
    </div>
    <div className="bg-white rounded-b-lg px-8">
      <div className="relative">
        <img className="right-0 w-16 h-16 rounded-full mr-4 shadow-lg absolute -mt-12" src="https://miro.medium.com/fit/c/96/96/1*swq-oysFCP7krdQiQuFKXQ.png" alt="Avatar of Jonathan Reinink" />
      </div>
      <div className="pt-8 pb-8">
        <h1 className="text-2xl font-medium text-gray-700 uppercase">roadmap-to-iot</h1>
        <p className="text-sm text-gray-600">From IOT LAB KIIT</p>
        <p className="mt-6 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a sem varius, fringilla sapien at, sollicitudin risus.</p>
        <div className="flex justify-around mt-8">
          <i className="">medium</i>
          <i className="">linkedin</i>
          <i className="">email</i>
        </div>
      </div>
    </div>
  </div>
</div>

 


    )
}

export default BlogCard;