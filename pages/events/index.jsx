import EventAim from "../../components/EventAim";
import EventCard from "../../components/EventCard";
import Header from "../../components/Header";

const Events = () => {
  return (
    <div>
      <Header/>
      <EventAim />
      <div className="flex md:flex-row justify-between p-20 mx-5 sm:flex-col ">
        {[1, 2, 3].map((_) => (
          <EventCard />
        ))}
      </div>
    </div>
  );
};

export default Events;
