const Process = () => {
  return (
    <div id="our-process" className="relative">
      <img
        src="/images/circle2.svg"
        className="hidden sm:block absolute top-0 left-0 -mx-32"
      />
      <div className="container mx-auto px-6 pt-6 pb-12 relative">
        <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-5">
          Our Process  <span className="bg-primary-default h-1 w-20 block mt-4" />
        </h3>
        <div className="flex flex-col md:flex-row xl:px-32 py-5">
          {/* TODO() make this a component */}
          <div className="flex flex-col items-center md:px-6 py-4 lg:px-12">
            <span className="text-6xl text-primary-default mb-4">1</span>
            <h4 className="font-semibold text-2xl text-secondary mb-2">
              Analysis
            </h4>
            <p className=" lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              imperdiet est
            </p>
          </div>
          <div className="flex flex-col items-center md:px-6 py-4 lg:px-12">
            <span className="text-6xl text-primary-default mb-4">2</span>
            <h4 className="font-semibold text-2xl text-secondary mb-2">
              Execution
            </h4>
            <p className="lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              imperdiet est
            </p>
          </div>
          <div className="flex flex-col items-center md:px-6 py-4 lg:px-12">
            <span className="text-6xl text-primary-default mb-4">3</span>
            <h4 className="font-semibold text-2xl text-secondary mb-2">
              Success
            </h4>
            <p className="lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              imperdiet est
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
