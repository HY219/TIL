import React from "react";

// React.forwardRef((props, ref)) => {})
// ref 전달 가능
const Box2 = React.forwardRef((_, ref) => {
  const style = {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  };
  return <div ref={ref} style={style} />;
});

export default Box2;
