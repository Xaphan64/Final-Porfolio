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

// CONFIGURATION
const App = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const [page, setPage] = useState("home");
  const [showSidebar, setShowSidebar] = useState(false);

  // LIFE CYCLE
  useEffect(() => {
    setShowSidebar(false);
  }, [page]);

  // EVENT HANDLERS
  const handleSwitchPage = (page) => {
    setPage(page);
  };

  return (
    <div className="app-container">
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

      {page === "home" && <Homepage />}
      {page === "about" && <h1>about page</h1>}
      {page === "portfolio" && <h1>portfolio page</h1>}
      {page === "contact" && <h1>contact page</h1>}

      <Sidemenu showSidebar={showSidebar} page={page} handleSwitchPage={handleSwitchPage} />
    </div>
  );
};

export default App;
