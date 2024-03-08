// ASSETS

// STYLES
import "./App.scss";

// LIBRARIES
import { useState } from "react";
import Sidemenu from "./components/sidemenu/Sidemenu";

// MISC

// COMPONENTS

// CONFIGURATION
const App = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const [page, setPage] = useState("home");

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleSwitchPage = (index) => {
    setPage(index);
  };

  return (
    <div className="app-container">
      {page === "home" && <h1>homepage</h1>}
      {page === "about" && <h1>about page</h1>}
      {page === "portfolio" && <h1>portfolio page</h1>}
      {page === "contact" && <h1>contact page</h1>}

      <Sidemenu handleSwitchPage={handleSwitchPage} />
    </div>
  );
};

export default App;
