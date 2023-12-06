import logo from "./logo.svg";
import PropTypes from "prop-types";

function Logo({ size = 300 }) {
  return (
    <img
      src={logo}
      className="App-logo"
      alt="logo"
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}

Logo.propTypes = {
  size: PropTypes.number,
};

export default Logo;
