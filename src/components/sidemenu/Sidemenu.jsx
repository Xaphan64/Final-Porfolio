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
import CustomButton from "../atoms/CustomButton/CustomButton";

// CONFIGURATION
const Sidemenu = ({ handleSwitchPage, page, showSidebar }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const isMobile = window.matchMedia("(max-width: 991px)")?.matches;

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className={`sidemenu-container ${showSidebar ? "open" : "close"}`}>
      <div className="sidemenu-buttons">
        <CustomButton
          onClick={() => handleSwitchPage("home")}
          text="HOME"
          className={page === "home" ? "active" : "inactive"}
        >
          {isMobile && <HomeIcon />}
          {!isMobile && <HomeIcon />}
        </CustomButton>

        <CustomButton
          onClick={() => handleSwitchPage("about")}
          text="ABOUT"
          className={page === "about" ? "active" : "inactive"}
        >
          {isMobile && <PersonIcon />}
          {!isMobile && <PersonIcon />}
        </CustomButton>

        <CustomButton
          onClick={() => handleSwitchPage("portfolio")}
          text="PORTFOLIO"
          className={page === "portfolio" ? "active" : "inactive"}
        >
          {isMobile && <WorkIcon />}
          {!isMobile && <WorkIcon />}
        </CustomButton>

        <CustomButton
          onClick={() => handleSwitchPage("contact")}
          text="CONTACT"
          className={page === "contact" ? "active" : "inactive"}
        >
          {isMobile && <DraftsIcon />}
          {!isMobile && <DraftsIcon />}
        </CustomButton>
      </div>
    </div>
  );
};

export default Sidemenu;
