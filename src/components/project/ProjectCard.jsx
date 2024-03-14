// ASSETS

// STYLES

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const ProjectCard = ({ image, name }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="project-card-container">
      <div style={{ backgroundImage: `url(${image})` }} className="project-image" />
      <h1> {name} </h1>
    </div>
  );
};

export default ProjectCard;
