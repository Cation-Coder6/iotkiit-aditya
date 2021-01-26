import TeamHeader from "../../components/TeamHeader";
import TeamMemberCard from "../../components/TeamMemberCard";
import Head from "next/head";

const Team = () => {
  return (
    <div>
      <Head>
        <title>Our Team</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TeamHeader />
      <div className="container flex justify-center mx-auto pt-16">
        <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 pb-16 -mt-4">
          Our <span className="text-indigo-600"> Mentors</span>
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
              position={"Domain Lead: App Team"}
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
