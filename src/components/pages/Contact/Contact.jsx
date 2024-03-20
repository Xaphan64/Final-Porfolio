// ASSETS
import DraftsIcon from "@mui/icons-material/Drafts";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

// STYLES
import "./Contact.scss";
import CustomInput from "../../atoms/CustomInputs/CustomInput";
import CustomTextarea from "../../atoms/CustomInputs/CustomTextarea";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Contact = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="contact-container">
      <div className="contact-title">
        <h1>CONTACT</h1>
        <div className="contact-front-title">
          <h2>GET IN</h2>
          <h2 className="colored-title">TOUCH</h2>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-text">
          <h2>DON'T BE SHY !</h2>

          <span>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </span>

          <div className="contact-details-container">
            <div className="contact-details-item">
              <DraftsIcon />
              <div className="contact-details-text">
                <span>MAIL ME</span>
                <span>alex_daniel@yahoo.com</span>
              </div>
            </div>

            <div className="contact-details-item">
              <ContactPhoneIcon />
              <div className="contact-details-text">
                <span>CALL ME</span>
                <span>+40 742 754 878</span>
              </div>
            </div>
          </div>

          <div className="contact-details-buttons">
            <a href="https://www.linkedin.com/in/alexandru-daniel-sarbu-b117861aa/" rel="noreferrer" target="_blank">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/Xaphan64" rel="noreferrer" target="_blank">
              <GitHubIcon />
            </a>
          </div>
        </div>

        <div className="contact-inputs-container">
          <div className="contact-inputs">
            <CustomInput placeholder="TEST" />

            <CustomInput />

            <CustomInput />
          </div>

          <div className="contact-textarea">
            <CustomTextarea placeholder="TEST" />
          </div>

          <div className="contact-button">
            <button>
              <span>SEND MESSAGE</span>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
