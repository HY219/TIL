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
    fontSize: size,
    textDecoration: underline ? "underline" : undefined,
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
    <Tag style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
