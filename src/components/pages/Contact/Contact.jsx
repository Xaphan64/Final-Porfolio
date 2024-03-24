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
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// MISC

// COMPONENTS

// CONFIGURATION
const Contact = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const form = useRef();

  // STATE CONSTANTS
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleInputChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_02980xt";
    const templateId = "template_ev3ltmo";
    const publicKey = "tpQ6QjXIQbrarpv-I";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");

          setInputValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setConfirmationMessage(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

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
        <div className="contact-text-container">
          <h2>CONTACT ME!</h2>

          <span>
            I am interested in job opportunities - especially ambitious or large projects. However, if you have other
            requests or questions, do not hesitate to contact me using the form.
          </span>

          <div className="contact-details-container">
            <div className="contact-details-item">
              <DraftsIcon />
              <div className="contact-details-text">
                <span className="top">MAIL ME</span>
                <span className="bold">alex_daniel@yahoo.com</span>
              </div>
            </div>

            <div className="contact-details-item">
              <ContactPhoneIcon />
              <div className="contact-details-text">
                <span className="top">CALL ME</span>
                <span className="bold">+40 742 754 878</span>
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

        <form onSubmit={handleSubmit} ref={form} className="contact-form-container">
          <div className="contact-inputs">
            <CustomInput
              type="text"
              name="name"
              value={inputValues.name}
              onChange={handleInputChange}
              placeholder="YOUR NAME"
            />

            <CustomInput
              type="email"
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
              placeholder="YOUR EMAIL"
            />

            <CustomInput
              type="text"
              name="subject"
              value={inputValues.subject}
              onChange={handleInputChange}
              placeholder="YOUR SUBJECT"
            />
          </div>

          <div className="contact-textarea">
            <CustomTextarea
              name="message"
              value={inputValues.message}
              onChange={handleInputChange}
              placeholder="YOUR MESSAGE"
            />
          </div>

          <div className="contact-button">
            <button type="submit">
              <span>SEND MESSAGE</span>
              <SendIcon />
            </button>
          </div>
        </form>
      </div>

      {confirmationMessage && (
        <h2 className="contact-message">You message has been sent, I will contact you as soon as possible.</h2>
      )}
    </div>
  );
};

export default Contact;
