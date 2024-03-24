// ASSETS

// STYLES
import "./CustomButton.scss";
// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const CustomButton = (props) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="button-container" onClick={props.onClick}>
      <button type={props.type} className={props.className}>
        {props.children}

        <span className="button-mobile">{props.text}</span>
      </button>

      <div className="expanded-side">
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default CustomButton;
