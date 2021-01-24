import {
  CyanBottom,
  OrangeBottom,
  PurpleBottom,
} from "../../components/BottomCards";
import EventAim from "../../components/EventAim";
import Header from "../../components/Header";

const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 align-middle"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const EventListItem = ({ point, ...rest }) => {
  return (
    <li class="flex items-center">
      <div class=" rounded-full p-2 fill-current text-green-700">
        <RightArrow />
      </div>
      <span class="text-gray-700 text-lg ml-3">{point}</span>
    </li>
  );
};
const Events = () => {
  return (
    <main>
      <Header />
      <section>
        <div class="container max-w-full mx-auto lg:py-0 md:py-0 py-72 px-6 ">
          <h1 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
            Events
          </h1>
          <p class="text-center text-lg text-gray-700 mt-2 px-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

          <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div class="relative flex flex-col md:flex-row items-center">
              <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                <div class="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                  <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      Hobby
                    </h1>
                    <h2 class="text-sm text-gray-500 text-center pb-6">FREE</h2>
                    Stripe offers everything needed to run an online business at
                    scale. Get in touch for details.
                  </div>

                  <div class="flex flex-wrap mt-3 px-6">
                    <ul>
                      {[1, 2, 3].map((_) => (
                        <EventListItem point={"Rohan Is Great"} />
                      ))}
                    </ul>
                  </div>
                  <PurpleBottom />
                </div>
              </div>
              <div class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                <div class="text-sm leading-none rounded-t-lg bg-white text-black font-semibold uppercase py-4 text-center tracking-wide">
                  
                </div>
                <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    AWS CLOUD Training
                  </h1>
                  <h2 class="text-sm text-gray-500 text-center pb-6">
                    <span class="text-3xl">€19</span> /mo
                  </h2>
                  Stripe offers everything needed to run an online business at
                  scale. Get in touch for details.
                </div>
                <div class="flex pl-12 justify-start sm:justify-start mt-3">
                  <ul>
                    <li class="flex items-center">
                      <div class="rounded-full p-2 fill-current text-green-700">
                        <svg
                          class="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700 text-lg ml-3">No setup</span>
                    </li>
                    <li class="flex items-center">
                      <div class=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          class="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700 text-lg ml-3">
                        Hidden fees
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          class="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700 text-lg ml-3">Original</span>
                    </li>
                  </ul>
                </div>

                <OrangeBottom />
              </div>
              <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                <div class="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                  <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      Enterprise
                    </h1>
                    <h2 class="text-sm text-gray-500 text-center pb-6">
                      €39 /mo
                    </h2>
                    Stripe offers everything needed to run an online business at
                    scale. Get in touch for details.
                  </div>
                  <div class="flex flex-wrap mt-3 px-6">
                    <ul>
                      <li class="flex items-center">
                        <div class=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            class="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span class="text-gray-700 text-lg ml-3">Electric</span>
                      </li>
                      <li class="flex items-center">
                        <div class=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 align-middle"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span class="text-gray-700 text-lg ml-3">Monthly</span>
                      </li>
                      <li class="flex items-center">
                        <div class=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            class="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span class="text-gray-700 text-lg ml-3">No setup</span>
                      </li>
                    </ul>
                  </div>
                  <CyanBottom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EventAim />
    </main>
  );
};

export default Events;
