import EventExtra from "../../components/eventPage/EventExtra";
import EventHeader from "../../components/eventPage/EventHeader";
import Head from "next/head";
import UpcomingCard from "../../components/eventPage/UpcomingCard";
import FlagshipEvents from "../../components/eventPage/FlagshipEvents";

const Flagship = {
  Main: {
    "imgUrl": "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png",
    "name": "AWS CLOUD Training",
    "date": "Oct'20 - Dec'20",
    "desc": "An Online course on “AWS Cloud” with hands-on learning experience in the field of cloud computing.",
    "point1": "AWS Certified Trainer",
    "point2": "55 Hour Extensive Training",
    "point3": "Certification by SCE KIIT",
    "point4": "Internship Opportunity"
  },
  Left: {
    "imgUrl": "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png",
    "name": "Left Event",
    "date": "Oct'20 - Dec'20",
    "desc": "An Online course on “AWS Cloud” with hands-on learning experience in the field of cloud computing.",
    "point1": "AWS Certified Trainer",
    "point2": "55 Hour Extensive Training",
    "point3": "Certification by SCE KIIT",
    "point4": "Internship Opportunity"
  },
  Right: {
    "imgUrl": "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png",
    "name": "Right Event",
    "date": "Oct'20 - Dec'20",
    "desc": "An Online course on “AWS Cloud” with hands-on learning experience in the field of cloud computing.",
    "point1": "AWS Certified Trainer",
    "point2": "55 Hour Extensive Training",
    "point3": "Certification by SCE KIIT",
    "point4": "Internship Opportunity"
  }
}

const extraevents = [
  { imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", type: "Hackathon", name: "HahaLolLmao", desc: "Lorem ipsum Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." },
  { imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", type: "Hackathon", name: "HahaLolLmao", desc: "Lorem ipsum Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." },
  { imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", type: "Hackathon", name: "HahaLolLmao", desc: "Lorem ipsum Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." },
  { imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", type: "Hackathon", name: "HahaLolLmao", desc: "Lorem ipsum Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." },
  { imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", type: "Hackathon", name: "HahaLolLmao", desc: "Lorem ipsum Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." },
  { imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", type: "Hackathon", name: "HahaLolLmao", desc: "Lorem ipsum Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." },
  { imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", type: "Hackathon", name: "HahaLolLmao", desc: "Lorem ipsum Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." },
  { imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", type: "Hackathon", name: "HahaLolLmao", desc: "Lorem ipsum Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." },
]

const upcoming = [
  { title: "Aws Training", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", date: "24 Jul", year: "2021", link: "https://amazon.in" },
  { title: "Aws Training", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", date: "24 Jul", year: "2021", link: "https://amazon.in" },
  { title: "Aws Training", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", imgUrl: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png", date: "24 Jul", year: "2021", link: "https://amazon.in" }
]

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
          {upcoming.map((i,index) => (
            <UpcomingCard index={index+1} title={i.title} desc={i.desc} imgUrl={i.imgUrl} date={i.date} year={i.year} link={i.link} />
          ))}
        </div>
      </section>
      <FlagshipEvents main={Flagship.Main} left={Flagship.Left} right={Flagship.Right} />
      <EventExtra extraevents={extraevents} />
    </>
  );
};

export default Events;
