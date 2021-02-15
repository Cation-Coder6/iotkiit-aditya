const ProjectCard = () => {
  return (
    <div className="max-w-sm min-w-sm w-full pt-6 pb-20 px-3 mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-44 p-4"
          style={{
            backgroundImage:
              "url(https://chaibarbbsr.com/assets/img/main_bg.jpg)",
          }}
        ></div>
        <div className="p-4">
          <p className="uppercase tracking-wide text-xs font-bold text-gray-700">
            Portfolio • Website
          </p>
          <p className="text-3xl text-gray-900">ChaiBar</p>
          <p className="text-gray-700"> KIIT Road</p>
        </div>
        <div className="flex p-4 border-t border-gray-300 text-gray-700">
          <div className="flex-1 inline-flex items-center px-1">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
            </svg>
            <p>
              <span className="text-gray-900 font-normal px-4 ">
                <a href="https://chaibarbbsr.com">chaibarbssr.com</a>
              </span>
            </p>
          </div>
        </div>
        <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
          <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
            Description:
          </div>
          <div className="flex items-center pt-2">
            {/* <div
              className="bg-cover bg-center w-10 h-10 rounded-full mr-3"
              style={{
                backgroundImage:
                  "url(https://avatars.githubusercontent.com/u/55389335?s=460&u=25493fd6332774036935e723c524c4ccbc0e1d0c&v=4)",
              }}
            ></div> */}
            <div>
              <p className="text-sm text-gray-700">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            </div>
          </div>
          {/* <div className="flex items-center pt-2">
            <div
              className="bg-cover bg-center w-10 h-10 rounded-full mr-3"
              style={{
                backgroundImage:
                  "url(https://avatars.githubusercontent.com/u/40962760?s=460&u=86bf54499b94442e8891e82b6d87f6f495f2dc8e&v=4)",
              }}
            ></div>
            <div>
              <p className="font-bold text-gray-900">Rohan Kakar</p>
              <p className="text-sm text-gray-700">@RKRohk</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
