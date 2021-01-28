import TeamHeader from "../../components/TeamHeader";
import Head from "next/head";
import Hovercard from "../../components/TeamHoverCard";
import TeamMemberCard from "../../components/TeamMemberCard";

const Heading = () => {
  return (
    <div>
      <Head>
        <title>Our Team</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  )
}

const CoordinatorMainCard = ({name,position,quote,pictureUrl,githubUrl,linkedinUrl,mailID}) =>{
  return (
    <div className="p-4 lg:w-screen">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={pictureUrl} />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-xl text-gray-900">{name}</h2>
          <h3 className="text-gray-500 text-lg mb-3">{position}</h3>
          <p className="mb-4">{quote}</p>
          <span className="inline-flex">
            <a className="text-gray-500 mx-3" href={githubUrl}>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
            </a>
            <a className="mx-3 text-gray-500" href={linkedinUrl}>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#626262"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <path d="M2 9h4v12H2z" />
                    <circle cx={4} cy={4} r={2} />
                  </g>
                  <rect
                    x={0}
                    y={0}
                    width={24}
                    height={24}
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
            </a>
            <a className="mx-3 mt-0.5 text-gray-500" href={mailID}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

const CoordinatorCard = ({name,position,quote,pictureUrl,githubUrl,linkedinUrl,mailID}) => {
  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={pictureUrl} />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-xl text-gray-900">{name}</h2>
          <h3 className="text-gray-500 text-lg mb-3">{position}</h3>
          <p className="mb-4">{quote}</p>
          <span className="inline-flex">
            <a className="text-gray-500 mr-3" href={githubUrl}>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
            </a>
            <a className="mx-3 text-gray-500" href={linkedinUrl}>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#626262"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <path d="M2 9h4v12H2z" />
                    <circle cx={4} cy={4} r={2} />
                  </g>
                  <rect
                    x={0}
                    y={0}
                    width={24}
                    height={24}
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
            </a>
            <a className="mx-3 mt-0.5 text-gray-500" href={mailID}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

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
        <CoordinatorMainCard name="Alok Narayan" position="Senior Coordinator" pictureUrl="https://iotkiit.in/image/74c33a5aef0b0f7ff831da134a61bcbe.jpg" quote="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. "/>
          <CoordinatorCard name="Sambit Majhi" position="Assistant Coordinator" pictureUrl="https://iotkiit.in/image/18456ce8fb2842f48cfb4092c1d3ec83.jpeg" quote="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. "/>
          <CoordinatorCard name="Neelanjan Manna" position="Technical Coordinator" pictureUrl="https://iotkiit.in/image/b1551b0c521065b9f6128ffbe62a03a5.jpeg" quote="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. "/>
          <CoordinatorCard name="Sahil Kumar" position ="Administrative Lead" pictureUrl="https://iotkiit.in/image/98b46a59bbd246204dd42e837adad7b8.jpg" quote="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. "/>
          <CoordinatorCard name="Amol Jain" position="Administrative Lead" pictureUrl="https://iotkiit.in/image/96d1c98ee26e96ae752cd6103d68a1a4.jpg" quote="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. "/>
        </div>
      </div>
    </section>

  )
}

const Mentors = () => {
  return (
    <div className="px-4 pb-16 pt-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 ml-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Mentorship Team
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
          our Mentors,<br /> Advisors and FIC
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          “A mentor is someone who sees more talent and ability within you, than you see in yourself, and helps bring it out of you.” - Bob Proctor
        </p>
      </div>
      <div className="grid gap-5 sm:gap-10 px-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        <Hovercard name="Dr. Samresh Mishra" position="Director, CSE" email="director.cse@kiit.ac.in" imageUrl="https://iotkiit.in/image/886fab2fb2e202badf4d4cd39d6f114a.jpg" />
        <Hovercard name="Dr. Samresh Mishra" position="Director, CSE" email="director.cse@kiit.ac.in" imageUrl="https://iotkiit.in/image/886fab2fb2e202badf4d4cd39d6f114a.jpg" />
        <Hovercard name="Dr. Samresh Mishra" position="Director, CSE" email="director.cse@kiit.ac.in" imageUrl="https://iotkiit.in/image/886fab2fb2e202badf4d4cd39d6f114a.jpg" />
        <Hovercard name="Dr. Samresh Mishra" position="Director, CSE" email="director.cse@kiit.ac.in" imageUrl="https://iotkiit.in/image/886fab2fb2e202badf4d4cd39d6f114a.jpg" />
        <Hovercard name="Dr. Samresh Mishra" position="Director, CSE" email="director.cse@kiit.ac.in" imageUrl="https://iotkiit.in/image/886fab2fb2e202badf4d4cd39d6f114a.jpg" />
        <Hovercard name="Dr. Samresh Mishra" position="Director, CSE" email="director.cse@kiit.ac.in" imageUrl="https://iotkiit.in/image/886fab2fb2e202badf4d4cd39d6f114a.jpg" />
        <Hovercard name="Dr. Samresh Mishra" position="Director, CSE" email="director.cse@kiit.ac.in" imageUrl="https://iotkiit.in/image/886fab2fb2e202badf4d4cd39d6f114a.jpg" />
        <Hovercard name="Dr. Samresh Mishra" position="Director, CSE" email="director.cse@kiit.ac.in" imageUrl="https://iotkiit.in/image/886fab2fb2e202badf4d4cd39d6f114a.jpg" />
      </div>
    </div>
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
          the Web Team
        </h2>
            <p className="text-base text-gray-700 md:text-lg">
              “A mentor is someone who sees more talent and ability within you, than you see in yourself, and helps bring it out of you.” - Bob Proctor
        </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <TeamMemberCard name="Sahil" position="Web Team Lead" ringColor={1} githubUrl="https://github.com/SahilKr24" imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
            <TeamMemberCard name="Sahil" position="Web Team Lead" ringColor={2} imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
            <TeamMemberCard name="Sahil" position="Web Team Lead" ringColor={3} imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
            <TeamMemberCard name="Sahil" position="Web Team Lead" ringColor={4} imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
            <TeamMemberCard name="Sahil" position="Web Team Lead" ringColor={5} imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
            <TeamMemberCard name="Sahil" position="Web Team Lead" imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
            <TeamMemberCard name="Sahil" position="Web Team Lead" ringColor={2} imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
            <TeamMemberCard name="Sahil" position="Web Team Lead" ringColor={3} imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
            <TeamMemberCard name="Sahil" position="Web Team Lead" ringColor={4} imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
            <TeamMemberCard name="Sahil" position="Web Team Lead" ringColor={5} imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
            <TeamMemberCard name="Sahil" position="Web Team Lead" imageUrl="https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4" />
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
