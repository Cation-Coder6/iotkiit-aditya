const MapFooter = () => {
  return (
    <section className="text-gray-700 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameBorder={0} marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d935.2104779406211!2d85.8158259!3d20.3481485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f698e918e3440f1!2sSchool%20Of%20Computer%20Engineering%2C%20KIIT!5e0!3m2!1sen!2sin!4v1611431926272!5m2!1sen!2sin" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
          <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message" defaultValue={""} />
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  )
}

export default MapFooter;