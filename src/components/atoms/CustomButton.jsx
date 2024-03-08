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
    <button type={props.type} onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
};

export default CustomButton;
