import ProjectCard from "../../components/ProjectCard";
import ProjectHeader from "../../components/ProjectHeader";
import Head from "next/head";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Our Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProjectHeader />
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap justify-around">
          {[1, 2, 3, 4, 5, 6].map((_) => (
            <ProjectCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
