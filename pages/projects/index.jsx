import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap justify-around">
      {[1, 2, 3, 4, 5, 6].map((_) => (
        <ProjectCard/>
      ))}
    </div>
    </div>
  );
};

export default Projects;
