const Hero = () => {
  return (
    <div className="relative overflow-hidden px-0 pb-0 ">
      <img src="/images/wave.svg" className="absolute top-0 left-2/5" />
      <div className="container mx-auto relative px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center pt-32 lg:pl-12 md:px-12 px-12 pb-16 md:pb-0 ">
          <div className="md:w-1/2 lg:w-1/3 mb-4 sm:mb-16 md:mb-0">

            <h1 className="text-6xl md:text-7xl font-bold text-secondary leading-tight mb-4 md:mb-4">
              <div>
                <span className="flex h-7 w-7 sm:-ml-0.5 -m-1.5">
                  <span className="animate-ping inline-flex h-full w-full rounded-full bg-primary-default opacity-75" />
                  <span className=" absolute inline-flex rounded-full h-7 w-7 bg-primary-default" />
                </span>IOT LAB,<br /> KIIT
              </div>
            </h1>
            <h2 className="text-2xl font-bold text-secondary-600 uppercase mb-12 ml-1">
              A Centre Of Excellence
            </h2>
            {/* <button
              href="#"
              className="bg-primary-default px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl text-secondary font-bold uppercase rounded bg-primary-default-400 hover:bg-primary-default-400 focus:outline-none"
            >
              More info
            </button> */}
          </div>
          <div className="mt-16 sm:mt-0 flex-1 flex justify-end">
            <img src="/images/hero.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
