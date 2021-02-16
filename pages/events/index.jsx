import EventExtra from "../../components/eventPage/EventExtra";
import EventHeader from "../../components/eventPage/EventHeader";
import Head from "next/head";
import UpcomingCard from "../../components/eventPage/UpcomingCard";
import FlagshipEvents from "../../components/eventPage/FlagshipEvents";


const Main = {
  "imgUrl": "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png",
  "name":"AWS CLOUD Training",
  "date":"Oct'20 - Dec'20",
  "desc":"An Online course on “AWS Cloud” with hands-on learning experience in the field of cloud computing.",
  "point1":"AWS Certified Trainer",
  "point2":"55 Hour Extensive Training",
  "point3":"Certification by SCE KIIT",
  "point4":"Internship Opportunity"
}

const Left = {
  "imgUrl": "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png",
  "name":"Left Event",
  "date":"Oct'20 - Dec'20",
  "desc":"An Online course on “AWS Cloud” with hands-on learning experience in the field of cloud computing.",
  "point1":"AWS Certified Trainer",
  "point2":"55 Hour Extensive Training",
  "point3":"Certification by SCE KIIT",
  "point4":"Internship Opportunity"
}

const Right = {
  "imgUrl": "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png",
  "name":"Right Event",
  "date":"Oct'20 - Dec'20",
  "desc":"An Online course on “AWS Cloud” with hands-on learning experience in the field of cloud computing.",
  "point1":"AWS Certified Trainer",
  "point2":"55 Hour Extensive Training",
  "point3":"Certification by SCE KIIT",
  "point4":"Internship Opportunity"
}

const Events = () => {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <EventHeader />

      <section>
        <div className="container max-w-full mx-auto lg:py-0 md:py-0 pt-48 mt-48 sm:mt-4 px-6 ">
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


      <FlagshipEvents main={Main} left={Left} right={Right} />

      <EventExtra />
    </>
  );
};

export default Events;
