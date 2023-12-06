import logo from "./logo.svg";
import PropTypes from "prop-types";

function Logo(props) {
  return (
    <img
      src={logo}
      className="App-logo"
      alt="logo"
      style={{ width: `${props.size}px`, height: `${props.size}px` }}
    />
  );
}

// 지정된 props가 없을 경우, 사용할 default 값
Logo.defaultProps = {
  size: 300,
};

Logo.propTypes = {
  size: PropTypes.number,
};

export default Logo;
