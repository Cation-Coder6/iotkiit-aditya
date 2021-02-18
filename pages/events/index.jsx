import EventExtra from "../../components/eventPage/EventExtra";
import EventHeader from "../../components/eventPage/EventHeader";
import Head from "next/head";
import UpcomingCard from "../../components/eventPage/UpcomingCard";
import FlagshipEvents from "../../components/eventPage/FlagshipEvents";

const Events = (props) => {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <EventHeader />
      {props.upcomingevents.length == 0 ? null : (
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
          <div className="container px-5 py-12 mx-auto flex flex-wrap">
            {props.upcomingevents.map((i, index) => (
              <UpcomingCard
                key={`upcoming-event-${i.id}`}
                index={index + 1}
                title={i.title}
                desc={i.desc}
                imgUrl={i.imgUrl}
                date={i.date}
                year={i.year}
                link={i.link}
              />
            ))}
          </div>
        </section>
      )}
      <FlagshipEvents
        main={props.flagshipevents.main}
        left={props.flagshipevents.left}
        right={props.flagshipevents.right}
      />
      <EventExtra extraevents={props.extraevents} />
    </>
  );
};

export async function getStaticProps(context) {
  const SERVER = "https://api.iotkiit.in";

  //Getting upcomingevents from Server
  const upcomingeventsRes = await fetch(
    `${SERVER}/upcoming-events?_sort=eventDate:ASC`
  );
  const upcomingeventsData = await upcomingeventsRes.json();
  upcomingeventsData.forEach(
    (v, i, arr) => (arr[i].imgUrl = SERVER + v.imgUrl.formats.thumbnail.url)
  );

  //Getting Extra events from Server
  const extraEventsRes = await fetch(
    `${SERVER}/extra-events?_sort=eventDate:ASC`
  );
  const extraEventsData = await extraEventsRes.json();
  extraEventsData.forEach(
    (v, i, arr) => (arr[i].imgUrl = SERVER + v.imgUrl.formats.thumbnail.url)
  );

  //Getting Flagship Events from Server
  const flagshipEventsRes = await fetch(`${SERVER}/flagship-events`);
  const flagshipEventsData = await flagshipEventsRes.json();
  flagshipEventsData.forEach(
    (v, i, arr) => (arr[i].imgUrl = SERVER + v.imgUrl.url)
  );

  const [main, left, right] = flagshipEventsData;

  return {
    props: {
      upcomingevents: upcomingeventsData,
      extraevents: extraEventsData,
      flagshipevents: {
        left: left,
        main: main,
        right: right,
      },
    },
    revalidate: 10,
  };
}

export default Events;
