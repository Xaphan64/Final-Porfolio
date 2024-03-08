// ASSETS

// STYLES
import "./App.scss";

// LIBRARIES
import { useState } from "react";
import Sidemenu from "./components/sidemenu/Sidemenu";
import Homepage from "./components/pages/Home/Homepage";

// MISC

// COMPONENTS

// CONFIGURATION
const App = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const [page, setPage] = useState("home");

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleSwitchPage = (page) => {
    setPage(page);
  };

  return (
    <div className="app-container">
      {page === "home" && <Homepage />}
      {page === "about" && <h1>about page</h1>}
      {page === "portfolio" && <h1>portfolio page</h1>}
      {page === "contact" && <h1>contact page</h1>}

      <Sidemenu page={page} handleSwitchPage={handleSwitchPage} />
    </div>
  );
};

export default App;
