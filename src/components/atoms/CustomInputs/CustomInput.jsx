// ASSETS

// STYLES

// LIBRARIES
import "./CustomInputs.scss";
// MISC

// COMPONENTS

// CONFIGURATION
const CustomInput = (props) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      required
    />
  );
};

export default CustomInput;
