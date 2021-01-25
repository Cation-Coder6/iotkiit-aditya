import TeamMemberCard from "../../components/TeamMemberCard";

const TeamHeader = () => {
  return (
    <div className="py-24 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row">
        <div className="sm:w-8/12 order-last sm:order-first mx-10">
          <ul className="grid grid-cols-4 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">
            <li className="bg-gray-100 p-5 py-10 col-span-2 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg" /></a>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out"><a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">Mehdi Ahmadi</a></h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    web developer
              </p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 py-10 col-span-2 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" /></a>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out"><a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">Mehdi Ahmadi</a></h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    web developer
              </p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 py-10 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg" /></a>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out"><a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">Mehdi Ahmadi</a></h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    web developer
              </p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 py-10 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg" /></a>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out"><a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">Mehdi Ahmadi</a></h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    web developer
              </p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 py-10 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg" /></a>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out"><a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">Mehdi Ahmadi</a></h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    web developer
              </p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 py-10 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg" /></a>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out"><a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">Mehdi Ahmadi</a></h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    web developer
              </p>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
        <div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first align-middle sm:order-last">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            THE TEAM
      </p>
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            Meet Our <span className="text-indigo-600">Mentors</span>
          </h3>
          <p className="mt-4 text-md leading-7 text-gray-500 font-light">
            The Talented People Behind the Scenes of the Organization.
        <br /><br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
        </div>
      </div>
    </div>


  )
}

const Team = () => {
  return (

    <div>
      <TeamHeader />
      <div className="container flex justify-center mx-auto pt-16">
      <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 pb-5">
           Team <span className="text-indigo-600"> Web Dev</span>
          </h3>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto ">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <TeamMemberCard
              name={"Sahil Kumar"}
              position={"Administrative Coordinator"}
            />
            <TeamMemberCard 
              name={"Rohan Kakar"} 
              position={"Domain Lead: App Team"} />
              
            <TeamMemberCard
              name={"Ronit Kumar Nayak"}
              position={"Lead: Web Team"}
            />
            <TeamMemberCard
              name={"Ronit Kumar Nayak"}
              position={"Lead: Web Team"}
            />
            <TeamMemberCard
              name={"Ronit Kumar Nayak"}
              position={"Lead: Web Team"}
            />
            <TeamMemberCard
              name={"Ronit Kumar Nayak"}
              position={"Lead: Web Team"}
            />
            <TeamMemberCard
              name={"Ronit Kumar Nayak"}
              position={"Lead: Web Team"}
            />
            <TeamMemberCard
              name={"Ronit Kumar Nayak"}
              position={"Lead: Web Team"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
