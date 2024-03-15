// ASSETS
import CloseIcon from "@mui/icons-material/Close";
import ArticleIcon from "@mui/icons-material/Article";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// STYLES

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const ProjectModal = ({ setModal, ProjectList, selectedProject }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const project = ProjectList.find((project) => project.id === selectedProject);

  if (!selectedProject) return null;

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="modal-background">
      <button onClick={() => setModal(false)}>
        <CloseIcon />
      </button>
      <div className="modal-container">
        <h1> {project.name} </h1>
        <div className="modal-details">
          <div className="modal-row">
            <div className="modal-item">
              <ArticleIcon />
              <span>
                Type:
                <h3>{project.type}</h3>
              </span>
            </div>

            <div className="modal-item">
              <CodeOffIcon />
              <span>
                Skills:
                <h3> {project.skills} </h3>
              </span>
            </div>
          </div>

          <div className="modal-row">
            <div className="modal-item">
              <GitHubIcon />
              <span>
                GitHub:
                <h3>
                  <a href={project.github} rel="noreferrer" target="_blank">
                    LINK HERE
                  </a>
                </h3>
              </span>
            </div>

            <div className="modal-item">
              <OpenInNewIcon />
              <span>
                Preview:
                <h3>
                  <a href={project.redirect} rel="noreferrer" target="_blank">
                    LINK HERE
                  </a>
                </h3>
              </span>
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${project.image})` }} className="modal-image" />
      </div>
    </div>
  );
};

export default ProjectModal;
