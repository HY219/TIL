// useEffect
// 무언가 변화가 있을 때, 감지하여 반응하는 Hook
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  /*
  useEffect(감지 후 실행할 동작, 감지 할 것(리스트, 배열 o));
  */

  /* count의 변화를 감지한다. */
  useEffect(() => {
    console.log(`Clicked ${count} times.`);
  }, [count]);

  /* 컴포넌트가 처음 로드될 때 실행된다. */
  useEffect(() => {
    console.log(
      "Component Loaded. 라이프사이클처럼 사용o. 새로고침할 때 감지. - 전역적인(초기) 이벤트를 사용할 때 활용o"
    );
    const handleScroll = () => {
      console.log(window.scrollY);
    };

    // 전역 이벤트 설정 시
    document.addEventListener("scroll", handleScroll);
    // 반드시 해제
    // return으로 반환한 함수는
    // 컴포넌트가 제거 될 때 실행이 된다.
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div>You clicked {count} times.</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div style={{ height: 1000 }}></div>
    </div>
  );
}
export default App;
