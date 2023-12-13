// useRef는
// 1. 'DOM에 직접 접근'할 때 사용한다.
// 2. '다시 렌더링하지 않을, 지역 변수'로 사용할 때 사용한다.
// useState는 값이 변경될 때 다시 렌더링을 한다.
// useRef는 값이 변경되도라도 다시 렌더링을 하지 않는다.

import { useRef } from "react";
import Input from "./components/Input";
import AutoCounter from "./components/AutoCounter.js";

function App() {
  const inputRef = useRef();

  return (
    <div>
      {/* ref - 연결 */}
      <Input ref={inputRef} />
      {/* current - DOM에 직접 접근 */}
      <button onClick={() => inputRef.current.focus()}>Focus</button>

      <AutoCounter />
    </div>
  );
}

export default App;
