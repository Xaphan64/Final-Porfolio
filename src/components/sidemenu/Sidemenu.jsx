// ASSETS
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DraftsIcon from "@mui/icons-material/Drafts";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";

// STYLES
import "./Sidemenu.scss";

// LIBRARIES
import { useEffect, useState } from "react";

// MISC

// COMPONENTS
import CustomButton from "../atoms/CustomButton/CustomButton";

// CONFIGURATION
const Sidemenu = ({ handleSwitchPage, page }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const isMobile = window.matchMedia("(max-width: 991px)")?.matches;

  // STATE CONSTANTS
  const [showSidebar, setShowSidebar] = useState(false);

  // LIFE CYCLE
  useEffect(() => {
    setShowSidebar(false);
  }, [page]);

  // EVENT HANDLERS
  return (
    <div className={`sidemenu-container ${showSidebar ? "open" : "close"}`}>
      <div className="mobile-button">
        {showSidebar ? (
          <button onClick={() => setShowSidebar((prev) => !prev)}>
            <CloseIcon />
          </button>
        ) : (
          <button onClick={() => setShowSidebar((prev) => !prev)}>
            <ReorderIcon />
          </button>
        )}
      </div>

      <div className="sidemenu-buttons">
        <CustomButton onClick={() => handleSwitchPage("home")} className={page === "home" ? "active" : "inactive"}>
          {isMobile && <HomeIcon />}
          <span>HOME</span>
          {!isMobile && <HomeIcon />}
        </CustomButton>

        <CustomButton onClick={() => handleSwitchPage("about")} className={page === "about" ? "active" : "inactive"}>
          {isMobile && <PersonIcon />}
          <span>ABOUT</span>
          {!isMobile && <PersonIcon />}
        </CustomButton>

        <CustomButton
          onClick={() => handleSwitchPage("portfolio")}
          className={page === "portfolio" ? "active" : "inactive"}
        >
          {isMobile && <WorkIcon />}
          <span>PORTFOLIO</span>
          {!isMobile && <WorkIcon />}
        </CustomButton>

        <CustomButton
          onClick={() => handleSwitchPage("contact")}
          className={page === "contact" ? "active" : "inactive"}
        >
          {isMobile && <DraftsIcon />}
          <span>CONTACT</span>
          {!isMobile && <DraftsIcon />}
        </CustomButton>
      </div>
    </div>
  );
};

export default Sidemenu;
