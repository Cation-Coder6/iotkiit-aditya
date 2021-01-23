const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-blue-100">
      <div className="mt-16">
        <div className="bg-blue-500 pt-16 pb-16 md:pb-32 relative">
          <img src="/images/wave3.svg" className="w-full absolute bottom-full h-16 lg:h-auto object-cover object-top" />
          <div className="container px-6 mx-auto">
            <div className="md:w-2/3 mx-auto relative">
              <img src="/images/quote.svg" className="absolute top-0 left-0 sm:-ml-16 -mt-4" />
              <h3 className="text-white italic text-2xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.
            <strong className="block not-italic mt-6 text-primary">FRANK</strong>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center -mt-8 md:-mt-16 lg:-mt-24 relative">
          <a href="#">
            <img src="/images/avatar1.jpg" className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white" />
          </a>
          <a href="#">
            <img src="/images/avatar2.jpg" className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white" />
          </a>
          <a href="#">
            <img src="/images/avatar3.jpg" className="w-16 h-16 md:w-32 md:h-32 lg:w-48 lg:h-48 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white" />
          </a>
          <a href="#">
            <img src="/images/avatar4.jpg" className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white" />
          </a>
          <a href="#">
            <img src="/images/avatar5.jpg" className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white" />
          </a>
        </div>
      </div>
      <div id="contact" className="container mx-auto px-6 py-24">
        <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-12">I need more info! <span className="bg-primary h-1 w-20 block mt-4" /></h3>
        <div className="flex shadow-lg md:w-2/3 lg:w-1/2 xl:w-2/5 p-1 rounded-full overflow-hidden mx-auto bg-white">
          <input type="text" placeholder="Insert your mail" className="h-16 text-secondary-700 w-64 flex-1 px-8 text-lg focus:outline-none" />
          <button className="bg-primary w-32 uppercase font-bold text-secondary rounded-full">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;