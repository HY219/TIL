import React, { useEffect } from "react";

// React.forwardRef((props,ref)) => {})
// 함수형 컴포넌트가 ref 전달 가능
const Input = React.forwardRef((_, ref) => {
  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <>
      Input: <input ref={ref} />
    </>
  );
});

export default Input;
