// ASSETS
import profilePicture from "./../../assets/profilePicture.jpg";
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
        <img src={profilePicture} alt="profilePic" />
      </div>

      <div className="homepage-text-container">
        <div className="homepage-title">
          <h1 className="colored-title">I'M ALEXANDRU-DANIEL.</h1>
          <h1>WEB DEVELOPER</h1>
        </div>

        <span className="homepage-text">
          I'm a Freelance React developer specializing in building responsive and dynamic web applications. Skilled in
          React, JavaScript, SASS and API integration, with a focus on creating intuitive user interfaces and ensuring
          optimal performance aiming to transition into a full-time React developer.
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
