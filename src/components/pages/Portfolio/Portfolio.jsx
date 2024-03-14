// ASSETS

// STYLES
import ProjectCard from "../../project/ProjectCard";
import { ProjectList } from "../../project/ProjectList";
import "./Portfolio.scss";
// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Portfolio = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
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
          return <ProjectCard key={index} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
