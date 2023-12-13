import { useRef, useState } from "react";

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const intervalId = useRef(); // 지역변수로 Id지정

  const handleStart = () => {
    // intervalId.current가 변화하더라도, 다시 렌더링 하지 않는다. - useRef를 사용하는 이유
    intervalId.current = setInterval(() => {
      // 반복적으로 실행할 작업
      setCount((count) => count + 1);
    }, 1000);
  };

  const handleStop = () => {
    // 반복 작업 중지
    clearInterval(intervalId.current);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

export default AutoCounter;
