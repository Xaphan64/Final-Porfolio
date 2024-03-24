// ASSETS
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";

// STYLES
import "./App.scss";

// LIBRARIES
import { useEffect, useState } from "react";

// MISC

// COMPONENTS
import Sidemenu from "./components/sidemenu/Sidemenu";
import Homepage from "./components/pages/Home/Homepage";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";

// CONFIGURATION
const App = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const [page, setPage] = useState("home");
  const [showSidebar, setShowSidebar] = useState(false);
  const [animate, setAnimate] = useState(false);

  // LIFE CYCLE
  useEffect(() => {
    setShowSidebar(false);
    setAnimate(true);

    const timeout = setTimeout(() => setAnimate(false), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [page]);

  // EVENT HANDLERS
  const handleSwitchPage = (page) => {
    setAnimate(true);
    setTimeout(() => setPage(page), 500);
  };

  return (
    <div className="app-container">
      {animate && (
        <>
          <div className="animation-dark" />
          <div className="animation-dark-second" />
          <div className="animation-orange" />
          <div className="animation-orange-second" />
        </>
      )}

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

      {page === "home" && <Homepage handleSwitchPage={handleSwitchPage} />}
      {page === "about" && <About />}
      {page === "portfolio" && <Portfolio />}
      {page === "contact" && <Contact />}

      <Sidemenu showSidebar={showSidebar} page={page} handleSwitchPage={handleSwitchPage} />
    </div>
  );
};

export default App;
