import EventCard from "../../components/EventCard";

const Events = () => {
  return (
    <div className="flex md:flex-row justify-between p-20 sm:flex-col">
      {[1, 2, 3].map((_) => (
        <EventCard />
      ))}
    </div>
  );
};

export default Events;
