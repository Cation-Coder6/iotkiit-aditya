const EventExtra = ({ extraevents }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Extra Events
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {extraevents.map((i) => (
            <div key={i.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={i.imgUrl}
                  alt="content"
                />
                <div className="tracking-widest text-indigo-900 text-sm font-medium mb-1 title-font">
                  {i.type}
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-1">
                  <a rel="noopener noreferrer" target="_blank" href={i.link}>
                    <span className="text-sm align-middle ">🌐&emsp;</span>
                    {i.name}
                  </a>
                </h2>
                <h3 className="tracking-normal text-indigo-900 text-sm font-medium mb-3 title-font">
                  📅&emsp;{i.date}
                </h3>
                <p className="leading-relaxed text-base">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventExtra;
