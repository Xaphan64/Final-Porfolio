// ASSETS
import profilePic from "./../../assets/placeholder.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// STYLES
import "./Homepage.scss";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Homepage = ({ handleSwitchPage }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="homepage-container">
      <div className="homepage-image">
        <img src={profilePic} alt="profilePic" />
      </div>

      <div className="homepage-text-container">
        <div className="homepage-title">
          <h1 className="colored-title">I'M ALEXANDRU-DANIEL.</h1>
          <h1>WEB DEVELOPER</h1>
        </div>

        <span className="homepage-text">
          I'm an Online Requirements/Networking Specialist with a passion for Front-End development. Dedicated to
          mastering React JS, JavaScript, SASS, and HTML, with a dream to become a full-time React developer.
        </span>

        <div className="homepage-button" onClick={() => handleSwitchPage("about")}>
          <button>
            <span>MORE ABOUT ME</span>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
