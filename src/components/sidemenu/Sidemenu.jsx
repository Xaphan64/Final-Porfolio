// ASSETS
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DraftsIcon from "@mui/icons-material/Drafts";

// STYLES
import "./Sidemenu.scss";

// LIBRARIES

// MISC

// COMPONENTS
import CustomButton from "../atoms/CustomButton";

// CONFIGURATION
const Sidemenu = ({ handleSwitchPage }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="sidemenu-container">
      <CustomButton onClick={() => handleSwitchPage("home")}>
        <span>HOME</span>
        <HomeIcon />
      </CustomButton>

      <CustomButton onClick={() => handleSwitchPage("about")}>
        <span>ABOUT</span>
        <PersonIcon />
      </CustomButton>

      <CustomButton onClick={() => handleSwitchPage("portfolio")}>
        <span>PORTFOLIO</span>
        <WorkIcon />
      </CustomButton>

      <CustomButton onClick={() => handleSwitchPage("contact")}>
        <span>CONTACT</span>
        <DraftsIcon />
      </CustomButton>
    </div>
  );
};

export default Sidemenu;
