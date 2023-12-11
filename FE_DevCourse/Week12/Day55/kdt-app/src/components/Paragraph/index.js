import PropTypes from "prop-types";

function Paragraph({ children, size = 16, color = "white" }) {
  return <p style={{ fontSize: size, color }}>{children}</p>;
}

Paragraph.propTypes = {
  //children의 타입은 특수하다 = node
  chlidren: PropTypes.node.isRequired, //isRequired - 필수로 있어야하는 값 (값이 비어있으면 error)
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Paragraph;
