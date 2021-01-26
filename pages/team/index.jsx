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
      <Team />
    </div>
  )
}

export default Layout;
