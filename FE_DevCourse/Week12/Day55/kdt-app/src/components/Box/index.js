import React from "react";

// 리렌더링 방지
// 자식 컴포넌트(Box)는 변경이 없고, 부모 컴포넌트(App)만 변경이 있을 경우
const Box = React.memo(() => {
  console.log("Rendered");
  const style = {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  };
  return <div style={style}></div>;
});

export default Box;
