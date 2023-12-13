// useMemo
// 최적화를 위해 사용하는 Hook
// 1. 함수 컴포넌트는 자신의 상태가 변경될 때 리렌더링된다.
// 2. 부모 컴포넌트로 부터 받는 prop이 변경될 때 리렌더링된다.
// 3. 부모 컴포넌트의 상태가 변경되면 리렌더링된다.
// 만약 연산의 속도가 느린 컴포넌트라면?

// 매번 리렌더링 되지 않도록 막는다.
// :을 추가 했을 때, sum 값은 리렌더링 되지 않도록 해보자.
import { useState } from "react";
import ShowSum from "./components/ShowSum";

function App() {
  const [label, setLabel] = useState("Result");

  return (
    <div>
      <ShowSum label={label} n={1000000000} />
      <button onClick={() => setLabel(label + ":")}>Click me!</button>
    </div>
  );
}

export default App;
