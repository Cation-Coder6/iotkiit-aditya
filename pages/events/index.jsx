import {
  CyanBottom,
  OrangeBottom,
  PurpleBottom,
} from "../../components/eventPage/BottomCards";
import RightArrow from "../../components/bullets/RightArrow";
import Tick from "../../components/bullets/Tick";
import EventExtra from "../../components/eventPage/EventExtra";
import EventHeader from "../../components/eventPage/EventHeader";
import Head from "next/head";
import UpcomingCard from "../../components/eventPage/UpcomingCard";

const EventListItemCenter = ({ point, ...rest }) => {
  return (
    <li className="flex items-center">
      <div className=" rounded-full p-2 fill-current text-green-700">
        <Tick />
      </div>
      <span className="text-gray-700 text-lg ml-3">{point}</span>
    </li>
  );
};

const EventListItem = ({ point, ...rest }) => {
  return (
    <li className="flex items-center">
      <div className=" rounded-full p-2 fill-current text-green-700">
        <RightArrow />
      </div>
      <span className="text-gray-700 text-lg ml-3">{point}</span>
    </li>
  );
};

const Events = () => {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <EventHeader />

      <section>
        <div className="container max-w-full mx-auto lg:py-0 md:py-0 pt-80 mt-4 sm:mt-2 px-6 ">
          <h1 className="text-center text-4xl text-black font-medium leading-snug uppercase tracking-wider">
            Upcoming Events
          </h1>
          <p className="text-center text-lg text-gray-700 mt-2 px-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>
        </div>
        <div class="container px-5 py-12 mx-auto flex flex-wrap">
          {[1, 2, 3].map((i) => (
            <UpcomingCard index={i} title="Aws Training" desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam." imgUrl="https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png" date="24 Jul" year="2021" link="https://amazon.in" />
          ))}
        </div>
      </section>

      <section>
      <div className="container max-w-full mx-auto lg:py-0 md:py-0 pt-80 mt-4 sm:mt-2 px-6 ">
        <h1 className="text-center text-4xl text-black font-medium leading-snug uppercase tracking-wider">
          Our Flagship Events
          </h1>
        <p className="text-center text-lg text-gray-700 mt-2 px-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
          </p>

        <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>
        <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-inner  md:-mr-4">
              <div className="text-sm object-center leading-none rounded-t-lg bg-white-200 text-black font-semibold uppercase pt-6 text-center tracking-wide">
                <img
                  className="w-20 h-16 inline-block"
                  src="https://iotkiit.in/hacktober/static/media/Icon.08e8a3d5.png"
                />
              </div>
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className=" text-2xl font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    HacktoberFest '20
                    </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">
                    October '20
                    </h2>
                    Hacktoberfest is a month-long celebration of open source
                    software run by Digital Ocean.
                  </div>
                <div className="flex flex-wrap mt-3 px-6">
                  <ul>
                    <EventListItem point={"325+ Closed Pull Requests"} />
                    <EventListItem point={"150+ Contributors"} />
                    <EventListItem point={"7 Participating Repos"} />
                  </ul>
                </div>
                <PurpleBottom />
              </div>
            </div>

            <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 rounded-lg shadow-lg ">
              <div className="bg-white text-black rounded-lg shadow-inner overflow-hidden">
                <div className="text-sm object-center leading-none rounded-t-lg bg-white-200 text-black font-semibold uppercase pt-3 text-center tracking-wide">
                  <img
                    className="w-26 h-24 inline-block"
                    src="https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png"
                  />
                </div>
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-2xl font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    AWS CLOUD Training
                    </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">
                    Oct'20 - Dec'20
                    </h2>
                    An Online course on “AWS Cloud” with hands-on learning
                    experience in the field of cloud computing.
                  </div>
                <div className="flex lg:pl-12 md:pl-2 sm:pl-12 pl-12 justify-start sm:justify-start mt-3">
                  <ul>
                    <EventListItemCenter point={"AWS Certified Trainer"} />
                    <EventListItemCenter
                      point={"55 Hour Extensive Training"}
                    />
                    <EventListItemCenter
                      point={"Certification by SCE KIIT"}
                    />
                    <EventListItemCenter point={"Internship Opportunity"} />
                  </ul>
                </div>
                <OrangeBottom />
              </div>
            </div>

            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
              <div className="bg-white text-black rounded-lg shadow-inner overflow-hidden">
                <div className="text-sm object-center leading-none rounded-t-lg bg-white-200 text-black font-semibold uppercase pt-6 text-center tracking-wide">
                  <img
                    className="w-16 h-16 inline-block"
                    src="/images/codemate.ico"
                  />
                </div>
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-2xl font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    CodeMate '21
                    </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">
                    January '21
                    </h2>
                    The Pair Programming Challenge on CodeChef Platform
                  </div>
                <div className="flex flex-wrap mt-3 px-6">
                  <ul>
                    <EventListItem point={"1200+ Registrations Pan-India"} />
                    <EventListItem point={"25K Worth of Prizes"} />
                    <EventListItem point={"Internship Opp. For Top Teams"} />
                  </ul>
                </div>
                <CyanBottom />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <EventExtra />
    </>
  );
};

export default Events;
