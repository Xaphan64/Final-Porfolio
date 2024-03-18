// ASSETS

// STYLES
import "./Portfolio.scss";

// LIBRARIES
import { useState } from "react";

// MISC

// COMPONENTS
import ProjectCard from "../../project/ProjectCard";
import { ProjectList } from "../../project/ProjectList";
import ProjectModal from "../../project/ProjectModal";

// CONFIGURATION
const Portfolio = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleProjectPress = (id) => {
    setSelectedProject(id);
    setModal(true);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-title">
        <h1>WORKS</h1>

        <div className="portfolio-front-title">
          <h2>MY</h2>
          <h2 className="colored-title">PORTFOLIO</h2>
        </div>
      </div>

      <div className="portfolio-projects">
        {ProjectList.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              name={project.name}
              image={project.image}
              id={project.id}
              handleProjectPress={handleProjectPress}
            />
          );
        })}

        {modal && <ProjectModal setModal={setModal} ProjectList={ProjectList} selectedProject={selectedProject} />}
      </div>
    </div>
  );
};

export default Portfolio;
