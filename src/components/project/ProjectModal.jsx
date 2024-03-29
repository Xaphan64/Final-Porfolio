// ASSETS
import CloseIcon from "@mui/icons-material/Close";
import ArticleIcon from "@mui/icons-material/Article";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// STYLES

// LIBRARIES
import { useEffect, useRef } from "react";

// MISC

// COMPONENTS

// CONFIGURATION
const ProjectModal = ({ setModal, ProjectList, selectedProject }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  let menuRef = useRef();
  const isMobile = window.matchMedia("(max-width: 991px")?.matches;
  const project = ProjectList.find((project) => project.id === selectedProject);

  // if (!selectedProject) return null;

  // STATE CONSTANTS

  // LIFE CYCLE
  useEffect(() => {
    if (!isMobile) {
      let handler = (event) => {
        if (!menuRef.current.contains(event.target)) {
          setModal(false);
        }
      };

      document.addEventListener("mousedown", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
    // eslint-disable-next-line
  }, []);

  // EVENT HANDLERS
  return (
    <div className="modal-background">
      <button onClick={() => setModal(false)}>
        <CloseIcon />
      </button>
      <div className="modal-container" ref={menuRef}>
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
              <h3>
                <a href={project.github} rel="noreferrer" target="_blank">
                  Github
                </a>
              </h3>
            </div>

            <div className="modal-item">
              <OpenInNewIcon />
              <h3>
                <a href={project.redirect} rel="noreferrer" target="_blank">
                  Preview
                </a>
              </h3>
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${project.image})` }} className="modal-image" />
      </div>
    </div>
  );
};

export default ProjectModal;
