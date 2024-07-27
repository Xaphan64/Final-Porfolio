// ASSETS
import cv from "../../assets/Alexandru-Daniel_Sarbu_CV_July_Updated.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import profilePic from "./../../assets/profilePic.jpg";

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

        <div className="about-image">
          <img src={profilePic} alt="profilePic" />
        </div>

        <div className="about-details">
          <div className="about-details-row">
            <span className="about-details-item">
              First Name :<span className="about-details-text"> Alexandru-Daniel</span>
            </span>

            <span className="about-details-item">
              Last Name :<span className="about-details-text"> Sarbu</span>
            </span>

            <span className="about-details-item">
              Age :<span className="about-details-text"> 30 Years</span>
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
              Email :<span className="about-details-text"> alexandrusarbu64@gmail.com</span>
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

      <hr />

      <div className="about-skills-container">
        <h2>MY SKILLS</h2>

        <div className="about-skills">
          <div className="about-skills-item">
            <h3>Front-End</h3>
            <span>React, HTML, SASS, Java Script, Type Script, Styled Components</span>
          </div>

          <div className="about-skills-item">
            <h3>Online Requirements/ Networking Specialist</h3>
            <span>
              Software Quality, Test Management, Testrail, Project Planning, Software Quality Assurance, Software
              Development Cycle, Networking
            </span>
          </div>

          <div className="about-skills-item">
            <h3>Online Requirements Specialist</h3>
            <span>Project Management, Harbour, Online Services, Test Coverage, API Testing, Online Tests</span>
          </div>

          <div className="about-skills-item">
            <h3>Task Lead and Coordinator</h3>
            <span>DTest, Test Automation, Teabox, Time Management, Test Coordination</span>
          </div>

          <div className="about-skills-item">
            <h3>Task Lead</h3>
            <span>
              Test Processes, Task Management, Issue Management, Microsoft Outlook, Test Cases, Jira Dashboards, Daily
              Reports, Coaching
            </span>
          </div>

          <div className="about-skills-item">
            <h3>Game Tester</h3>
            <span>
              Jira, Microsoft Office, Quality Assurance, Issue Reporting, Game Testing, Confluence, Video Games
            </span>
          </div>
        </div>
      </div>

      <hr />

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
                <WorkIcon />

                <hr />
              </div>

              <div className="item-container">
                <div className="item-period">
                  <span>2017 - 2019</span>
                </div>

                <div className="item-position">
                  <h3>GAME TESTER</h3>
                  <h4>- Ubisoft Bucharest</h4>
                </div>

                <div className="item-description">
                  Contributed extensively to comprehensive testing and collaboration within the Tom Clancy's franchise,
                  mastering various tools and platforms, while providing valuable support on diverse projects.
                </div>
              </div>
            </div>

            <div className="about-experience-item">
              <div className="icon-container">
                <WorkIcon />

                <hr />
              </div>

              <div className="item-container">
                <div className="item-period">
                  <span>Feb 2019 - Nov 2019</span>
                </div>

                <div className="item-position">
                  <h3>TASK LEAD</h3>
                  <h4>- Ubisoft Bucharest</h4>
                </div>

                <div className="item-description">
                  Demonstrated exceptional leadership and proficiency within the Tom Clancy's Franchise, maintaining
                  rigorous quality standards, fostering autonomy, and providing comprehensive documentation and reports
                  to ensure effective team performance.
                </div>
              </div>
            </div>
          </div>

          <div className="about-experience-row">
            <div className="about-experience-item">
              <div className="icon-container">
                <WorkIcon />

                <hr />
              </div>

              <div className="item-container">
                <div className="item-period">
                  <span>Dec 2019 - Aug 2020</span>
                </div>

                <div className="item-position">
                  <h3>TASK LEAD & COORDINATOR</h3>
                  <h4>- Ubisoft Bucharest</h4>
                </div>

                <div className="item-description">
                  Contributed to team development by reinforcing adherence to Jira QC processes, orchestrating efficient
                  testing efforts, actively engaging in QC-Dev meetings, troubleshooting issues and leveraging
                  automation tools for enhanced project efficiency.
                </div>
              </div>
            </div>

            <div className="about-experience-item">
              <div className="icon-container">
                <WorkIcon />

                <hr />
              </div>

              <div className="item-container">
                <div className="item-period">
                  <span>Sept 2020 - May 2022</span>
                </div>

                <div className="item-position">
                  <h3>ONLINE REQUIREMENTS SPECIALIST</h3>
                  <h4>- Ubisoft Bucharest</h4>
                </div>

                <div className="item-description">
                  Conducted thorough online tests, provided detailed feedback, demonstrated adept project management
                  skills, and ensured thorough documentation while staying aligned with project requirements.
                </div>
              </div>
            </div>

            <div className="about-experience-item">
              <div className="icon-container">
                <WorkIcon />

                <hr />
              </div>

              <div className="item-container">
                <div className="item-period">
                  <span>Jun 2022 - Present</span>
                </div>

                <div className="item-position">
                  <h3>ONLINE REQUIREMENTS/NETWORKING SPECIALIST</h3>

                  {/* <h4>- Ubisoft Bucharest</h4> */}
                </div>

                <div className="item-description">
                  Continuously conducted online tests, provided constructive feedback, assessed Quality of Service,
                  optimized matchmaking systems, and facilitated project management efforts, including tutorials and
                  documentation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
