const Process = () => {
  return (
    <div id="our-process" className="relative">
      <img
        src="/images/circle2.svg"
        className="hidden sm:block absolute top-0 left-0 -mx-32"
      />
      <div className="container mx-auto px-6 pt-0 pb-8 relative">
        <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-5">
          Our Process  <span className="bg-primary-default h-1 w-20 block mt-4" />
        </h3>
        <div className="flex flex-col md:flex-row xl:px-32 py-5">
          {/* TODO() make this a component */}
          <div className="flex flex-col items-center md:px-6 py-4 lg:px-12">
            <span className="text-6xl text-primary-default mb-4">1</span>
            <h4 className="font-semibold text-2xl text-secondary mb-2">
              What do we do?
            </h4>
            <p className=" lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed">
              Nature’s full of mysteries.
              We try to find the real-world problem statements and work
              passively to find their solution
            </p>
          </div>
          <div className="flex flex-col items-center md:px-6 py-4 lg:px-12">
            <span className="text-6xl text-primary-default mb-4">2</span>
            <h4 className="font-semibold text-2xl text-secondary mb-2">
              How are we unique?
            </h4>
            <p className="lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed">
              Extensive research and on-field
              analysis is the key factor of our success.
              Of course, we have other
              secret ingredients as well!
            </p>
          </div>
          <div className="flex flex-col items-center md:px-6 py-4 lg:px-12">
            <span className="text-6xl text-primary-default mb-4">3</span>
            <h4 className="font-semibold text-2xl text-secondary mb-2">
              How do we do it?
            </h4>
            <p className="lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed">
              Well, everyone is blessed with unique skills.
              We figure out the capability
              of each individual and make it work progressively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
