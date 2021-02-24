import TeamHeader from "../../components/teamPage/TeamHeader";
import Head from "next/head";
import TeamMemberCard from "../../components/teamPage/TeamMemberCard";
import CoordinatorCard from "../../components/teamPage/CoordinatorCard";
import CoordinatorMainCard from "../../components/teamPage/CoordinatorMainCard";
import Mentors from "../../components/teamPage/Mentors";

const Heading = () => {
  return (
    <div>
      <Head>
        <title>Team</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://iotkiit.in"></meta>
        <meta property="og:title" content="IoT Lab KiiT"></meta>
        <meta
          property="og:description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="og:image" content="/images/logo_small.webp"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://iotkiit.in"></meta>
        <meta property="twitter:title" content="IoT Lab KiiT"></meta>
        <meta
          property="twitter:description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="twitter:image" content="/images/logo_small.webp"></meta>
      </Head>
    </div>
  );
};

const Coordinators = ({ coordinators }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="max-w-xl mb-10 ml-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Management Team
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x={0}
                    y={0}
                    width=".135"
                    height=".30"
                  >
                    <circle cx={1} cy={1} r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width={52}
                  height={24}
                />
              </svg>
              <span className="relative">Meet Our&nbsp;</span>
            </span>
            Coordinators
          </h2>
          <p className="text-base font-light text-gray-700 md:text-lg">
            “Of all the things I’ve done, the most vital is coordinating those
            who work with me and aiming their efforts at a certain goal.” <br />
            <span className="font-bold tracking-wider">– Walt Disney</span>
          </p>
        </div>
        <div className="flex flex-wrap -mt-4">
          {coordinators.map((coordinator, index) =>
            coordinator.position == "Senior Coordinator" ? (
              <CoordinatorMainCard
                key={`coordinator-card-${coordinator.id}`}
                name={coordinator.name}
                position={coordinator.position}
                pictureUrl={coordinator.pictureUrl.url}
                quote={coordinator.quote}
                githubUrl={coordinator.githubUrl}
                linkedinUrl={coordinator.linkedinUrl}
                mailID={coordinator.mailID}
              />
            ) : (
              <CoordinatorCard
                key={`coordinator-card-${coordinator.id}`}
                name={coordinator.name}
                position={coordinator.position}
                pictureUrl={coordinator.pictureUrl.url}
                quote={coordinator.quote}
                githubUrl={coordinator.githubUrl}
                linkedinUrl={coordinator.linkedinUrl}
                mailID={coordinator.mailID}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

const Team = ({ members }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="max-w-xl mb-10 ml-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Core Team
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                      x={0}
                      y={0}
                      width=".135"
                      height=".30"
                    >
                      <circle cx={1} cy={1} r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                    width={52}
                    height={24}
                  />
                </svg>
                <span className="relative">Meet&nbsp;</span>
              </span>
              the Dream Team
            </h2>
            <p className="text-base text-gray-700 md:text-lg font-light ">
              “A mentor is someone who sees more talent and ability within you,
              than you see in yourself, and helps bring it out of you.” <br />
              <span className="font-bold tracking-wider">- Bob Proctor</span>
            </p>
          </div>
          <div className="flex flex-wrap -m-2 ">
            {members
              .sort((a, b) => parseFloat(b.ringColor) - parseFloat(a.ringColor))
              .map((member) => (
                <TeamMemberCard
                  key={`team-member-card-${member.id}`}
                  name={member.name}
                  position={member.position}
                  ringColor={member.ringColor}
                  githubUrl={member.githubUrl}
                  linkedinUrl={member.linkedinUrl}
                  mailID={member.mailID}
                  imageUrl={member.imageUrl.url}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Layout = (props) => {
  return (
    <div>
      <Heading />
      <TeamHeader />
      <Mentors mentors={props.mentors} />
      <Coordinators coordinators={props.coordinators} />
      <Team members={props.members} />
    </div>
  );
};

export async function getStaticProps(context) {
  const SERVER = "https://api.iotkiit.in";

  //Getting Coordinators from Server
  const coordinatorsRes = await fetch(`${SERVER}/coordinators?_sort=index:ASC`);
  const coordinatorsData = await coordinatorsRes.json();
  coordinatorsData.forEach(
    (v, i, arr) =>
      (arr[i].pictureUrl.url = SERVER + v.pictureUrl.formats.small.url)
  );

  //Getting Members from Server
  const membersRes = await fetch(`${SERVER}/members`);
  let membersData = await membersRes.json();
  membersData = membersData.sort(() => Math.random() - 0.5);
  membersData.forEach(
    (v, i, arr) =>
      (arr[i].imageUrl.url =
        SERVER + (v.imageUrl?.formats?.small?.url ?? v.imageUrl?.url))
  );

  //Getting Mentors from Server
  const mentorsRes = await fetch(`${SERVER}/mentors?_sort=index:ASC`);
  const mentorsData = await mentorsRes.json();
  mentorsData.forEach(
    (v, i, arr) =>
      (arr[i].imageUrl.url =
        SERVER + (v.imageUrl?.formats?.small?.url ?? v.imageUrl?.url))
  );

  return {
    props: {
      coordinators: coordinatorsData,
      members: membersData,
      mentors: mentorsData,
    },
    revalidate: 600,
  };
}
export default Layout;
