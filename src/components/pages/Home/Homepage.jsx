// ASSETS
import profilePic from "./../../assets/placeholder.webp";

// STYLES
import "./Homepage.scss";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Homepage = () => {
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
          <h1>I'M ALEXANDRU-DANIEL.</h1>
          <h1>WEB DEVELOPER</h1>
        </div>
        <span className="homepage-text">
          I'm an Online Requirements/Networking Specialist with a passion for Front-End development. Dedicated to
          mastering React JS, JavaScript, CSS, and HTML, with a steadfast dream to become a full-time React developer.
        </span>

        <button>MORE ABOUT ME</button>
      </div>
    </div>
  );
};

export default Homepage;
