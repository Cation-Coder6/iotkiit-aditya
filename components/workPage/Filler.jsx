const Filler = () => {
  return (
    <div>
      <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src="/images/agreement.svg"
              alt="covid-19 help"
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            />
          </div>
          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Business Boost V1.0
            </h2>
            <p className="pt-4 pb-6 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              We aimed for providing business, that we hit hard by the pandemic,
              an online platform to showcase themselves
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary-default rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Portfolio Websites
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary-default rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Inventory and Kitchen Management Apps
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary-default rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                No Development Charges
              </li>
            </ul>
          </div>
        </div>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Research Work
            </h2>
            <p className="pt-4 pb-6 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              We explore the potential of crowdsourcing and Internet of Things
              for multidisciplinary research, aiming for
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary-default rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Improvement in Quality of Life
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary-default rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Helping differently-abled people
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary-default rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Solving Real-World Problems
              </li>
            </ul>
          </div>
          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src="/images/research.svg"
              alt="research points"
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filler;
