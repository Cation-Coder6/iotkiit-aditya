const Hero = () => {
  return (
    <div className="relative overflow-hidden px-6 pb-6">
      <img src="/images/wave.svg" className="absolute top-0 left-2/5" />
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row items-center pt-32 pb-16 md:pb-0 ">
          <div className="md:w-1/2 p-24 lg:w-1/3 mb-4 sm:mb-16 md:mb-0">
            <h2 className="text-xl font-bold text-secondary-600 uppercase mb-2">
              Lorem ipsum dolor
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6 md:mb-10">
              Social Network Management
            </h1>
            <button
              href="#"
              className="bg-primary px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl text-secondary font-bold uppercase rounded bg-primary-400 hover:bg-primary-400 focus:outline-none"
            >
              More info
            </button>
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
