import EventAim from "../../components/EventAim";
import EventCard from "../../components/EventCard";

const Events = () => {
  return (
    <div>
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
