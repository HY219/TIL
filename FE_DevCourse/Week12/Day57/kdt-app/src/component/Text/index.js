import "./Text.css";
import PropTypes from "prop-types";

// delete는 예약어기 때문에, del이라는 이름으로 변경하여 사용할 수 있도록 지정
const Text = ({
  block,
  paragragh,
  children,
  size,
  strong,
  underline,
  delete: del,
  color,
  mark,
  code,
  ...props
}) => {
  const Tag = block ? "div" : paragragh ? "p" : "span";
  const fontStyle = {
    fontWeight: strong ? "bold" : undefined,
    fontSize: typeof size === "number" ? size : undefined,
    textDecoration: underline ? "underline" : undefined,
    color,
  };

  if (mark) {
    children = <mark>{children}</mark>;
  }
  if (code) {
    children = <code>{children}</code>;
  }
  if (del) {
    children = <del>{children}</del>;
  }

  return (
    <Tag
      className={typeof size === "string" ? `Text--size-${size}` : undefined}
      style={{ ...props.style, ...fontStyle }}
      {...props}
    >
      {children}
    </Tag>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  paragragh: PropTypes.bool,
  delete: PropTypes.bool,
  code: PropTypes.bool,
  mark: PropTypes.bool,
  strong: PropTypes.bool,
  color: PropTypes.bool,
};

export default Text;
