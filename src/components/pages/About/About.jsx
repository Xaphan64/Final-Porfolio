// ASSETS
import cv from "../../assets/CV_Alexandru-Daniel_Sarbu_2024.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

// STYLES
import "./About.scss";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const About = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>RESUME</h1>
        <div className="about-front-title">
          <h2>ABOUT</h2>
          <h2 className="colored-title">ME</h2>
        </div>
      </div>

      <div className="about-info">
        <h2>PERSONAL INFOS</h2>

        <div className="about-details">
          <div className="about-details-row">
            <span className="about-details-item">
              First Name :<span className="about-details-text"> Alexandru-Daniel</span>
            </span>

            <span className="about-details-item">
              Last Name :<span className="about-details-text"> Sarbu</span>
            </span>

            <span className="about-details-item">
              Age :<span className="about-details-text"> 29 Years</span>
            </span>

            <span className="about-details-item">
              Nationality :<span className="about-details-text"> Romanian</span>
            </span>
          </div>

          <div className="about-details-row">
            <span className="about-details-item">
              Address :<span className="about-details-text"> Bucharest, Romania</span>
            </span>

            <span className="about-details-item">
              Phone :<span className="about-details-text"> +40 742 754 878</span>
            </span>

            <span className="about-details-item">
              Email :<span className="about-details-text"> alex_daniel64@yahoo.com</span>
            </span>

            <span className="about-details-item">
              Languages :<span className="about-details-text"> Romanian, English</span>
            </span>
          </div>
        </div>

        <div className="about-button">
          <button>
            <a href={cv} download="CV_Alexandru-Daniel_Sarbu" target="_blank" rel="noreferrer">
              <span>DOWNLOAD CV</span>
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>

      <div className="about-experience-container">
        <h2>EXPERIENCE & EDUCATION</h2>

        <div className="about-experience">
          <div className="about-experience-row">
            <div className="about-experience-item">
              <div className="icon-container">
                <SchoolIcon />

                <hr />
              </div>

              <div className="item-container">
                <div className="item-period">
                  <span>2013 - 2017</span>
                </div>

                <div className="item-position">
                  <h3>CHEMICAL ENGINEER</h3>
                  <h4>- Politehnica University of Bucharest</h4>
                </div>

                <div className="item-description">
                  Faculty of Chemical Engineering and Biotechnologies <br /> Bioresources and Polymer Science department
                </div>
              </div>
            </div>

            <div className="about-experience-item">
              <div className="icon-container">
                <SchoolIcon />

                <hr />
              </div>

              <div className="item-container">
                <div className="item-period">
                  <span>2013 - 2017</span>
                </div>

                <div className="item-position">
                  <h3>CHEMICAL ENGINEER</h3>
                  <h4>- Politehnica University of Bucharest</h4>
                </div>

                <div className="item-description">
                  Faculty of Chemical Engineering and Biotechnologies <br /> Bioresources and Polymer Science department
                </div>
              </div>
            </div>

            <div className="about-experience-item">
              <div className="icon-container">
                <SchoolIcon />

                <hr />
              </div>

              <div className="item-container">
                <div className="item-period">
                  <span>2013 - 2017</span>
                </div>

                <div className="item-position">
                  <h3>CHEMICAL ENGINEER</h3>
                  <h4>- Politehnica University of Bucharest</h4>
                </div>

                <div className="item-description">
                  Faculty of Chemical Engineering and Biotechnologies <br /> Bioresources and Polymer Science department
                </div>
              </div>
            </div>
          </div>

          <div className="about-experience-row">
            <div>exp1</div>
            <div>exp1</div>
            <div>exp1</div>
          </div>
        </div>
      </div>

      <div className="about-skills">My skills here</div>
    </div>
  );
};

export default About;
