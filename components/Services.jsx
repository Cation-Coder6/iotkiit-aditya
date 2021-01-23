const Services = () => {
  return (
    <div id="services" className="relative">
      <img src="/images/circle.svg" className="absolute top-0 right-0 mt-64 hidden md:block" />
      <div className="container mx-auto px-6 py-32 relative">
        <h3 className="flex flex-col items-center text-4xl text-secondary font-bold">Services we offer <span className="bg-primary h-1 w-20 block mt-4" /></h3>
        <div className="flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 md:mt-0 lg:mt-0">
          <img src="/images/service1.svg" className="md:w-1/3" />
          <div className="md:ml-16 xl:ml-32">
            <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Social Media Marketing</h4>
            <p className="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
            <p className="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8">
          <div className="md:mr-16 xl:mr-32">
            <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Search Engine Optimization</h4>
            <p className="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
            <p className="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
          </div>
          <img src="/images/service2.svg" className="md:w-1/3" />
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <img src="/images/service3.svg" className="md:w-1/3" />
          <div className="md:ml-16 xl:ml-32">
            <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Increase your followers</h4>
            <p className="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
            <p className="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;