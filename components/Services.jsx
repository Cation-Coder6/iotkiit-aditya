import AppDevAnimation from "./animations/AppDevAnimation";
import WebDevAnimation from "./animations/WebDevAnimation";
import EventManagementAnimation from "./animations/EventManagementAnimation";

const Services = () => {
  return (
    <div id="services" className="relative lg:px-32 md:px-32 px-4 ">
      <img
        src="/images/circle.svg"
        className="absolute top-0 right-0 mt-64 hidden md:block"
      />
      <div className="container mx-auto px-6 pt-32 sm:pt-24 relative">
        <h3 className="flex flex-col items-center text-4xl pb-8 text-secondary font-bold">
          Services we offer <span className="bg-primary-default h-1 w-20 block mt-4" />
        </h3>
        <div className="flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 md:mt-0 lg:mt-0">
          <div className="md:w-1/3">
            <AppDevAnimation />
          </div>
          <div className="md:ml-16 xl:ml-32 ">
            <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4 py-2">
              App Development
            </h4>
            <p className="text-secondary-700 text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              imperdiet est tellus, et consequat sem sodales id. Quisque
              molestie et mauris efficitur lacinia.
            </p>
            <p className="text-secondary-700 text-lg">
              Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
              placerat fermentum tellus. Aliquam non felis eu dui fermentum
              auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8">
          <div className="md:mr-16 xl:mr-32">
            <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4 py-2">
              Web Solutions
            </h4>
            <p className="text-secondary-700 text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              imperdiet est tellus, et consequat sem sodales id. Quisque
              molestie et mauris efficitur lacinia.
            </p>
            <p className="text-secondary-700 text-lg">
              Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
              placerat fermentum tellus. Aliquam non felis eu dui fermentum
              auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.
            </p>
          </div>
          <div className="md:w-1/3">
            <WebDevAnimation />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <EventManagementAnimation />
          </div>
          <div className="md:ml-16 xl:ml-32">
            <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4 py-2">
              Event Management
            </h4>
            <p className="text-secondary-700 text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              imperdiet est tellus, et consequat sem sodales id. Quisque
              molestie et mauris efficitur lacinia.
            </p>
            <p className="text-secondary-700 text-lg">
              Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
              placerat fermentum tellus. Aliquam non felis eu dui fermentum
              auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
