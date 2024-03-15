// ASSETS

// STYLES

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const ProjectCard = ({ id, image, name, handleProjectPress }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="project-card-container" onClick={() => handleProjectPress(id)}>
      <div style={{ backgroundImage: `url(${image})` }} className="project-image">
        <h1> {name} </h1>
      </div>
    </div>
  );
};

export default ProjectCard;
