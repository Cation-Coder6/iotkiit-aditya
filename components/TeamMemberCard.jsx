const TeamMemberCard = ({
  name,
  position,
  githubUrl,
  linkedinUrl,
  instaUrl,
  ...rest
}) => {
  return (
    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
      <div className="rounded overflow-hidden shadow-md bg-white">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img
              src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
              alt
              className="rounded-full object-cover h-full w-full shadow-md border-8 border-indigo-300"
            />
          </div>
        </div>
        <div className="px-6 mt-16">
          <div className="font-bold text-3xl text-center pb-1">{name}</div>
          <p className="text-gray-800 text-sm text-center">{position}</p>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a href="javascript:void(0)" className="mx-5">
              <div>
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
              </div>
            </a>
            <a href="javascript:void(0)" className="mx-5">
              <div>
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
              </div>
            </a>
            <a href="javascript:void(0)" className="mx-5">
              <div>
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
                  className="feather feather-instagram"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
