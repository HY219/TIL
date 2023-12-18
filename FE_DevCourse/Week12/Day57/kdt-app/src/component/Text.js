// delete는 예약어기 때문에, del이라는 이름으로 변경하여 사용할 수 있도록 지정
const Text = ({
  children,
  size,
  strong,
  underline,
  delete: del,
  color,
  ...props
}) => {
  const fontStyle = {
    fontWeight: strong ? "bold" : undefined,
    fontSize: size,
    textDecoration: underline ? "underline" : undefined,
  };

  if (del) {
    children = <del>{children}</del>;
  }

  return (
    <div style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </div>
  );
};

export default Text;
