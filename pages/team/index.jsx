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
      </Head>
    </div>
  )
}

const coordinators = [
  {name:"Alok Narayan", position:"Senior Coordinator", pictureUrl:"https://iotkiit.in/image/74c33a5aef0b0f7ff831da134a61bcbe.jpg", quote: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware." },
  {name:"Sambit Majhi", position:"Assistant Coordinator", pictureUrl:"https://iotkiit.in/image/18456ce8fb2842f48cfb4092c1d3ec83.jpeg", quote:"DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."},
  {name:"Neelanjan Manna", position:"Technical Coordinator", pictureUrl:"https://iotkiit.in/image/b1551b0c521065b9f6128ffbe62a03a5.jpeg", quote:"DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."},
  {name:"Amol Jain", position:"Administrative Lead", pictureUrl:"https://iotkiit.in/image/96d1c98ee26e96ae752cd6103d68a1a4.jpg", quote:"DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."},
  {name:"Sahil Kumar", position:"Administrative Lead", pictureUrl:"https://iotkiit.in/image/98b46a59bbd246204dd42e837adad7b8.jpg", quote:"DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."}
]

const members = [
  { name: "Sahil 1", position: "Web Team Lead", ringColor: 1, githubUrl: "https://github.com/SahilKr24", imageUrl: "https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" },
  { name: "Sahil 2", position: "Web Team Lead", ringColor: 2, githubUrl: "https://github.com/SahilKr24", imageUrl: "https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" },
  { name: "Sahil 3", position: "Web Team Lead", ringColor: 5, githubUrl: "https://github.com/SahilKr24", imageUrl: "https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" },
  { name: "Sahil 4", position: "Web Team Lead", ringColor: 4, githubUrl: "https://github.com/SahilKr24", imageUrl: "https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" },
  { name: "Sahil 5", position: "Web Team Lead", ringColor: 5, githubUrl: "https://github.com/SahilKr24", imageUrl: "https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" },
]

const Coordinators = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="1d4040f3-9f3e-4ac7-b117-7d4009658ced" x={0} y={0} width=".135" height=".30">
                    <circle cx={1} cy={1} r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)" width={52} height={24} />
              </svg>
              <span className="relative">Meet&nbsp;</span>
            </span>
          Our Coordinators<br />
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            “Of all the things I’ve done, the most vital is coordinating those who work with me and aiming their efforts at a certain goal.” – Walt Disney, founder of Disney
        </p>
        </div>
        <div className="flex flex-wrap -mt-4">
          {coordinators.map((coordinator,index)=>(
            coordinator.position=='Senior Coordinator'
            ?<CoordinatorMainCard name={coordinator.name} position={coordinator.position} pictureUrl={coordinator.pictureUrl} quote={coordinator.quote}/>
            :<CoordinatorCard name={coordinator.name} position={coordinator.position} pictureUrl={coordinator.pictureUrl} quote={coordinator.quote} />
          ))}
        </div>
      </div>
    </section>

  )
}

const Team = () => {
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
                <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                  <defs>
                    <pattern id="1d4040f3-9f3e-4ac7-b117-7d4009658ced" x={0} y={0} width=".135" height=".30">
                      <circle cx={1} cy={1} r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)" width={52} height={24} />
                </svg>
                <span className="relative">Meet&nbsp;</span>
              </span>
          the Dream Team
        </h2>
            <p className="text-base text-gray-700 md:text-lg">
              “A mentor is someone who sees more talent and ability within you, than you see in yourself, and helps bring it out of you.” - Bob Proctor
        </p>
          </div>
          <div className="flex flex-wrap -m-2">
            
            {members.sort((a, b) => parseFloat(b.ringColor) - parseFloat(a.ringColor)).map((member) => (
              <TeamMemberCard name={member.name} position={member.position} ringColor={member.ringColor} githubUrl={member.githubUrl} imageUrl={member.imageUrl} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Layout = () => {
  return (
    <div>
      <Heading />
      <TeamHeader />
      <Mentors />
      <Coordinators />
      <Team />
    </div>
  )
}

export default Layout;
